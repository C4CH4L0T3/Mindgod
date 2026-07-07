"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import manos from "@/public/images/manos.jpg";

/*
 * Hero — three layers on a near-white canvas:
 *
 *   1. Watermark: "MindGod" gigante, casi invisible, textura detrás de todo.
 *   2. Focal: la foto B/N — mano humana y mano robótica a punto de tocarse.
 *      "De la mano a la máquina", literal.
 *   3. Contenido: titular a la izquierda, una línea de apoyo, un solo CTA
 *      anclado abajo a la derecha.
 *
 * La entrada se coreografía tras la cortina del intro (evento
 * "mindgod:intro-done"); el parallax al hacer scroll mueve el watermark más
 * lento que la foto para crear profundidad. Todo via transform/opacity.
 */

const ENTER = {
  photo: "350ms",
  line1: "650ms",
  line2: "760ms",
  line3: "870ms",
  support: "1000ms",
  cta: "1150ms",
} as const;

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  // watermark lags far behind the scroll; the photo only slightly — depth
  const watermarkY = useTransform(scrollY, [0, 900], [0, 230]);
  const photoY = useTransform(scrollY, [0, 900], [0, 70]);

  useEffect(() => {
    const start = () => setEntered(true);
    // No curtain mounted (or it already left): start on the next tick
    if (!document.querySelector("[data-intro-curtain]")) {
      const immediate = window.setTimeout(start, 0);
      return () => window.clearTimeout(immediate);
    }
    window.addEventListener("mindgod:intro-done", start);
    // safety net so the hero never stays hidden
    const fallback = window.setTimeout(start, 9000);
    return () => {
      window.removeEventListener("mindgod:intro-done", start);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      id="inicio"
      className={`relative flex min-h-svh flex-col overflow-hidden ${
        entered ? "hero-in" : ""
      }`}
    >
      {/* ——— layer 1: watermark typography ——— */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : watermarkY }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="hero-bg-enter">
          <span
            className="hero-drift display block select-none whitespace-nowrap text-[27vw] leading-none tracking-[-0.03em] md:text-[21.5vw]"
            style={{ color: "rgba(10, 10, 10, 0.05)" }}
          >
            MindGod
          </span>
        </div>
      </motion.div>

      {/* ——— layers 2 + 3 ——— */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 md:block">
        {/* focal photo — center-right, overlapping the watermark */}
        <div className="order-2 mx-auto mt-12 w-[86%] max-w-[460px] md:absolute md:left-[48%] md:top-1/2 md:mt-0 md:w-[45vw] md:max-w-[650px] md:-translate-x-1/4 md:-translate-y-1/2">
          <motion.div style={{ y: reduceMotion ? 0 : photoY }}>
            <div className="hero-enter" style={{ "--enter-delay": ENTER.photo } as React.CSSProperties}>
              <div className="hero-float">
                <Image
                  src={manos}
                  alt="Una mano humana y una mano robótica a punto de tocarse"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 86vw, 46vw"
                  className="rounded-2xl shadow-[0_40px_90px_-40px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* headline — left, above the photo where they meet */}
        <div className="relative z-20 order-1 pt-28 md:absolute md:left-6 md:top-1/2 md:max-w-[470px] md:-translate-y-1/2 md:pt-0">
          <p
            className="tag hero-enter mb-7 md:hidden"
            style={{ "--enter-delay": ENTER.line1 } as React.CSSProperties}
          >
            Agencia de IA · Medellín
          </p>
          <h1 className="display text-[clamp(38px,3.6vw,52px)] leading-[1.06] text-ink">
            <span className="hero-enter block" style={{ "--enter-delay": ENTER.line1 } as React.CSSProperties}>
              Sitios web
            </span>
            <span className="hero-enter block" style={{ "--enter-delay": ENTER.line2 } as React.CSSProperties}>
              de alto nivel,
            </span>
            <span className="hero-enter block" style={{ "--enter-delay": ENTER.line3 } as React.CSSProperties}>
              <em className="text-gradient">construidos con IA.</em>
            </span>
          </h1>
          <p
            className="hero-enter mt-6 max-w-xs text-[15px] leading-relaxed text-stone"
            style={{ "--enter-delay": ENTER.support } as React.CSSProperties}
          >
            Diseño que se siente caro. Inteligencia que vende sola, a toda
            hora.
          </p>
        </div>

        {/* CTA — anchored bottom-right on desktop, in flow on mobile */}
        <div
          className="hero-enter order-3 mb-14 mt-12 flex flex-col items-center gap-4 md:absolute md:bottom-12 md:right-6 md:mb-0 md:mt-0 md:items-end"
          style={{ "--enter-delay": ENTER.cta } as React.CSSProperties}
        >
          <LiquidButton href="#contacto">Únete a la revolución</LiquidButton>
          <p className="tag !text-[10px]">Diagnóstico gratis · 30 minutos</p>
        </div>

        {/* quiet signature, bottom-left */}
        <div
          className="hero-enter hidden md:absolute md:bottom-14 md:left-6 md:block"
          style={{ "--enter-delay": ENTER.cta } as React.CSSProperties}
        >
          <p className="tag">Agencia de IA · Medellín</p>
        </div>
      </div>
    </section>
  );
}
