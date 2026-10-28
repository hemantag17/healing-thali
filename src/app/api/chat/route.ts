import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { buildChatSystemPrompt } from "@/lib/kb/chat-prompt";
import { isDeliveryMode } from "@/lib/kb/delivery-mode";
import { QA_PAIRS } from "@/lib/kb/qa";
import { MYTHS } from "@/lib/kb/myths";

export const maxDuration = 60;

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

interface ApiMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const WORKERS_AI_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

// Lightweight keyword scoring for retrieval-augmented grounding.
function score(text: string, query: string): number {
  const stop = new Set([
    "the", "a", "an", "is", "are", "my", "i", "to", "of", "and", "in", "on", "it", "for",
    "do", "does", "can", "should", "what", "how", "when", "with", "after", "me", "you",
    "have", "has", "will", "be", "that", "this", "not", "no", "yes", "am", "was", "at",
  ]);
  const tokens = query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !stop.has(t));
  if (tokens.length === 0) return 0;
  const hay = text.toLowerCase();
  let s = 0;
  for (const t of tokens) {
    if (hay.includes(t)) s += 1;
  }
  return s / tokens.length;
}

function buildRetrievalContext(query: string): string {
  const qaHits = QA_PAIRS.map((qa) => ({
    qa,
    s: Math.max(score(qa.question, query), score(qa.fullAnswer.join(" "), query) * 0.7),
  }))
    .filter((h) => h.s > 0.15)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map(
      (h) =>
        `Q: ${h.qa.question}\nA: ${h.qa.shortAnswer} ${h.qa.fullAnswer.join(" ")}`
    );

  const mythHits = MYTHS.map((m) => ({
    m,
    s: Math.max(score(m.claim, query), score(m.science.join(" "), query) * 0.6),
  }))
    .filter((h) => h.s > 0.15)
    .sort((a, b) => b.s - a.s)
    .slice(0, 2)
    .map((h) => `MYTH: ${h.m.claim}\nVERDICT: ${h.m.verdict}\nSCIENCE: ${h.m.science.join(" ")}\nDO INSTEAD: ${h.m.doInstead}`);

  const parts: string[] = [];
  if (qaHits.length) parts.push("RELEVANT KB Q&A:\n" + qaHits.join("\n---\n"));
  if (mythHits.length) parts.push("RELEVANT MYTH ENTRIES:\n" + mythHits.join("\n---\n"));
  if (parts.length === 0) {
    parts.push(
      "No directly matched KB extract. Rely on the core knowledge in your instructions; if the question is outside this knowledge base, say so and suggest asking her obstetrician."
    );
  }
  return parts.join("\n\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: IncomingMessage[] = Array.isArray(body?.messages) ? body.messages : [];
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser || !lastUser.content?.trim()) {
      return NextResponse.json(
        { reply: "Please type a question about vegetarian postpartum recovery.", sources: [] },
        { status: 200 }
      );
    }

    // Delivery mode: "csection" (default) or "vaginal" — shapes the system prompt.
    const mode = isDeliveryMode(body?.mode) ? body.mode : "csection";

    // Keep a trimmed history for context
    const trimmed = messages
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-8);

    const retrieval = buildRetrievalContext(lastUser.content);

    const systemPrompt = `${buildChatSystemPrompt(mode)}\n\n=== RETRIEVED CONTEXT FOR THIS QUESTION ===\n${retrieval}${
      mode === "vaginal"
        ? "\n\n[Note: retrieved context may be cesarean-specific; the mother had a NORMAL (vaginal) delivery \u2014 adapt protocols as instructed above.]"
        : ""
    }`;

    // Standard chat messages: system prompt + trimmed history + recency nudge.
    const chatMessages: ApiMessage[] = [
      { role: "system", content: systemPrompt },
      ...trimmed.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
      // Recency nudge: keeps the model anchored to English and the KB rules.
      {
        role: "user",
        content:
          "[System note — ignore for content, obey for form: reply in English only, stay within the knowledge base above, keep it warm and concise.]",
      },
    ];

    const reply = await generateReply(chatMessages);
    if (!reply) {
      return NextResponse.json(
        { reply: "Sorry \u2014 I could not generate an answer just now. Please try again.", sources: [] },
        { status: 200 }
      );
    }
    return NextResponse.json({ reply, sources: retrieval.split("\n---\n").slice(0, 2) });
  } catch (err) {
    console.error("chat error:", err);
    return NextResponse.json(
      { reply: "The assistant is temporarily unavailable. Please try again in a moment.", error: true },
      { status: 500 }
    );
  }
}

/**
 * Provider chain for the assistant reply:
 * 1. Cloudflare Workers AI — used in production (AI binding in wrangler.jsonc).
 * 2. z-ai-web-dev-sdk — local sandbox development fallback.
 * 3. Empty string — surfaced as a friendly "try again" by the caller.
 */
async function generateReply(messages: ApiMessage[]): Promise<string> {
  // 1) Cloudflare Workers AI (production)
  try {
    const { env } = await getCloudflareContext({ async: true });
    const ai = (
      env as unknown as {
        AI?: {
          run: (model: string, input: unknown) => Promise<{ response?: string }>;
        };
      }
    ).AI;
    if (ai) {
      const result = await ai.run(WORKERS_AI_MODEL, { messages, stream: false });
      const text = result?.response?.trim();
      if (text) return text;
    }
  } catch {
    // Not running inside the Workers runtime (e.g. plain `next dev`) — fall through.
  }

  // 2) Sandbox SDK (local development in the build environment)
  try {
    const { default: ZAI } = await import("z-ai-web-dev-sdk");
    const zai = await ZAI.create();
    // This SDK takes the system prompt as a leading assistant-role message.
    const sdkMessages = messages.map((m, i) =>
      i === 0 && m.role === "system"
        ? { role: "assistant" as const, content: m.content }
        : { role: m.role as "user" | "assistant", content: m.content }
    );
    const completion = await zai.chat.completions.create({
      messages: sdkMessages,
      thinking: { type: "disabled" },
    });
    const text = completion.choices[0]?.message?.content?.trim();
    if (text) return text;
  } catch (err) {
    console.error("chat provider error:", err);
  }

  return "";
}
