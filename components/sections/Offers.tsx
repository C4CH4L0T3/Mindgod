"use client";

import { Bot, Check, Database, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/ui/tilt-card";
import RadialOrbitalTimeline, {
  type OrbitalItem,
} from "@/components/ui/radial-orbital-timeline";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { copy, type Lang } from "@/lib/copy";

/*
 * Sistemas — la oferta empaquetada.
 *
 *   1. Orbital: los tres sistemas como piezas de una sola máquina.
 *   2. Cartas: qué incluye, para quién es (y para quién no), ancla de
 *      costo-de-inacción antes de cualquier número.
 *   3. La garantía de los 60 segundos — solo lo que controlamos.
 *   4. Terminal: el sistema visto por dentro.
 */

/* restricción premium: las cartas son tinta/papel; SOLO el buque insignia
   lleva el acento de la casa (glow zafiro + CTA de gradiente). Un punto
   focal por pantalla — el resto calla. */
const orbitalMeta = [
  { icon: Bot, accent: "#3f3f46", impact: 85 },
  { icon: Database, accent: "#1d4ed8", impact: 100, featured: true },
  { icon: ShieldCheck, accent: "#71717a", impact: 90 },
];

const cardStyles = [
  {
    card: "border border-black/15 bg-paper",
    check: "text-ink",
    tag: "",
    cta: "border border-black/20 text-ink hover:border-ink",
  },
  {
    card: "border-2 border-ink bg-paper shadow-[0_28px_70px_-30px_rgba(29,78,216,0.4)]",
    check: "text-accent",
    tag: "!text-accent",
    cta: "btn-gradient",
  },
  {
    card: "border border-black/15 bg-paper",
    check: "text-ink",
    tag: "",
    cta: "border border-black/20 text-ink hover:border-ink",
  },
];

export default function Offers({ lang }: { lang: Lang }) {
  const t = copy[lang].offers;

  const orbitalItems: OrbitalItem[] = t.items.map((item, i) => ({
    id: i + 1,
    title: item.name,
    tag: item.tag,
    content: item.orbital,
    icon: orbitalMeta[i].icon,
    relatedIds: [1, 2, 3].filter((id) => id !== i + 1),
    impact: orbitalMeta[i].impact,
    accent: orbitalMeta[i].accent,
    featured: orbitalMeta[i].featured,
  }));

  return (
    <section id="sistemas" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="tag mb-6">{t.tag}</p>
          <h2 className="display max-w-2xl text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            {t.titleA}
            <br />
            <em className="text-gradient">{t.titleB}</em>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <RadialOrbitalTimeline items={orbitalItems} labels={t.orbitalLabels} />
          <p className="tag -mt-6 text-center !text-[10px] opacity-70">
            {t.orbitalHint}
          </p>
        </Reveal>

        {/* the three systems, in full */}
        <div className="mt-20 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const featured = Boolean(orbitalMeta[i].featured);
            const s = cardStyles[i];
            return (
              <Reveal key={item.name} delay={i * 110} className="h-full">
                <TiltCard className="h-full">
                <article
                  className={`flex h-full flex-col rounded-2xl p-8 ${s.card}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`tag !text-[10px] ${s.tag}`}>{item.tag}</span>
                    {featured && (
                      <span className="whitespace-nowrap rounded-full border border-accent px-2.5 py-0.5 font-mono text-[9px] tracking-[0.2em] text-accent">
                        {t.orbitalLabels.featured}
                      </span>
                    )}
                  </div>
                  <h3 className="display mt-4 text-[26px] leading-tight text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-ink">
                    <em className="text-gradient">{item.outcome}</em>
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {item.includes.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-[14px] leading-relaxed text-stone"
                      >
                        <Check
                          size={15}
                          className={`mt-[3px] shrink-0 ${s.check}`}
                          strokeWidth={2.5}
                        />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-5 text-[13px] leading-relaxed">
                    <p className="text-ink">{item.forWho}</p>
                    <p className="text-stone">{item.notForWho}</p>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="text-[13px] leading-relaxed text-stone">
                      {item.priceAnchor}
                    </p>
                    <p className="mt-3 font-mono text-[12px] tracking-[0.06em] text-ink">
                      {item.price}
                    </p>
                    <a
                      href="#contacto"
                      className={`mt-6 inline-flex w-full items-center justify-center rounded-full py-3 text-[14px] font-medium transition-all duration-300 ${s.cta}`}
                    >
                      {t.cardCta}
                    </a>
                  </div>
                </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* the 60-second guarantee */}
        <Reveal delay={120}>
          <div className="mt-16 rounded-2xl border border-emerald/50 bg-emerald/[0.05] p-8 md:flex md:items-center md:gap-10 md:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-emerald max-md:mb-5">
              <ShieldCheck size={24} className="text-emerald" />
            </div>
            <div>
              <p className="tag mb-3">{t.guarantee.tag}</p>
              <h3 className="display text-[clamp(22px,2.4vw,32px)] leading-tight text-ink">
                {t.guarantee.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-stone">
                {t.guarantee.body}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="tag mb-6">{t.inside.tag}</p>
            <h3 className="display text-[clamp(24px,2.8vw,38px)] leading-tight text-ink">
              {t.inside.titleA}
              <br />
              <em className="text-gradient">{t.inside.titleB}</em>
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
              {t.inside.body}
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <Terminal className="max-w-none font-mono text-ink shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_60px_-30px_rgba(0,0,0,0.18)]">
              <TypingAnimation>{t.inside.cmd}</TypingAnimation>
              {t.inside.lines.map((line) => (
                <AnimatedSpan
                  key={line}
                  className={line.startsWith("✔") ? "text-green-700" : "text-stone"}
                >
                  {line}
                </AnimatedSpan>
              ))}
              <TypingAnimation className="text-stone">
                {t.inside.done}
              </TypingAnimation>
            </Terminal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
