"use client";

import { FileDown, Info, Phone, Printer } from "lucide-react";
import {
  DAILY_CHECKLIST,
  getSheetFamilyNote,
  getSheetStages,
  getSheetTitle,
  SHEET_SUBTITLE,
  SHEET_NEVER,
  SHEET_REDFLAGS,
  SHEET_EMERGENCY_LINE,
  SHEET_DISCLAIMER,
} from "@/lib/kb/cheatsheet";
import type { DeliveryMode } from "@/lib/kb/delivery-mode";

export function SheetView({
  mode,
  onPrintSheet,
}: {
  mode: DeliveryMode;
  onPrintSheet: () => void;
}) {
  const title = getSheetTitle(mode);
  const stages = getSheetStages(mode);
  const familyNote = getSheetFamilyNote(mode);

  return (
    <div className="flex flex-col gap-5 pt-4">
      <header>
        <h1 className="text-2xl font-bold">The fridge sheet</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Everything that matters on one printable A4 page — stick it on the fridge where the
          whole family can see it.
        </p>
      </header>

      {/* Toolbar (hidden when printing) */}
      <div className="print-hidden flex flex-wrap gap-2.5" aria-label="Sheet actions">
        <button
          type="button"
          onClick={onPrintSheet}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Printer className="h-4 w-4" /> Print (A4)
        </button>
        <a
          href={mode === "csection" ? "/cheatsheet.pdf" : "/cheatsheet-normal-delivery.pdf"}
          download={
            mode === "csection"
              ? "healing-thali-fridge-sheet.pdf"
              : "healing-thali-fridge-sheet-normal-delivery.pdf"
          }
          className="inline-flex h-11 items-center gap-2 rounded-xl border bg-card px-4 text-sm font-semibold transition-colors hover:border-primary/40"
        >
          <FileDown className="h-4 w-4" /> Download PDF
        </a>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Info className="h-3.5 w-3.5" /> In the print dialog choose A4, portrait, 100% scale,
          background graphics on.
        </p>
      </div>

      {/* ============ THE A4 SHEET ============ */}
      <div
        id="fridge-sheet"
        className="mx-auto w-full max-w-[820px] rounded-xl bg-white p-5 text-neutral-900 shadow-xl ring-1 ring-black/5 sm:p-7 dark:bg-white"
      >
        {/* Header band */}
        <div className="print-header flex items-center gap-3 rounded-lg bg-[#2f7a72] px-4 py-3 text-white">
          <img src="/thali.svg" alt="" className="h-10 w-10" />
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold leading-tight">{title}</h2>
            <p className="text-[11px] opacity-90">{SHEET_SUBTITLE}</p>
          </div>
        </div>

        {/* Daily checklist */}
        <section className="print-block mt-3">
          <h3 className="mb-1.5 text-sm font-bold text-[#2f7a72]">
            EVERY DAY — the 8 things that matter most
          </h3>
          <div className="print-grid grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {DAILY_CHECKLIST.map((item) => (
              <div key={item.text} className="flex items-start gap-2 rounded-md border border-neutral-200 px-2.5 py-1.5">
                <span
                  aria-hidden
                  className="mt-[3px] h-3.5 w-3.5 shrink-0 rounded-[3px] border-2 border-[#2f7a72]"
                />
                <p className="text-[12px] font-medium leading-snug">
                  {item.text}
                  <span className="ml-1 font-normal text-neutral-500">({item.why})</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stages table */}
        <section className="print-block mt-3">
          <h3 className="mb-1.5 text-sm font-bold text-[#2f7a72]">RECOVERY STAGES — what to focus on</h3>
          <div className="overflow-hidden rounded-md border border-neutral-200">
            <table className="w-full border-collapse text-[11px]">
              <thead>
                <tr className="bg-[#2f7a72]/10 text-left">
                  <th className="px-2 py-1.5 font-bold">Days</th>
                  <th className="px-2 py-1.5 font-bold">Focus</th>
                  <th className="px-2 py-1.5 font-bold">Eat more of</th>
                  <th className="px-2 py-1.5 font-bold">Watch out</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.days} className="border-t border-neutral-200">
                    <td className="px-2 py-1.5 font-bold whitespace-nowrap">{s.days}</td>
                    <td className="px-2 py-1.5 font-semibold">{s.focus}</td>
                    <td className="px-2 py-1.5">{s.eat}</td>
                    <td className="px-2 py-1.5 text-neutral-600">{s.avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Never + red flags */}
        <div className="print-grid mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <section className="print-block rounded-md border-2 border-[#b3452f]/50 bg-[#b3452f]/5 p-2.5">
            <h3 className="text-[12px] font-bold text-[#b3452f]">NEVER — no matter what anyone says</h3>
            <ul className="mt-1.5 space-y-1">
              {SHEET_NEVER.map((n) => (
                <li key={n} className="flex items-start gap-1.5 text-[11px] font-medium leading-snug">
                  <span aria-hidden className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b3452f]" />
                  {n}
                </li>
              ))}
            </ul>
          </section>
          <section className="print-block rounded-md border-2 border-[#b3452f]/60 bg-[#b3452f]/10 p-2.5">
            <h3 className="text-[12px] font-bold text-[#b3452f]">
              CALL THE DOCTOR NOW — danger signs
            </h3>
            <ul className="mt-1.5 space-y-1">
              {SHEET_REDFLAGS.map((f) => (
                <li key={f} className="flex items-start gap-1.5 text-[11px] font-semibold leading-snug">
                  <span aria-hidden className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b3452f]" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-2 flex items-start gap-1.5 border-t border-[#b3452f]/30 pt-1.5 text-[10px] font-bold leading-snug text-[#b3452f]">
              <Phone className="mt-[1px] h-3 w-3 shrink-0" aria-hidden />
              {SHEET_EMERGENCY_LINE}
            </p>
          </section>
        </div>

        {/* Family note */}
        <section className="print-block mt-3 rounded-md bg-[#f6efe3] p-3">
          <h3 className="text-[12px] font-bold text-[#8a6210]">A NOTE FOR THE FAMILY</h3>
          <p className="mt-1 text-[11px] leading-relaxed text-neutral-700">{familyNote}</p>
        </section>

        {/* Footer */}
        <p className="mt-3 border-t border-neutral-200 pt-2 text-[9px] leading-relaxed text-neutral-500">
          {SHEET_DISCLAIMER} Healing Thali — healingthali · 100% vegetarian (no meat, fish or
          eggs) · Free to share with any family that needs it.
        </p>
      </div>
    </div>
  );
}
