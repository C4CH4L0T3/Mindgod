"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

/*
 * TracingBeam — un haz zafiro→violeta→esmeralda se dibuja a lo largo del
 * contenido mientras el lector baja, con una chispa en la punta. El scroll
 * deja de ser posición y se vuelve narrativa (patrón Aceternity).
 */
export default function TracingBeam({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const dotY = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="absolute -left-6 top-0 hidden h-full lg:block xl:-left-10"
      >
        <div className="h-full w-px bg-white/12" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute inset-0 w-px origin-top bg-gradient-to-b from-accent via-violet to-emerald"
        />
        <motion.span
          style={{ top: dotY }}
          className="absolute -left-[3.5px] h-2 w-2 -translate-y-1 rounded-full bg-violet shadow-[0_0_14px_rgba(109,40,217,0.9)]"
        />
      </div>
      {children}
    </div>
  );
}
