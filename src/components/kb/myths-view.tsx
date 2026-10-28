"use client";

import { useState } from "react";
import {
  BookOpen,
  CircleCheck,
  HeartHandshake,
  Search,
  ShieldQuestion,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MYTHS, TRADITIONS_KEPT } from "@/lib/kb/myths";
import { QA_PAIRS } from "@/lib/kb/qa";
import type { Verdict } from "@/lib/kb/types";

const VERDICT_STYLES: Record<Verdict, string> = {
  DEBUNKED: "bg-destructive/10 text-destructive border-destructive/30",
  "PARTLY TRUE": "bg-accent text-turmeric-deep border-turmeric/50",
  "FINE IN MODERATION": "bg-accent/60 text-turmeric-deep border-turmeric/40",
  KEEP: "bg-leaf/10 text-leaf-deep border-leaf/40",
};

export function MythsView() {
  const [faqQuery, setFaqQuery] = useState("");
  const filteredFaqs = QA_PAIRS.filter(
    (q) =>
      !faqQuery.trim() ||
      (q.question + q.shortAnswer + q.tags.join(" "))
        .toLowerCase()
        .includes(faqQuery.trim().toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header>
        <h1 className="text-2xl font-bold">Myths vs science</h1>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Indian postpartum traditions encode generations of care — but when a practice
          restricts nutrition, delays recovery or causes harm, the evidence is unambiguous.
          Every verdict below follows one standard: peer-reviewed science and guideline-level
          evidence (WHO, ICMR-NIN, ERAS, IARC, Cochrane-level reviews).
        </p>
      </header>

      {/* Legend */}
      <div className="flex flex-wrap gap-2" aria-label="Verdict legend">
        {(Object.keys(VERDICT_STYLES) as Verdict[]).map((v) => (
          <span
            key={v}
            className={cn("rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wide", VERDICT_STYLES[v])}
          >
            {v}
          </span>
        ))}
      </div>

      {/* Myth cards */}
      <section aria-label="Myth verdicts">
        <Accordion type="single" collapsible defaultValue="myth-1" className="space-y-2.5">
          {MYTHS.map((m) => (
            <AccordionItem
              key={m.id}
              value={`myth-${m.id}`}
              className="overflow-hidden rounded-2xl border bg-card px-0"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <div className="flex min-w-0 flex-1 flex-col items-start gap-2 pr-2 text-left">
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      VERDICT_STYLES[m.verdict]
                    )}
                  >
                    {m.verdict}
                  </span>
                  <span className="text-sm font-bold leading-snug sm:text-[15px]">
                    &ldquo;{m.claim}&rdquo;
                  </span>
                  <span className="text-xs text-muted-foreground">{m.saidBy}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border-t px-4 pb-4 pt-3">
                <p className="text-xs italic text-muted-foreground">
                  Where it comes from: {m.origin}
                </p>
                <div className="mt-3 space-y-2.5">
                  {m.science.map((s, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {s}
                    </p>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-leaf/40 bg-leaf/5 p-3.5">
                  <p className="flex items-start gap-2 text-sm font-medium leading-relaxed">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" />
                    <span>
                      <span className="font-bold text-leaf-deep">What to do instead: </span>
                      {m.doInstead}
                    </span>
                  </p>
                </div>
                <p className="mt-2.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
                  Evidence: {m.ref}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Traditions worth keeping */}
      <section aria-labelledby="keep">
        <h2 id="keep" className="mb-3 flex items-center gap-2 text-lg font-bold">
          <HeartHandshake className="h-5 w-5 text-primary" /> Traditions worth keeping
        </h2>
        <div className="overflow-hidden rounded-2xl border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="px-4 py-2.5 text-xs font-bold uppercase tracking-wide">Practice</th>
                  <th className="px-4 py-2.5 text-xs font-bold uppercase tracking-wide">Scientific verdict</th>
                  <th className="px-4 py-2.5 text-xs font-bold uppercase tracking-wide">How to keep it</th>
                </tr>
              </thead>
              <tbody>
                {TRADITIONS_KEPT.map((t, i) => (
                  <tr key={t.practice} className={i % 2 ? "bg-muted/30" : ""}>
                    <td className="px-4 py-2.5 font-medium">{t.practice}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{t.verdict}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{t.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <h2 id="faq" className="flex items-center gap-2 text-lg font-bold">
            <BookOpen className="h-5 w-5 text-primary" /> 15 answered questions
          </h2>
          <span className="text-xs text-muted-foreground">{filteredFaqs.length} shown</span>
        </div>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={faqQuery}
            onChange={(e) => setFaqQuery(e.target.value)}
            placeholder="Search the questions — ghee, curd, water, weight, DHA…"
            className="h-12 rounded-xl border bg-card pl-10 text-base"
            aria-label="Search questions"
          />
        </div>
        {filteredFaqs.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
            <ShieldQuestion className="mx-auto mb-2 h-6 w-6 opacity-40" />
            No question matched — try &ldquo;ghee&rdquo;, &ldquo;curd&rdquo;, &ldquo;water&rdquo; or clear the search.
          </div>
        ) : (
          <Accordion type="single" collapsible className="mt-3 space-y-2">
            {filteredFaqs.map((q) => (
              <AccordionItem
                key={q.id}
                value={`qa-${q.id}`}
                className="rounded-2xl border bg-card px-0 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="px-4 py-3.5 hover:no-underline">
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 pr-2 text-left">
                    <span className="text-sm font-semibold leading-snug">{q.question}</span>
                    <span className="text-xs leading-snug text-muted-foreground">
                      {q.shortAnswer}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-t px-4 pb-4 pt-3">
                  <div className="space-y-2.5">
                    {q.fullAnswer.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {q.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </section>
    </div>
  );
}
