"use client";

import { useEffect, useRef } from "react";

/*
 * Starfield — el cielo del sitio. Un solo canvas 2D fijo detrás de todo:
 *
 *   · ~200 estrellas en tres capas de profundidad que titilan (seno con
 *     fase propia) y derivan lentamente hacia arriba.
 *   · Nebulosas: nubes de gas zafiro/violeta/esmeralda que respiran y
 *     derivan a velocidad geológica detrás de las estrellas.
 *   · Parallax doble: el mouse y el scroll mueven cada capa según su
 *     profundidad — el fondo se siente tridimensional.
 *   · Cada pocos segundos, una estrella fugaz cruza la pantalla.
 *   · Y muy, muy de vez en cuando: una SUPERNOVA. Destello, onda
 *     expansiva, rayos de luz — 4 segundos y no vuelve en minutos.
 *     El que la ve, la vio.
 *
 * Un rAF, sin layout, sin React re-renders. Bajo prefers-reduced-motion
 * se dibuja un cielo estático una sola vez (sin fugaces ni supernovas).
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

type Nova = { x: number; y: number; t0: number; dur: number };

/* nebulosas: posición relativa, radio relativo al viewport, color y fase */
const NEBULAS = [
  { fx: 0.22, fy: 0.3, fr: 0.34, rgb: "59, 130, 246", phase: 0 },
  { fx: 0.78, fy: 0.62, fr: 0.3, rgb: "139, 92, 246", phase: 2.1 },
  { fx: 0.55, fy: 0.12, fr: 0.24, rgb: "16, 185, 129", phase: 4.2 },
];

const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

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

    // supernova: la primera a los 40–70s; después una cada 2.5–5 minutos
    let nova: Nova | null = null;
    let nextNova = performance.now() + 40_000 + Math.random() * 30_000;

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

      // ——— nebulosas: gas que respira a velocidad geológica ———
      for (const n of NEBULAS) {
        const breathe = reduce ? 1 : 1 + 0.08 * Math.sin(t * 0.11 + n.phase);
        const cx =
          n.fx * w +
          (reduce ? 0 : Math.sin(t * 0.05 + n.phase) * 40) -
          mx * 18;
        const cy =
          n.fy * h +
          (reduce ? 0 : Math.cos(t * 0.04 + n.phase) * 30) -
          sy * 0.04 -
          my * 12;
        const r = Math.min(w, h) * n.fr * breathe;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(${n.rgb}, 0.075)`);
        grad.addColorStop(0.55, `rgba(${n.rgb}, 0.03)`);
        grad.addColorStop(1, `rgba(${n.rgb}, 0)`);
        ctx.globalAlpha = 1;
        ctx.fillStyle = grad;
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
      }

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

      // ——— supernova: el evento que casi nadie ve dos veces ———
      if (!reduce && !nova && now > nextNova) {
        nova = {
          x: w * (0.15 + Math.random() * 0.7),
          y: h * (0.12 + Math.random() * 0.5),
          t0: now,
          dur: 4200,
        };
      }
      if (nova) {
        const p = (now - nova.t0) / nova.dur;
        if (p >= 1) {
          nova = null;
          nextNova = now + 150_000 + Math.random() * 150_000;
        } else {
          // el destello sube casi instantáneo y decae lento
          const flash = p < 0.1 ? p / 0.1 : Math.pow(1 - (p - 0.1) / 0.9, 1.7);
          const reach = Math.min(w, h) * 0.34;

          // halo
          const glowR = 24 + easeOutCubic(p) * reach;
          const glow = ctx.createRadialGradient(
            nova.x, nova.y, 0, nova.x, nova.y, glowR
          );
          glow.addColorStop(0, `rgba(244, 244, 240, ${0.55 * flash})`);
          glow.addColorStop(0.25, `rgba(147, 197, 253, ${0.3 * flash})`);
          glow.addColorStop(0.6, `rgba(139, 92, 246, ${0.1 * flash})`);
          glow.addColorStop(1, "rgba(139, 92, 246, 0)");
          ctx.globalAlpha = 1;
          ctx.fillStyle = glow;
          ctx.fillRect(nova.x - glowR, nova.y - glowR, glowR * 2, glowR * 2);

          // onda expansiva
          const ringR = easeOutCubic(p) * reach;
          ctx.globalAlpha = (1 - p) * 0.45;
          ctx.strokeStyle = "rgba(147, 197, 253, 1)";
          ctx.lineWidth = 1.6 * (1 - p) + 0.3;
          ctx.beginPath();
          ctx.arc(nova.x, nova.y, ringR, 0, Math.PI * 2);
          ctx.stroke();

          // rayos de difracción
          const rayLen = glowR * 1.15;
          ctx.globalAlpha = flash * 0.6;
          for (const ang of [0, Math.PI / 2, Math.PI / 4, -Math.PI / 4]) {
            const dx = Math.cos(ang) * rayLen;
            const dy = Math.sin(ang) * rayLen;
            const ray = ctx.createLinearGradient(
              nova.x - dx, nova.y - dy, nova.x + dx, nova.y + dy
            );
            ray.addColorStop(0, "rgba(244, 244, 240, 0)");
            ray.addColorStop(0.5, `rgba(244, 244, 240, ${0.7 * flash})`);
            ray.addColorStop(1, "rgba(244, 244, 240, 0)");
            ctx.strokeStyle = ray;
            ctx.lineWidth = ang % (Math.PI / 2) === 0 ? 1.2 : 0.6;
            ctx.beginPath();
            ctx.moveTo(nova.x - dx, nova.y - dy);
            ctx.lineTo(nova.x + dx, nova.y + dy);
            ctx.stroke();
          }

          // núcleo
          ctx.globalAlpha = flash;
          ctx.fillStyle = "#f4f4f0";
          ctx.beginPath();
          ctx.arc(nova.x, nova.y, 1.6 + 2.6 * flash, 0, Math.PI * 2);
          ctx.fill();
        }
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
