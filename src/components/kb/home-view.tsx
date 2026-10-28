"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Leaf,
  Phone,
  Quote,
  ShieldCheck,
  TriangleAlert,
  UtensilsCrossed,
  Baby,
  Flame,
  FileDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPhases } from "@/lib/kb/phases";
import { MYTHS } from "@/lib/kb/myths";
import { DAILY_CHECKLIST, getSheetFamilyNote, SHEET_REDFLAGS } from "@/lib/kb/cheatsheet";
import { EMERGENCY_REGIONS, EMERGENCY_GENERIC } from "@/lib/kb/emergency";
import { REFERENCES, EVIDENCE_STANDARD } from "@/lib/kb/references";
import type { DeliveryMode } from "@/lib/kb/delivery-mode";
import type { View } from "./nav";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function HomeView({
  mode,
  onNavigate,
  onSelectPhase,
  onPrintSheet,
}: {
  mode: DeliveryMode;
  onNavigate: (v: View) => void;
  onSelectPhase: (phaseId: string) => void;
  onPrintSheet: () => void;
}) {
  const phases = getPhases(mode);

  return (
    <div className="flex flex-col gap-6 pt-4">
      {/* Hero */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[#1f5b58] p-6 text-primary-foreground sm:p-8"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-15"
        >
          <circle cx="100" cy="100" r="92" fill="none" stroke="#fff" strokeWidth="10" />
          <circle cx="100" cy="62" r="24" fill="#fff" />
          <circle cx="66" cy="120" r="24" fill="#e8b04b" />
          <circle cx="134" cy="120" r="24" fill="#fff" />
        </svg>
        <div className="relative">
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
            <Baby className="h-3.5 w-3.5" /> For Indian mothers, everywhere
          </p>
          <h1 className="max-w-md text-2xl font-bold leading-tight sm:text-4xl">
            {mode === "csection" ? (
              <>
                Recover strong after your C-section — the evidence-based vegetarian
                way.
              </>
            ) : (
              <>
                Recover strong after your delivery — the evidence-based vegetarian
                way.
              </>
            )}
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed opacity-90 sm:text-base">
            A free guide built from peer-reviewed science — ICMR-NIN 2020, WHO and ERAS
            Society guidelines — for healing, breastfeeding and long-term health after a
            {mode === "csection" ? " cesarean" : " normal delivery"}. 100% vegetarian. No
            products, no myths, no tracking.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate("stages")}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Find your stage <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onPrintSheet}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white/15 px-4 text-sm font-semibold ring-1 ring-white/40 transition-colors hover:bg-white/25"
            >
              <FileDown className="h-4 w-4" /> One-page fridge sheet
            </button>
          </div>
        </div>
      </motion.section>

      {/* Stage picker */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.05 }} aria-labelledby="stage-pick">
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <h2 id="stage-pick" className="text-lg font-bold">Where are you today?</h2>
            <p className="text-sm text-muted-foreground">
              No dates needed — every stage is counted from the day of birth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {phases.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPhase(p.id)}
              className="flex min-h-11 flex-col rounded-xl border bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="text-[11px] font-bold uppercase tracking-wide text-primary">
                {p.shortLabel}
              </span>
              <span className="mt-0.5 text-sm font-medium leading-snug">{p.shortTitle}</span>
            </button>
          ))}
        </div>
      </motion.section>

      {/* Daily non-negotiables */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.1 }} aria-labelledby="daily">
        <h2 id="daily" className="mb-3 text-lg font-bold">
          The daily non-negotiables
        </h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {DAILY_CHECKLIST.slice(0, 6).map((item) => (
            <div key={item.text} className="flex items-start gap-3 rounded-xl border bg-card p-3.5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium leading-snug">{item.text}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.why}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Red flags */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.15 }} aria-labelledby="redflags">
        <div className="rounded-2xl border-2 border-destructive/60 bg-destructive/5 p-5">
          <h2 id="redflags" className="flex items-center gap-2 text-lg font-bold text-destructive">
            <TriangleAlert className="h-5 w-5" /> Call your doctor now if
          </h2>
          <ul className="mt-3 space-y-1.5">
            {SHEET_REDFLAGS.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm leading-snug">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {EMERGENCY_REGIONS.map((r) => (
              <div
                key={r.region}
                className="rounded-xl border border-destructive/30 bg-background/60 p-2.5"
              >
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-destructive">
                  <Phone className="h-3 w-3" /> {r.region}
                </p>
                <p className="mt-1 text-xs font-semibold leading-snug">{r.emergency}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                  {r.mentalHealth}
                  {r.extra ? ` · ${r.extra}` : ""}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-destructive/90">{EMERGENCY_GENERIC}</p>
        </div>
      </motion.section>

      {/* Myth teaser */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.2 }} aria-labelledby="myth-tease">
        <div className="mb-3 flex items-end justify-between">
          <h2 id="myth-tease" className="text-lg font-bold">Myth vs science</h2>
          <button
            type="button"
            onClick={() => onNavigate("myths")}
            className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            All 10 verdicts <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {MYTHS.slice(0, 3).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => onNavigate("myths")}
              className="flex min-h-11 flex-col gap-2 rounded-xl border bg-card p-3.5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-destructive">
                {m.verdict}
              </span>
              <span className="text-sm font-medium leading-snug">&ldquo;{m.claim.split(" \u2014 ")[0]}&rdquo;</span>
            </button>
          ))}
        </div>
      </motion.section>

      {/* Family note */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.25 }} aria-labelledby="family">
        <div className="rounded-2xl border border-turmeric/50 bg-accent/60 p-5">
          <h2 id="family" className="flex items-center gap-2 text-base font-bold">
            <Quote className="h-4 w-4 text-turmeric-deep" /> A note for the family
          </h2>
          <p className="mt-2 text-sm leading-relaxed">{getSheetFamilyNote(mode)}</p>
        </div>
      </motion.section>

      {/* Evidence & references */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.3 }} aria-labelledby="evidence">
        <div className="flex flex-wrap items-center gap-2">
          <Leaf className="h-4 w-4 text-primary" />
          <h2 id="evidence" className="text-base font-bold">Evidence behind this guide</h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EVIDENCE_STANDARD}</p>
        <Accordion type="single" collapsible className="mt-3">
          <AccordionItem value="refs" className="border-none">
            <AccordionTrigger className="rounded-xl border bg-card px-4 text-sm font-semibold hover:no-underline">
              <span className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-primary" /> Show all 21 references (R1–R21)
              </span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 rounded-xl border bg-card p-4">
              <ul className="space-y-2.5">
                {REFERENCES.map((r) => (
                  <li key={r.id} className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">{r.id}</span> {r.text}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>

      {/* Quick links */}
      <motion.section {...fadeUp} transition={{ duration: 0.35, delay: 0.35 }} className="grid gap-2 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onNavigate("nutrition")}
          className="flex min-h-11 items-center gap-3 rounded-xl border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <UtensilsCrossed className="h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold">Food lists &amp; nutrients</p>
            <p className="text-xs text-muted-foreground">Protein, iron, calcium sources</p>
          </div>
        </button>
        <button
          type="button"
          onClick={() => onNavigate("myths")}
          className="flex min-h-11 items-center gap-3 rounded-xl border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Flame className="h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold">15 answered questions</p>
            <p className="text-xs text-muted-foreground">Ghee, curd, water, weight&hellip;</p>
          </div>
        </button>
        <button
          type="button"
          onClick={() => onNavigate("ask")}
          className="flex min-h-11 items-center gap-3 rounded-xl border border-primary/40 bg-secondary/60 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Droplets className="h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold">Ask the assistant</p>
            <p className="text-xs text-muted-foreground">Grounded in this knowledge base</p>
          </div>
        </button>
      </motion.section>
    </div>
  );
}
