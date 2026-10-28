"use client";

import { useEffect, useRef, useState } from "react";
import {
  Ban,
  CircleCheck,
  Flame,
  Pill,
  Search,
  ShieldCheck,
  TriangleAlert,
  UtensilsCrossed,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  KEY_NUMBERS,
  getNutrients,
  getSupplements,
  MASTER_LISTS,
} from "@/lib/kb/nutrients";
import { FOOD_TAG_LABELS } from "@/lib/kb/foods";
import type { Food } from "@/lib/kb/types";
import type { DeliveryMode } from "@/lib/kb/delivery-mode";

const TAGS = ["protein", "iron", "calcium", "vitamin-c", "b12", "omega-3", "fiber", "probiotic"] as const;

export function NutritionView({ mode }: { mode: DeliveryMode }) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <header>
        <h1 className="text-2xl font-bold">Food &amp; nutrients</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Daily targets and where to get them from a lacto-vegetarian Indian plate — no meat,
          no fish, no eggs.
        </p>
      </header>

      <KeyNumbers />
      <NutrientAccordion mode={mode} />
      <FoodFinder />
      <MasterLists />
      <Supplements mode={mode} />
    </div>
  );
}

function KeyNumbers() {
  return (
    <section aria-label="Key daily numbers">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {KEY_NUMBERS.map((k) => (
          <div key={k.label} className="rounded-2xl border bg-card p-4">
            <p className="text-xl font-bold leading-none text-primary sm:text-2xl">
              {k.value}
              <span className="ml-1 text-xs font-semibold text-muted-foreground">{k.unit}</span>
            </p>
            <p className="mt-1.5 text-xs font-medium leading-snug">{k.label}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground/70">
              {k.ref}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NutrientAccordion({ mode }: { mode: DeliveryMode }) {
  const NUTRIENTS = getNutrients(mode);
  return (
    <section aria-labelledby="nutrients">
      <h2 id="nutrients" className="mb-3 text-lg font-bold">
        What your body needs &amp; where to get it
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {NUTRIENTS.map((n) => (
          <AccordionItem
            key={n.id}
            value={n.id}
            className="overflow-hidden rounded-2xl border bg-card px-0 data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="px-4 py-3.5 hover:no-underline">
              <div className="flex min-w-0 flex-1 flex-col items-start gap-1 pr-2 text-left">
                <span className="text-sm font-bold leading-snug sm:text-[15px]">{n.name}</span>
                <span className="text-xs text-muted-foreground">{n.target}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t px-4 pb-4 pt-3">
              <p className="text-sm leading-relaxed text-muted-foreground">{n.why}</p>
              <div className="mt-3 overflow-hidden rounded-xl border">
                <table className="w-full text-sm">
                  <tbody>
                    {n.sources.map((s, i) => (
                      <tr key={s.food} className={i % 2 ? "bg-muted/40" : "bg-card"}>
                        <td className="px-3 py-2 font-medium">{s.food}</td>
                        <td className="px-3 py-2 text-muted-foreground">{s.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-3 space-y-1.5">
                {n.tips.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm leading-snug">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
                Evidence: {n.ref}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function FoodFinder() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("");
  const [foods, setFoods] = useState<Food[] | null>(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // Server-side search through /api/foods (full-stack: search runs on the server)
  useEffect(() => {
    const controller = new AbortController();
    abortRef.current?.abort();
    abortRef.current = controller;

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (query.trim()) params.set("q", query.trim());
        if (tag) params.set("tag", tag);
        const res = await fetch(`/api/foods?${params.toString()}`, { signal: controller.signal });
        const data = await res.json();
        setFoods(data.foods ?? []);
      } catch (e) {
        if ((e as Error).name !== "AbortError") setFoods([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, tag]);

  return (
    <section aria-labelledby="foodfinder">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 id="foodfinder" className="text-lg font-bold">
            Vegetarian food finder
          </h2>
          <p className="text-sm text-muted-foreground">
            Search the knowledge base — live from the server.
          </p>
        </div>
        <span className="text-xs text-muted-foreground">{foods?.length ?? 0} foods</span>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try “paneer”, “iron”, “ragi”, “gas”…"
          className="h-12 rounded-xl border bg-card pl-10 text-base"
          aria-label="Search foods"
        />
      </div>

      <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4">
        <button
          type="button"
          onClick={() => setTag("")}
          className={cn(
            "min-h-9 shrink-0 rounded-full border px-3.5 text-xs font-semibold transition-colors",
            tag === "" ? "border-primary bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t === tag ? "" : t)}
            className={cn(
              "min-h-9 shrink-0 rounded-full border px-3.5 text-xs font-semibold transition-colors",
              tag === t
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {FOOD_TAG_LABELS[t]}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {loading && foods === null && (
          <>
            <Skeleton className="h-20 w-full rounded-xl" />
            <Skeleton className="h-20 w-full rounded-xl" />
            <Skeleton className="h-20 w-full rounded-xl" />
          </>
        )}
        {foods?.map((f) => (
          <div key={f.name} className="rounded-xl border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-bold">{f.name}</p>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                {f.category}
              </span>
              {f.tags.slice(0, 3).map((t) => (
                <span key={t} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {FOOD_TAG_LABELS[t]}
                </span>
              ))}
            </div>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{f.highlights.join(" · ")}</p>
            <p className="mt-1.5 text-xs text-muted-foreground/80">{f.servingNote}</p>
          </div>
        ))}
        {foods && foods.length === 0 && !loading && (
          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
            No foods matched — try a different word or clear the filters.
          </div>
        )}
      </div>
    </section>
  );
}

function MasterLists() {
  const lists = [
    { title: "Eat daily", icon: ShieldCheck, items: MASTER_LISTS.eatDaily, style: "border-leaf/40 bg-leaf/5", iconStyle: "text-leaf-deep" },
    { title: "Fine in moderation", icon: UtensilsCrossed, items: MASTER_LISTS.fineInModeration, style: "border-turmeric/50 bg-accent/50", iconStyle: "text-turmeric-deep" },
    { title: "Limit", icon: Flame, items: MASTER_LISTS.limit, style: "border-turmeric/50 bg-accent/40", iconStyle: "text-turmeric-deep" },
    { title: "Avoid entirely", icon: Ban, items: MASTER_LISTS.avoidEntirely, style: "border-destructive/40 bg-destructive/5", iconStyle: "text-destructive" },
  ];
  return (
    <section aria-labelledby="master">
      <h2 id="master" className="mb-3 text-lg font-bold">
        The master food lists
      </h2>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {lists.map((l) => {
          const Icon = l.icon;
          return (
            <div key={l.title} className={cn("rounded-2xl border p-4", l.style)}>
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <Icon className={cn("h-4 w-4", l.iconStyle)} /> {l.title}
              </h3>
              <ul className="mt-2.5 space-y-1.5">
                {l.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Supplements({ mode }: { mode: DeliveryMode }) {
  const SUPPLEMENTS = getSupplements(mode);
  return (
    <section aria-labelledby="supp">
      <h2 id="supp" className="mb-3 text-lg font-bold">
        Supplements — what is guideline-backed vs marketing
      </h2>
      <div className="grid gap-2.5 lg:grid-cols-2">
        <div className="rounded-2xl border border-leaf/40 bg-card p-4">
          <h3 className="flex items-center gap-2 text-sm font-bold text-leaf-deep">
            <Pill className="h-4 w-4" /> Evidence-backed (as per doctor)
          </h3>
          <div className="mt-3 space-y-3">
            {SUPPLEMENTS.backed.map((s) => (
              <div key={s.name} className="rounded-xl bg-leaf/5 p-3">
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {s.who} · {s.use}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                  {s.basis}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-destructive/40 bg-card p-4">
          <h3 className="flex items-center gap-2 text-sm font-bold text-destructive">
            <TriangleAlert className="h-4 w-4" /> Not evidence-backed — skip
          </h3>
          <ul className="mt-3 space-y-1.5">
            {SUPPLEMENTS.marketing.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm leading-snug">
                <Ban className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Whole food plus the short evidence-backed list does everything these products claim
            to do.
          </p>
        </div>
      </div>
    </section>
  );
}
