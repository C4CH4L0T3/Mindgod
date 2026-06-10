"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Typewriter } from "@/components/ui/typewriter";

/*
 * Intro — full-screen opening curtain.
 *
 *   1. "Nacimos 🪐 para" + typewriter cycles Crear / Optimizar / Transformar
 *   2. The brand resolves: MindGod
 *   3. The curtain lifts and hands over to the page
 */

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Intro() {
  const [phase, setPhase] = useState<"typing" | "brand" | "done">("typing");

  // Respect reduced motion: skip straight to the site
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
    }
  }, []);

  // Hold the brand on screen, then lift the curtain
  useEffect(() => {
    if (phase !== "brand") return;
    const timeout = setTimeout(() => setPhase("done"), 1300);
    return () => clearTimeout(timeout);
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

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
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
                Nacimos 🪐 para{" "}
                {/* own line on phones so the layout never reflows while typing */}
                <span className="mt-1 block min-h-[1.3em] sm:mt-0 sm:inline sm:min-h-0">
                  <Typewriter
                    text={["Crear", "Optimizar", "Transformar"]}
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
                <p className="tag mt-5">De la mano a la máquina</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
