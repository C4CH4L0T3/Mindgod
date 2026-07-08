"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { copy, type Lang } from "@/lib/copy";

/*
 * Hero — patrón de los líderes del mercado (Morningside, LeftClick):
 * tipografía centrada, una sola promesa, un solo CTA y una franja de
 * confianza inmediatamente debajo. Sin foto: el titular carga el peso.
 *
 *   1. Watermark "MindGod" gigante detrás, con parallax lento.
 *   2. Stack central: tag → titular → apoyo → CTA.
 *   3. Marquee de herramientas — nuestra versión honesta del carrusel de
 *      logos de clientes (no tenemos clientes que mostrar; no los inventamos).
 *
 * La entrada se coreografía tras la cortina del intro (evento
 * "mindgod:intro-done"). Todo via transform/opacity.
 */

const ENTER = {
  tag: "350ms",
  line1: "500ms",
  line2: "630ms",
  support: "820ms",
  cta: "980ms",
  strip: "1200ms",
} as const;

// Las herramientas sobre las que instalamos — reconocibles para un dueño
// de negocio en LatAm.
const stripSlugs = [
  "whatsapp",
  "instagram",
  "shopify",
  "mercadopago",
  "googlecalendar",
  "gmail",
  "stripe",
  "hubspot",
  "notion",
  "claude",
  "n8n",
  "make",
];

export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang].hero;
  const [entered, setEntered] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  // watermark lags far behind the scroll — depth without imagery
  const watermarkY = useTransform(scrollY, [0, 900], [0, 230]);

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
      {/* ——— layer 0: aurora — color ambiental que respira ——— */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <span className="aurora-blob left-[6%] top-[16%] h-[36vw] w-[36vw] bg-accent/20" />
        <span
          className="aurora-blob right-[4%] top-[28%] h-[32vw] w-[32vw] bg-violet/20"
          style={{ animationDelay: "-4s" }}
        />
        <span
          className="aurora-blob bottom-[6%] left-[28%] h-[30vw] w-[30vw] bg-amber/15"
          style={{ animationDelay: "-8s" }}
        />
      </div>

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

      {/* ——— layer 2: centered promise ——— */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <p
          className="tag hero-enter mb-8"
          style={{ "--enter-delay": ENTER.tag } as React.CSSProperties}
        >
          {t.tag}
        </p>

        <h1 className="display text-[clamp(42px,7vw,88px)] leading-[1.04] text-ink">
          <span
            className="hero-enter block"
            style={{ "--enter-delay": ENTER.line1 } as React.CSSProperties}
          >
            {t.line1}
          </span>
          <span
            className="hero-enter block"
            style={{ "--enter-delay": ENTER.line2 } as React.CSSProperties}
          >
            <em className="text-gradient">{t.line2}</em>
          </span>
        </h1>

        <p
          className="hero-enter mt-8 max-w-xl text-[16px] leading-relaxed text-stone md:text-[17px]"
          style={{ "--enter-delay": ENTER.support } as React.CSSProperties}
        >
          {t.support}
        </p>

        <div
          className="hero-enter mt-11 flex flex-col items-center gap-4"
          style={{ "--enter-delay": ENTER.cta } as React.CSSProperties}
        >
          <a
            href="#contacto"
            className="btn-gradient inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-9 text-[15px] font-medium tracking-[-0.01em] md:h-14 md:px-11 md:text-base"
          >
            {t.cta}
          </a>
          <p className="tag !text-[10px] !text-amber">{t.ctaNote}</p>
        </div>
      </div>

      {/* ——— layer 3: trust strip — the tools we install on ——— */}
      <div
        className="hero-enter relative z-10 pb-12"
        style={{ "--enter-delay": ENTER.strip } as React.CSSProperties}
      >
        <p className="tag mb-7 text-center !text-[10px]">{t.stripLabel}</p>
        <div className="marquee mx-auto max-w-5xl">
          <div className="marquee-track">
            {[...stripSlugs, ...stripSlugs].map((slug, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={`${slug}-${i}`}
                src={`https://cdn.simpleicons.org/${slug}`}
                alt=""
                aria-hidden="true"
                width={26}
                height={26}
                loading="lazy"
                className="mx-7 inline-block h-[26px] w-[26px] opacity-90 md:mx-9"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
