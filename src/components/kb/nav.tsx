"use client";

import { useTheme } from "next-themes";
import {
  Home,
  CalendarClock,
  Salad,
  ShieldAlert,
  Printer,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  MODE_LABELS,
  type DeliveryMode,
} from "@/lib/kb/delivery-mode";

export type View = "home" | "stages" | "nutrition" | "myths" | "sheet" | "ask";

const NAV_ITEMS: { id: View; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "stages", label: "Stages", icon: CalendarClock },
  { id: "nutrition", label: "Food", icon: Salad },
  { id: "myths", label: "Myths", icon: ShieldAlert },
  { id: "sheet", label: "Sheet", icon: Printer },
  { id: "ask", label: "Ask", icon: MessageCircle },
];

const MODES: DeliveryMode[] = ["csection", "vaginal"];

/** Global delivery-mode switch — updates content across the whole site. */
export function ModeToggle({
  mode,
  onModeChange,
  className,
}: {
  mode: DeliveryMode;
  onModeChange: (m: DeliveryMode) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label="Delivery mode — updates the guide"
      className={cn(
        "flex items-center rounded-xl border bg-muted/60 p-0.5",
        className
      )}
    >
      {MODES.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onModeChange(m)}
          aria-pressed={mode === m}
          className={cn(
            "min-h-9 flex-1 rounded-[10px] px-3 text-xs font-semibold leading-none transition-colors",
            mode === m
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {MODE_LABELS[m]}
        </button>
      ))}
    </div>
  );
}

export function Header({
  active,
  onNavigate,
  onPrintSheet,
  mode,
  onModeChange,
}: {
  active: View;
  onNavigate: (v: View) => void;
  onPrintSheet: () => void;
  mode: DeliveryMode;
  onModeChange: (m: DeliveryMode) => void;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex h-14 items-center gap-3">
        <img src="/thali.svg" alt="Healing Thali logo" className="h-8 w-8 shrink-0" />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-[15px] font-bold tracking-tight">
            Healing Thali
            <span className="ml-2 hidden rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary sm:inline">
              Evidence-based
            </span>
          </p>
          <p className="hidden truncate text-xs text-muted-foreground sm:block">
            Vegetarian recovery for Indian mothers — C-section or normal delivery
          </p>
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={active === item.id ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button
          type="button"
          onClick={onPrintSheet}
          aria-label="Print the fridge sheet"
          className="flex h-11 shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Printer className="h-4 w-4" />
          <span className="hidden sm:inline">Fridge sheet</span>
        </button>
        </div>

        {/* Mode switch — inline on desktop, own row on mobile (always visible) */}
        <div className="hidden pb-2.5 pt-0.5 lg:block">
          <ModeToggle mode={mode} onModeChange={onModeChange} className="w-fit" />
        </div>
        <div className="pb-2 pt-0.5 lg:hidden">
          <ModeToggle mode={mode} onModeChange={onModeChange} className="w-full" />
        </div>
      </div>
    </header>
  );
}

export function BottomDock({
  active,
  onNavigate,
}: {
  active: View;
  onNavigate: (v: View) => void;
}) {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      <div className="flex w-full max-w-md items-stretch justify-between gap-0.5 rounded-2xl border bg-card/95 p-1.5 shadow-lg backdrop-blur">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-medium leading-none transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
