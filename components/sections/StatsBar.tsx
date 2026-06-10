"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Negocios que ya venden en automático", color: "#7c3aed" },
  { value: 14, suffix: "h", label: "Recuperadas por semana, en promedio", color: "#ec4899" },
  { value: 100, suffix: "%", label: "A tu medida — cero plantillas", color: "#f97316" },
  { value: 24, suffix: "h", label: "Máximo para responderte", color: "#84cc16" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div id="stats" ref={ref} className="border-y border-black/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-2 px-6 py-12 md:px-10 ${
              i > 0 ? "border-l border-black/10 max-md:[&:nth-child(3)]:border-l-0" : ""
            } ${i >= 2 ? "max-md:border-t max-md:border-black/10" : ""}`}
          >
            <span
              className="display text-4xl md:text-5xl"
              style={{ color: s.color }}
            >
              <CountUp target={s.value} suffix={s.suffix} active={inView} />
            </span>
            <span className="text-[13px] text-stone">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
