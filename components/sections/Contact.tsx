"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { copy, type Lang } from "@/lib/copy";

// Número de WhatsApp del negocio — los leads llegan ahí directo.
const WHATSAPP_NUMBER = "573053364176";

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang].contact;
  const [form, setForm] = useState({ name: "", business: "", bottleneck: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // The form IS the qualification; the application lands directly in
  // WhatsApp with the answers prefilled — nothing stored, nothing lost.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `${t.wa.greeting} ${form.name.trim()}.`,
      form.business.trim() && `${t.wa.business}: ${form.business.trim()}.`,
      `${t.wa.bottleneck}: ${form.bottleneck}.`,
      t.wa.closing,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="scroll-mt-14 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* the machine, awake and waiting */}
          <Reveal className="order-last lg:order-first">
            <div className="relative h-[340px] overflow-hidden rounded-2xl bg-black/[0.96] sm:h-[440px] lg:h-full lg:min-h-[620px]">
              <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
              />
              <div className="pointer-events-none relative z-10 p-8">
                <p className="tag !text-white/50">{t.spline.tag}</p>
                <h3 className="display mt-3 text-2xl text-white sm:text-3xl">
                  {t.spline.titleA}
                  <br />
                  <em className="text-white/70">{t.spline.titleB}</em>
                </h3>
              </div>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>

          {/* the application */}
          <div>
            <Reveal>
              <p className="tag mb-6 text-center">{t.tag}</p>
              <h2 className="display text-center text-[clamp(56px,9vw,110px)] leading-none text-ink">
                {t.title.replace(/\.$/, "")}
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-7 text-center text-[15px] leading-relaxed text-stone">
                {t.sub}
              </p>
              <p className="tag mt-4 text-center !text-[10px]">{t.capacity}</p>
            </Reveal>

            <Reveal delay={150}>
              <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-7">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  className="field"
                />
                <input
                  type="text"
                  name="business"
                  placeholder={t.businessPlaceholder}
                  value={form.business}
                  onChange={handleChange}
                  className="field"
                />
                <select
                  name="bottleneck"
                  required
                  value={form.bottleneck}
                  onChange={handleChange}
                  className="field cursor-pointer"
                  style={{ color: form.bottleneck ? "#0a0a0a" : "#9c9c94" }}
                >
                  <option value="" disabled>
                    {t.bottleneckLabel}
                  </option>
                  {t.bottleneckOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-accent py-4 text-[15px] font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:shadow-accent/35 active:scale-[0.99]"
                >
                  {t.cta}
                </button>

                <p className="mt-2 text-center text-[13px] text-stone">{t.note}</p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
