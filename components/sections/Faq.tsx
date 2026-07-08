"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { copy, type Lang } from "@/lib/copy";

/*
 * FAQ — acordeón con altura animada (grid-template-rows: la técnica más
 * barata para animar altura sin medir nada). Un solo abierto a la vez.
 */
export default function Faq({ lang }: { lang: Lang }) {
  const t = copy[lang].faq;
  const [open, setOpen] = useState<number | null>(null);

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
            {t.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-black/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`text-[16px] font-medium tracking-[-0.01em] transition-colors duration-300 md:text-[17px] ${
                        isOpen ? "text-accent" : "text-ink"
                      }`}
                    >
                      {item.q}
                    </span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pb-7 pr-10 text-[15px] leading-relaxed text-stone transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
