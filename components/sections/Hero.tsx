"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Magnetic from "@/components/ui/magnetic";
import { copy, type Lang } from "@/lib/copy";

/*
 * Hero — patrón de los líderes del mercado, con capa de ingeniería visible:
 *
 *   0. Profundidad ambiental (dos blobs, apenas perceptibles).
 *   1. Watermark "MindGod" con doble parallax: scroll (lento) + mouse (sutil).
 *   2. Stack central: badge en vivo → tag → titular palabra a palabra con
 *      blur → apoyo → CTA magnético.
 *   3. Marquee de herramientas — la franja de confianza honesta.
 *
 * Todo transform/opacity; mouse-effects solo en punteros finos y se apagan
 * bajo prefers-reduced-motion.
 */

const ENTER = {
  live: "300ms",
  tag: "400ms",
  support: "1050ms",
  cta: "1200ms",
  strip: "1420ms",
} as const;

const WORD_BASE = 480; // ms — primera palabra del titular
const WORD_STEP = 90; // ms — entre palabras

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

function Line({
  text,
  startDelay,
  em,
}: {
  text: string;
  startDelay: number;
  em?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="hero-word"
          style={
            {
              "--enter-delay": `${startDelay + i * WORD_STEP}ms`,
            } as React.CSSProperties
          }
        >
          {em ? <em className="text-gradient">{word}</em> : word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang].hero;
  const [entered, setEntered] = useState(false);
  const [fine, setFine] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 900], [0, 230]);

  // parallax de mouse: el watermark se desliza contra el cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 50, damping: 20 });
  const smy = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    const start = () => setEntered(true);
    if (!document.querySelector("[data-intro-curtain]")) {
      const immediate = window.setTimeout(start, 0);
      return () => window.clearTimeout(immediate);
    }
    window.addEventListener("mindgod:intro-done", start);
    const fallback = window.setTimeout(start, 9000);
    return () => {
      window.removeEventListener("mindgod:intro-done", start);
      window.clearTimeout(fallback);
    };
  }, []);

  const mouseActive = fine && !reduceMotion;

  const onPointerMove = (e: React.PointerEvent) => {
    if (!mouseActive) return;
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * -26);
    my.set((e.clientY / innerHeight - 0.5) * -16);
  };

  // El titular arranca la cuenta de palabras después del tag
  const line1Words = t.line1.split(" ").length;

  return (
    <section
      id="inicio"
      onPointerMove={onPointerMove}
      className={`relative flex min-h-svh flex-col overflow-hidden ${
        entered ? "hero-in" : ""
      }`}
    >
      {/* ——— layer 0: profundidad ambiental — apenas perceptible ——— */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <span className="aurora-blob left-[8%] top-[18%] h-[34vw] w-[34vw] bg-accent/[0.08]" />
        <span
          className="aurora-blob right-[6%] bottom-[14%] h-[30vw] w-[30vw] bg-violet/[0.07]"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      {/* ——— layer 1: watermark con doble parallax ——— */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : watermarkY }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <motion.div style={mouseActive ? { x: smx, y: smy } : undefined}>
          <div className="hero-bg-enter">
            <span
              className="hero-drift display block select-none whitespace-nowrap text-[27vw] leading-none tracking-[-0.03em] md:text-[21.5vw]"
              style={{ color: "rgba(10, 10, 10, 0.05)" }}
            >
              MindGod
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ——— layer 2: centered promise ——— */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <div
          className="hero-enter mb-6 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-paper/70 px-4 py-1.5 backdrop-blur"
          style={{ "--enter-delay": ENTER.live } as React.CSSProperties}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-emerald" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-stone uppercase">
            {t.live}
          </span>
        </div>

        <p
          className="tag hero-enter mb-8"
          style={{ "--enter-delay": ENTER.tag } as React.CSSProperties}
        >
          {t.tag}
        </p>

        <h1 className="display text-[clamp(42px,7vw,88px)] leading-[1.04] text-ink">
          <Line text={t.line1} startDelay={WORD_BASE} />
          <Line
            text={t.line2}
            startDelay={WORD_BASE + line1Words * WORD_STEP + 60}
            em
          />
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
          <Magnetic>
            <a
              href="#contacto"
              className="btn-gradient inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-9 text-[15px] font-medium tracking-[-0.01em] md:h-14 md:px-11 md:text-base"
            >
              {t.cta}
            </a>
          </Magnetic>
          <p className="tag !text-[10px]">{t.ctaNote}</p>
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
                src={`https://cdn.simpleicons.org/${slug}/9c9c94`}
                alt=""
                aria-hidden="true"
                width={26}
                height={26}
                loading="lazy"
                className="mx-7 inline-block h-[26px] w-[26px] opacity-70 transition-opacity hover:opacity-100 md:mx-9"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
