import { NextRequest, NextResponse } from "next/server";
import { QA_PAIRS } from "@/lib/kb/qa";

// Server-side search over the 15 KB Q&A pairs. Used by the chat pipeline
// (retrieval) and available directly for FAQ search.
// GET /api/qa?q=ghee
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  if (!q) {
    return NextResponse.json({ count: QA_PAIRS.length, results: QA_PAIRS });
  }

  const stop = new Set([
    "the", "a", "an", "is", "are", "my", "i", "to", "of", "and", "in", "on", "it", "for",
    "do", "does", "can", "should", "what", "how", "when", "with", "after", "me", "you",
  ]);
  const tokens = q.split(/\s+/).filter((t) => t.length > 2 && !stop.has(t));

  const results = QA_PAIRS.map((qa) => {
    const question = qa.question.toLowerCase();
    const answer = (qa.shortAnswer + " " + qa.fullAnswer.join(" ")).toLowerCase();
    const tags = qa.tags.join(" ").toLowerCase();
    let s = 0;
    for (const t of tokens) {
      if (question.includes(t)) s += 3;
      else if (tags.includes(t)) s += 2;
      else if (answer.includes(t)) s += 1;
    }
    return { qa, s };
  })
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .map((r) => r.qa);

  return NextResponse.json({ count: results.length, results });
}
