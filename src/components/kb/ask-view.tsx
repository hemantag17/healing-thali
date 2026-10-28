"use client";

import { useEffect, useRef, useState } from "react";
import { Info, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { DeliveryMode } from "@/lib/kb/delivery-mode";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS: Record<DeliveryMode, string[]> = {
  csection: [
    "How much protein do I need today?",
    "Is curd safe for me after my C-section?",
    "Help me explain the water rule to my family",
    "I'm vegetarian — how do I get DHA?",
    "What are the warning signs I should never ignore?",
  ],
  vaginal: [
    "How much protein do I need today?",
    "When can I eat normal food after my delivery?",
    "Help me explain the water rule to my family",
    "I'm vegetarian — how do I get DHA?",
    "What are the warning signs I should never ignore?",
  ],
};

export function AskView({ mode }: { mode: DeliveryMode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8), mode }),
      });
      const data = await res.json();
      if (!res.ok || data?.error) throw new Error("chat failed");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — the assistant could not be reached just now. Please try again in a moment. If your question is urgent or medical, contact your doctor directly.",
        },
      ]);
    } finally {
      setLoading(false);
      areaRef.current?.focus();
    }
  }

  return (
    <div className="flex flex-col gap-4 pt-4">
      <header>
        <h1 className="text-2xl font-bold">Ask the assistant</h1>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Ask anything about vegetarian recovery after a{" "}
          {mode === "csection" ? "C-section" : "normal delivery"}. Answers are generated only
          from this knowledge base (ICMR-NIN 2020, WHO, ERAS Society evidence) — never from
          random websites.
        </p>
      </header>

      <div className="flex items-start gap-2.5 rounded-xl border border-turmeric/50 bg-accent/50 p-3.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-deep" />
        <p className="text-xs leading-relaxed">
          Educational guidance only — not a doctor. For fever, wound changes, heavy bleeding or
          low mood, contact your obstetrician or local emergency services immediately.
        </p>
      </div>

      {/* Conversation */}
      <div
        ref={listRef}
        className="flex min-h-[45vh] flex-col gap-3 overflow-y-auto rounded-2xl border bg-card p-4"
        aria-live="polite"
      >
        {messages.length === 0 && !loading && (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 py-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your private conversation — nothing is stored on any server.
            </p>
            <div className="mt-2 flex max-w-md flex-wrap justify-center gap-2">
              {SUGGESTIONS[mode].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="min-h-9 rounded-full border bg-background px-3.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[92%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[80%]",
              m.role === "user"
                ? "self-end bg-primary text-primary-foreground"
                : "self-start border bg-muted/40"
            )}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="self-start rounded-2xl border bg-muted/40 px-4 py-3">
            <div className="flex gap-1.5" aria-label="Assistant is typing">
              <span className="typing-dot h-2 w-2 rounded-full bg-primary" style={{ animationDelay: "0s" }} />
              <span className="typing-dot h-2 w-2 rounded-full bg-primary" style={{ animationDelay: "0.15s" }} />
              <span className="typing-dot h-2 w-2 rounded-full bg-primary" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-end gap-2">
        <Textarea
          ref={areaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Type your question…"
          rows={2}
          className="max-h-32 flex-1 resize-none rounded-xl border bg-card text-base"
          aria-label="Your question"
        />
        <Button
          type="button"
          onClick={() => send()}
          disabled={loading || !input.trim()}
          aria-label="Send question"
          className="h-12 w-12 rounded-xl p-0"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>

      <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        Grounded retrieval + evidence-first system prompt. If evidence does not exist, the
        assistant will say so instead of guessing.
      </p>
    </div>
  );
}
