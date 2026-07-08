import Reveal from "@/components/Reveal";
import TiltCard from "@/components/ui/tilt-card";
import IgniteText from "@/components/ui/ignite-text";
import { copy, type Lang } from "@/lib/copy";

/*
 * Nosotros — el bloque que carga la prueba mientras no hay testimonios:
 * la declaración de origen, el fundador dando la cara y la promesa de
 * cero humo. La honestidad ES el posicionamiento.
 */
export default function Nosotros({ lang }: { lang: Lang }) {
  const t = copy[lang].about;

  return (
    <section id="nosotros" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="tag mb-10">{t.tag}</p>
          </Reveal>

          {/* el manifiesto se enciende palabra a palabra con el scroll */}
          <IgniteText
            segments={t.statement}
            className="display text-[clamp(26px,3.6vw,48px)] leading-[1.25] text-stone"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* el fundador da la cara */}
          <Reveal delay={120} className="h-full">
            <TiltCard className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-black/15 bg-paper p-8 md:p-10">
              <p className="tag mb-8">{t.founder.tag}</p>
              <div className="flex items-center gap-5">
                {/* TODO: foto real del fundador — reemplazar este placeholder
                    por <Image src="/images/founder.jpg" …/> */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-950 via-accent to-violet">
                  <span className="display text-2xl text-paper">M</span>
                </div>
                <div>
                  <p className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
                    {t.founder.name}
                  </p>
                  <p className="mt-1 text-[13px] text-stone">{t.founder.role}</p>
                </div>
              </div>
              <p className="display mt-8 text-[clamp(19px,1.8vw,23px)] leading-[1.4] text-ink">
                {t.founder.note}
              </p>
            </div>
            </TiltCard>
          </Reveal>

          {/* cero humo */}
          <Reveal delay={220} className="h-full">
            <TiltCard className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-black/15 bg-paper p-8 md:p-10">
              <p className="tag mb-8">{t.honest.tag}</p>
              <h3 className="display text-[clamp(22px,2.4vw,32px)] leading-tight text-ink">
                {t.honest.title}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-stone">
                {t.honest.body}
              </p>
              <div className="mt-auto flex items-center gap-8 pt-8">
                {t.marks.map((mark, i) => (
                  <span key={mark} className="flex items-center gap-8">
                    {i > 0 && <span className="h-3 w-px bg-black/20" />}
                    <span className="tag">{mark}</span>
                  </span>
                ))}
              </div>
            </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
