"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/*
 * IgniteText — el manifiesto se enciende palabra por palabra a medida que
 * el lector avanza (patrón "text reveal" de Aceternity, adaptado al
 * sistema editorial de la casa). Scroll-linked: retrocede si retrocedes.
 */

type Segment = { text: string; style?: "ink" | "em" };

function Word({
  children,
  progress,
  range,
  style,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  style?: "ink" | "em";
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const inner =
    style === "em" ? (
      <em className="text-gradient">{children}</em>
    ) : (
      children
    );
  return (
    <motion.span
      style={{ opacity }}
      className={style === "ink" ? "text-ink" : undefined}
    >
      {inner}{" "}
    </motion.span>
  );
}

export default function IgniteText({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  // aplanar a palabras conservando el estilo de su segmento
  const words = segments.flatMap((seg) =>
    seg.text
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ word: w, style: seg.style }))
  );

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={`${w.word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, Math.min(1, (i + 1) / words.length)]}
          style={w.style}
        >
          {w.word}
        </Word>
      ))}
    </p>
  );
}
