import { Check, Handshake, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ReferralForm from "@/components/ReferralForm";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Starfield from "@/components/Starfield";
import TiltCard from "@/components/ui/tilt-card";
import { copy, type Lang } from "@/lib/copy";

/*
 * Programa de referidos — "/referidos" y "/en/referidos".
 *
 * La página cuenta un solo trato: presentas un negocio, nosotros vendemos,
 * tú cobras el 20%. Mismo escenario que la home (starfield, tags, display)
 * sin la cortina de intro — quien llega aquí viene a algo concreto.
 */
export default function ReferralsPage({ lang }: { lang: Lang }) {
  const t = copy[lang].referrals;

  return (
    <>
      <SmoothScroll />
      <Starfield />
      <main className="relative z-10">
        <ScrollProgress />
        <Navbar lang={lang} />

        {/* la promesa */}
        <section id="inicio" className="px-6 pb-20 pt-40 md:pb-28 md:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="tag mb-8">{t.tag}</p>
              <h1 className="display text-[clamp(38px,6vw,76px)] leading-[1.05] text-ink">
                {t.titleA}
                <br />
                <em className="text-gradient">{t.titleB}</em>
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-stone md:text-[17px]">
                {t.support}
              </p>
            </Reveal>
          </div>
        </section>

        {/* los tres pasos */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {t.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 110} className="h-full">
                <TiltCard className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-white/12 bg-paper p-8">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-accent">
                      {step.number}
                    </span>
                    <h2 className="display mt-4 text-[24px] leading-tight text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-[14px] leading-relaxed text-stone">
                      {step.body}
                    </p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* el trato, por escrito — el mismo lenguaje visual de la garantía */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="rounded-2xl border border-emerald/50 bg-emerald/[0.05] p-8 md:flex md:items-start md:gap-10 md:p-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-emerald max-md:mb-5">
                  <Handshake size={24} className="text-emerald" />
                </div>
                <div>
                  <p className="tag mb-3">{t.deal.tag}</p>
                  <h2 className="display text-[clamp(22px,2.4vw,32px)] leading-tight text-ink">
                    {t.deal.title}
                  </h2>
                  <ul className="mt-6 flex max-w-2xl flex-col gap-3">
                    {t.deal.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-stone"
                      >
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          className="mt-[4px] shrink-0 text-emerald"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* qué cuenta como buen referido — el filtro honesto de la casa */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={100} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full rounded-2xl border-2 border-ink bg-paper p-8 md:p-10">
                  <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink">
                    {t.fit.forTitle}
                  </h2>
                  <ul className="mt-6 flex flex-col gap-4">
                    {t.fit.forItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-ink"
                      >
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          className="mt-[4px] shrink-0 text-emerald"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={200} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full rounded-2xl border border-white/12 bg-paper p-8 md:p-10">
                  <h2 className="text-xl font-semibold tracking-[-0.01em] text-stone">
                    {t.fit.againstTitle}
                  </h2>
                  <ul className="mt-6 flex flex-col gap-4">
                    {t.fit.againstItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-stone"
                      >
                        <X
                          size={16}
                          strokeWidth={2.5}
                          className="mt-[4px] shrink-0 text-rose"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        <ReferralForm lang={lang} />
        <Footer lang={lang} />
      </main>
    </>
  );
}
