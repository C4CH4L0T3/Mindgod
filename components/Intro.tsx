"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Typewriter } from "@/components/ui/typewriter";
import { copy, type Lang } from "@/lib/copy";

/*
 * Intro — full-screen opening curtain.
 *
 *   1. "Nacimos 🪐 para" + typewriter cycles Crear / Optimizar / Transformar
 *   2. The brand resolves: MindGod
 *   3. The curtain lifts and hands over to the page
 *
 * Plays once per session: repeat visits (and reduced motion) skip straight
 * to the page — the theater welcomes, it never taxes.
 */

const EASE = [0.16, 1, 0.3, 1] as const;
const SEEN_KEY = "mindgod:intro-seen";

export default function Intro({ lang }: { lang: Lang }) {
  const t = copy[lang].intro;
  const [phase, setPhase] = useState<"typing" | "brand" | "done">("typing");
  const [skipped, setSkipped] = useState(false);

  // Skip for returning visitors this session, and for reduced motion
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* storage blocked — play the intro */
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkipped(true);
      setPhase("done");
    }
  }, []);

  // Hold the brand on screen, then lift the curtain
  useEffect(() => {
    if (phase !== "brand") return;
    const timeout = setTimeout(() => setPhase("done"), 1300);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Let the hero start its entrance in sync with the curtain lift
  useEffect(() => {
    if (phase === "done") {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new Event("mindgod:intro-done"));
    }
  }, [phase]);

  // Lock scroll while the intro is up (html + body for iOS Safari)
  useEffect(() => {
    if (phase === "done") return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Unmounting the whole tree (not just the child) skips the exit animation
  if (skipped) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          data-intro-curtain
          className="fixed inset-0 z-[200] flex items-center justify-center bg-paper px-6"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <AnimatePresence mode="wait">
            {phase === "typing" ? (
              <motion.p
                key="typing"
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="display text-center text-[clamp(32px,5.5vw,68px)] leading-tight text-ink"
              >
                {t.born}{" "}
                {/* own line on phones so the layout never reflows while typing */}
                <span className="mt-1 block min-h-[1.3em] sm:mt-0 sm:inline sm:min-h-0">
                  <Typewriter
                    text={t.words}
                    loop={false}
                    speed={55}
                    initialDelay={250}
                    waitTime={650}
                    deleteSpeed={28}
                    cursorChar="_"
                    cursorClassName="ml-1 text-stone"
                    className="text-gradient italic"
                    onComplete={() => setPhase("brand")}
                  />
                </span>
              </motion.p>
            ) : (
              <motion.div
                key="brand"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-center"
              >
                <p className="display text-gradient text-[clamp(52px,9vw,120px)] leading-none">
                  MindGod
                </p>
                <p className="tag mt-5">{t.tagline}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
