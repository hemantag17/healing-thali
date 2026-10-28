"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Ban,
  CheckCircle2,
  Flame,
  Info,
  Leaf,
  ListChecks,
  Quote,
  TriangleAlert,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getPhases, UNIVERSAL_PRINCIPLES } from "@/lib/kb/phases";
import type { DeliveryMode } from "@/lib/kb/delivery-mode";

export function StagesView({
  mode,
  activePhaseId,
  onSelectPhase,
}: {
  mode: DeliveryMode;
  activePhaseId: string;
  onSelectPhase: (id: string) => void;
}) {
  const PHASES = getPhases(mode);
  const phase = PHASES.find((p) => p.id === activePhaseId) ?? PHASES[0];
  const idx = PHASES.findIndex((p) => p.id === phase.id);

  return (
    <div className="flex flex-col gap-5 pt-4">
      {/* Universal principles */}
      <section aria-labelledby="universal" className="rounded-2xl border border-primary/30 bg-secondary/50 p-4 sm:p-5">
        <h2 id="universal" className="flex items-center gap-2 text-base font-bold">
          <ListChecks className="h-5 w-5 text-primary" /> Rules that apply to every stage
        </h2>
        <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
          {UNIVERSAL_PRINCIPLES.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm leading-snug">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          Advance through stages by tolerance, not by rigid date. If one specific food causes
          you bloating, slow down for that food only.
        </p>
      </section>

      {/* Phase chips */}
      <section aria-label="Recovery stages" className="no-scrollbar -mx-4 overflow-x-auto px-4">
        <div className="flex w-max gap-2">
          {PHASES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPhase(p.id)}
              aria-pressed={p.id === phase.id}
              className={cn(
                "flex min-h-11 shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors",
                p.id === phase.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold",
                  p.id === phase.id ? "bg-white/20" : "bg-muted"
                )}
              >
                {i + 1}
              </span>
              {p.shortLabel}
            </button>
          ))}
        </div>
      </section>

      {/* Phase detail */}
      <AnimatePresence mode="wait">
        <motion.article
          key={phase.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-4"
        >
          <header className="rounded-2xl bg-gradient-to-br from-primary to-[#1f5b58] p-5 text-primary-foreground sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-80">
              Stage {idx + 1} of 6
            </p>
            <h2 className="mt-1 text-xl font-bold sm:text-2xl">{phase.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed opacity-95">{phase.theme}</p>
          </header>

          <section aria-label="What is happening in the body" className="rounded-2xl border bg-card p-4 sm:p-5">
            <h3 className="flex items-center gap-2 text-base font-bold">
              <Activity className="h-5 w-5 text-primary" /> What is happening in the body
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.bodyState}</p>
            {phase.goals.length > 0 && (
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {phase.goals.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm leading-snug">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {g}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Diet progression steps (phase 1) */}
          {phase.steps && phase.steps.length > 0 && (
            <section aria-label="Diet progression" className="rounded-2xl border bg-card p-4 sm:p-5">
              <h3 className="text-base font-bold">Diet progression — advance as tolerated</h3>
              <ol className="mt-3 space-y-0">
                {phase.steps.map((s, i) => (
                  <li key={s.when} className="relative flex gap-3 pb-4 last:pb-0">
                    {i < phase.steps!.length - 1 && (
                      <span aria-hidden className="absolute left-[9px] top-5 h-full w-0.5 bg-border" />
                    )}
                    <span className="z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{s.when}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.what}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Eat / limit / avoid */}
          <div className="grid gap-3 lg:grid-cols-3">
            {phase.eat.map((group) => (
              <section key={group.heading} aria-label={group.heading} className="rounded-2xl border border-leaf/40 bg-leaf/5 p-4">
                <h3 className="flex items-center gap-2 text-sm font-bold text-leaf-deep">
                  <Leaf className="h-4 w-4" /> {group.heading}
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            {phase.limit.length > 0 && (
              <section aria-label="Limit" className="rounded-2xl border border-turmeric/50 bg-accent/50 p-4">
                <h3 className="flex items-center gap-2 text-sm font-bold text-turmeric-deep">
                  <Flame className="h-4 w-4" /> Limit / portion sense
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {phase.limit.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-turmeric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {phase.avoid.length > 0 && (
              <section aria-label="Avoid" className="rounded-2xl border border-destructive/40 bg-destructive/5 p-4">
                <h3 className="flex items-center gap-2 text-sm font-bold text-destructive">
                  <Ban className="h-4 w-4" /> Avoid
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {phase.avoid.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Science notes */}
          {phase.scienceNotes.length > 0 && (
            <section aria-label="Science notes" className="rounded-2xl border bg-card p-4 sm:p-5">
              <h3 className="flex items-center gap-2 text-base font-bold">
                <Info className="h-5 w-5 text-primary" /> The science, briefly
              </h3>
              <div className="mt-3 space-y-3">
                {phase.scienceNotes.map((n) => (
                  <div key={n.heading}>
                    <p className="text-sm font-semibold">{n.heading}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Traditions decoded */}
          {phase.traditions.length > 0 && (
            <section aria-label="Traditions decoded" className="rounded-2xl border border-turmeric/50 bg-accent/40 p-4 sm:p-5">
              <h3 className="text-base font-bold">Traditions decoded</h3>
              <div className="mt-3 space-y-2.5">
                {phase.traditions.map((t) => (
                  <div key={t.claim} className="rounded-xl bg-card p-3.5">
                    <p className="flex items-start gap-2 text-sm font-medium">
                      <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-turmeric-deep" />
                      {t.claim}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold uppercase tracking-wide text-turmeric-deep">
                        {t.verdict}:
                      </span>{" "}
                      {t.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Red flags */}
          {phase.redFlags.length > 0 && (
            <section aria-label="Red flags" className="rounded-2xl border-2 border-destructive/60 bg-destructive/5 p-4 sm:p-5">
              <h3 className="flex items-center gap-2 text-base font-bold text-destructive">
                <TriangleAlert className="h-5 w-5" /> Red flags — contact your doctor
              </h3>
              <ul className="mt-3 space-y-1.5">
                {phase.redFlags.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm leading-snug">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
