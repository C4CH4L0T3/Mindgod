import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { copy, type Lang } from "@/lib/copy";

/*
 * FAQ — las objeciones respondidas de frente, en <details> nativos:
 * accesibles, sin JS y con el estilo editorial de la casa.
 */
export default function Faq({ lang }: { lang: Lang }) {
  const t = copy[lang].faq;

  return (
    <section id="faq" className="scroll-mt-14 border-t border-black/10 py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="tag mb-6">{t.tag}</p>
          <h2 className="display text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            {t.titleA}
            <br />
            <em className="text-gradient">{t.titleB}</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col">
            {t.items.map((item) => (
              <details key={item.q} className="faq-item group border-b border-black/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-[16px] font-medium tracking-[-0.01em] text-ink md:text-[17px]">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="pb-7 pr-10 text-[15px] leading-relaxed text-stone">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
