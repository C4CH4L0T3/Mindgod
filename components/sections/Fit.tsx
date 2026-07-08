import { ArrowRight, Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/ui/tilt-card";
import { copy, type Lang } from "@/lib/copy";

/*
 * Filtro honesto — quién califica y quién no.
 * Un premium que no filtra no es premium: esta sección hace que el
 * comprador correcto se reconozca y el incorrecto se descarte solo.
 */
export default function Fit({ lang }: { lang: Lang }) {
  const t = copy[lang].fit;

  return (
    <section id="filtro" className="scroll-mt-14 border-y border-black/10 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="tag mb-6">{t.tag}</p>
          <h2 className="display max-w-2xl text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            {t.titleA}
            <br />
            <em className="text-gradient">{t.titleB}</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={100} className="h-full">
            <TiltCard className="h-full">
            <div className="h-full rounded-2xl border-2 border-ink bg-paper p-8 md:p-10">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">
                {t.forTitle}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {t.forItems.map((item) => (
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
            <div className="h-full rounded-2xl border border-black/15 bg-paper p-8 md:p-10">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-stone">
                {t.againstTitle}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {t.againstItems.map((item) => (
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

        <Reveal delay={150}>
          <p className="mt-14 text-center text-[17px] text-ink">
            {t.close}{" "}
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t.closeCta}
              <ArrowRight size={15} />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
