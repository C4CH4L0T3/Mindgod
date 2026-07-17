import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/ui/tilt-card";
import { copy, type Lang } from "@/lib/copy";

/*
 * Caso real — la continuación del bloque "Sin humo" de Nosotros: dijimos que
 * los resultados hablarían cuando existieran, y este es el primero.
 *
 * Capturas del CRM de Puebleriando en producción (datos ilustrativos). La
 * cita del cliente solo aparece cuando exista textual — regla de la casa.
 */
export default function CaseStudy({ lang }: { lang: Lang }) {
  const t = copy[lang].caseStudy;
  const [mainShot, ...smallShots] = t.shots;

  return (
    <section id="caso" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="tag mb-6">{t.tag}</p>
          <h2 className="display max-w-3xl text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            {t.titleA}
            <br />
            <em className="text-gradient">{t.titleB}</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* el cliente y los hechos */}
          <div>
            <Reveal>
              <a
                href={t.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/12 px-5 py-2.5 transition-colors duration-300 hover:border-ink"
              >
                <span className="text-[15px] font-medium text-ink">
                  {t.clientHandle}
                </span>
                <span className="text-[13px] text-stone">{t.clientDesc}</span>
                <ExternalLink
                  size={13}
                  className="text-stone transition-colors group-hover:text-ink"
                />
              </a>

              <p className="mt-7 text-[15px] leading-relaxed text-stone">
                {t.summary}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-8 flex flex-col gap-4">
                {t.facts.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-[4px] shrink-0 text-emerald"
                    />
                    {fact}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* la voz del cliente — solo palabras textuales, con permiso */}
            {t.quote && (
              <Reveal delay={150}>
                <blockquote className="mt-10 border-l-2 border-accent pl-5">
                  <p className="text-[16px] leading-relaxed text-ink">
                    “{t.quote}”
                  </p>
                  {t.quoteAuthor && (
                    <cite className="tag mt-3 block !text-[10px] not-italic">
                      {t.quoteAuthor}
                    </cite>
                  )}
                </blockquote>
              </Reveal>
            )}

            <Reveal delay={200}>
              <p className="mt-10 text-[17px] text-ink">
                {t.ctaLead}{" "}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {t.cta}
                  <ArrowRight size={15} />
                </a>
              </p>
            </Reveal>
          </div>

          {/* el producto, en producción */}
          <div>
            <Reveal delay={120}>
              <TiltCard>
                <figure className="overflow-hidden rounded-2xl border border-white/12 bg-graphite">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
                    <span className="ml-3 font-mono text-[10px] tracking-[0.14em] text-stone">
                      PUEBLERIANDO CRM · POWERED BY MINDGOD
                    </span>
                  </div>
                  <Image
                    src={mainShot.src}
                    alt={mainShot.alt}
                    width={1440}
                    height={900}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="w-full"
                  />
                </figure>
              </TiltCard>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {smallShots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden rounded-xl border border-white/12"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1440}
                      height={900}
                      sizes="(min-width: 1024px) 310px, 50vw"
                      className="w-full"
                    />
                  </figure>
                ))}
              </div>
              <p className="tag mt-5 text-center !text-[10px] opacity-70">
                {t.shotsNote}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
