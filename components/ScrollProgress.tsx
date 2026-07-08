"use client";

import { motion, useScroll, useSpring } from "motion/react";

/* Hilo de zafiro en el borde superior: cuánto del sistema llevas recorrido. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-accent via-violet to-accent"
    />
  );
}
