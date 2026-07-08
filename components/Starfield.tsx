"use client";

import { useEffect, useRef } from "react";

/*
 * Starfield — el cielo del sitio. Un solo canvas 2D fijo detrás de todo:
 *
 *   · ~200 estrellas en tres capas de profundidad que titilan (seno con
 *     fase propia) y derivan lentamente hacia arriba.
 *   · Parallax doble: el mouse y el scroll mueven cada capa según su
 *     profundidad — el fondo se siente tridimensional.
 *   · Cada pocos segundos, una estrella fugaz cruza la pantalla.
 *
 * Un rAF, sin layout, sin React re-renders. Bajo prefers-reduced-motion
 * se dibuja un cielo estático una sola vez.
 */

const STAR_COLORS = ["#f4f4f0", "#f4f4f0", "#f4f4f0", "#93c5fd", "#c4b5fd"];

type Star = {
  x: number;
  y: number;
  depth: number;
  r: number;
  color: string;
  phase: number;
  speed: number;
};

type Shooter = { x: number; y: number; vx: number; vy: number; life: number };

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    const shooters: Shooter[] = [];
    let nextShooter = performance.now() + 2500;

    const mouse = { x: 0, y: 0 };
    let mx = 0;
    let my = 0;

    const seed = (n: number) => {
      // pseudo-aleatorio determinista — el cielo es el mismo en cada visita
      const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(220, Math.floor((w * h) / 8500));
      stars = Array.from({ length: count }, (_, i) => {
        const depth = 0.25 + (i % 3) * 0.35; // 3 capas: lejos, media, cerca
        return {
          x: seed(i) * w,
          y: seed(i + 1000) * h,
          depth,
          r: 0.4 + seed(i + 2000) * 1.1 * depth,
          color: STAR_COLORS[Math.floor(seed(i + 3000) * STAR_COLORS.length)],
          phase: seed(i + 4000) * Math.PI * 2,
          speed: 0.4 + seed(i + 5000) * 1.1,
        };
      });
    };
    build();
    window.addEventListener("resize", build);

    const onPointer = (e: PointerEvent) => {
      mouse.x = e.clientX / w - 0.5;
      mouse.y = e.clientY / h - 0.5;
    };
    if (fine && !reduce) window.addEventListener("pointermove", onPointer);

    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, w, h);

      // el parallax persigue al mouse con suavidad
      mx += (mouse.x - mx) * 0.04;
      my += (mouse.y - my) * 0.04;
      const sy = window.scrollY;

      for (const s of stars) {
        const drift = reduce ? 0 : t * 2.2 * s.depth; // deriva ascendente
        const px =
          (((s.x - mx * 34 * s.depth) % w) + w) % w;
        const py =
          (((s.y - drift - sy * 0.1 * s.depth - my * 22 * s.depth) % h) + h) %
          h;
        const tw = reduce
          ? 0.75
          : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase);
        ctx.globalAlpha = tw * (0.35 + 0.55 * s.depth);
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // estrellas fugaces
      if (!reduce && now > nextShooter && shooters.length < 2) {
        shooters.push({
          x: w * (0.15 + Math.random() * 0.75),
          y: h * Math.random() * 0.35,
          vx: -(7 + Math.random() * 5),
          vy: 2.5 + Math.random() * 2,
          life: 1,
        });
        nextShooter = now + 3800 + Math.random() * 4500;
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const m = shooters[i];
        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - m.vx * 14,
          m.y - m.vy * 14
        );
        grad.addColorStop(0, `rgba(244,244,240,${0.9 * m.life})`);
        grad.addColorStop(1, "rgba(244,244,240,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
        ctx.stroke();
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.016;
        if (m.life <= 0 || m.x < -160 || m.y > h + 60) shooters.splice(i, 1);
      }
      ctx.globalAlpha = 1;
    };

    let raf = 0;
    if (reduce) {
      draw(0); // cielo estático: una sola pasada
    } else {
      const loop = (now: number) => {
        draw(now);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
