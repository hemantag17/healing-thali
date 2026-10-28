"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Header, BottomDock, type View } from "@/components/kb/nav";
import { HomeView } from "@/components/kb/home-view";
import { StagesView } from "@/components/kb/stages-view";
import { NutritionView } from "@/components/kb/nutrition-view";
import { MythsView } from "@/components/kb/myths-view";
import { SheetView } from "@/components/kb/sheet-view";
import { AskView } from "@/components/kb/ask-view";
import { useDeliveryMode } from "@/lib/kb/use-delivery-mode";

const VALID_VIEWS: View[] = ["home", "stages", "nutrition", "myths", "sheet", "ask"];

function handlePrintSheet(setView: (v: View) => void) {
  return () => {
    setView("sheet");
    // Give the sheet view a moment to mount, then open the print dialog.
    window.setTimeout(() => window.print(), 500);
  };
}

export default function Page() {
  const [view, setView] = useState<View>("home");
  const [activePhaseId, setActivePhaseId] = useState("p1");
  const { mode, changeMode } = useDeliveryMode();

  // Deep-link support: /#sheet, /#myths etc. (also used for PDF rendering).
  // Event-driven so it never fights React's render loop.
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "") as View;
      if (VALID_VIEWS.includes(h) && h !== "home") setView(h);
    };
    const timer = window.setTimeout(applyHash, 0);
    window.addEventListener("hashchange", applyHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", applyHash);
    };
  }, []);

  const openPhase = (id: string) => {
    setActivePhaseId(id);
    setView("stages");
    window.history.replaceState(null, "", "#stages");
  };

  const navigate = (v: View) => {
    setView(v);
    window.history.replaceState(null, "", `#${v}`);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header
          active={view}
          onNavigate={navigate}
          onPrintSheet={handlePrintSheet(setView)}
          mode={mode}
          onModeChange={changeMode}
        />

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-32 sm:pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {view === "home" && (
                <HomeView
                  mode={mode}
                  onNavigate={navigate}
                  onSelectPhase={openPhase}
                  onPrintSheet={handlePrintSheet(setView)}
                />
              )}
              {view === "stages" && (
                <StagesView
                  mode={mode}
                  activePhaseId={activePhaseId}
                  onSelectPhase={setActivePhaseId}
                />
              )}
              {view === "nutrition" && <NutritionView mode={mode} />}
              {view === "myths" && <MythsView />}
              {view === "sheet" && (
                <SheetView mode={mode} onPrintSheet={() => window.print()} />
              )}
              {view === "ask" && <AskView mode={mode} />}
            </motion.div>
          </AnimatePresence>

          <footer className="mt-10 border-t pt-5 text-xs leading-relaxed text-muted-foreground">
            <p className="font-semibold">Healing Thali</p>
            <p className="mt-1 max-w-2xl">
              A free, evidence-based vegetarian recovery guide for Indian mothers healing
              after a {mode === "csection" ? "cesarean" : "normal delivery"} — built for use
              anywhere in the world. Educational only: your obstetrician&rsquo;s instructions
              always come first. Sources: ICMR-NIN 2020, WHO, ERAS Society, ESPEN, IARC and
              Cochrane-level reviews. No user data is collected or stored.
            </p>
          </footer>
        </main>

        <BottomDock active={view} onNavigate={navigate} />
      </div>
    </ThemeProvider>
  );
}
