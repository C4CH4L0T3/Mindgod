"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import Reveal from "@/components/Reveal";
import { copy, type Lang } from "@/lib/copy";

// Mismo número del negocio — el referido llega directo al WhatsApp.
const WHATSAPP_NUMBER = "573053364176";

/*
 * El formulario de referidos calca el patrón del de aplicación: los datos
 * viajan a /api/lead (type "referral") ANTES de abrir WhatsApp — ningún
 * referido se pierde aunque nunca toquen enviar.
 */
export default function ReferralForm({ lang }: { lang: Lang }) {
  const t = copy[lang].referrals.form;
  const [form, setForm] = useState({ name: "", business: "", bottleneck: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    track("referral_submit", { bottleneck: form.bottleneck, lang });
    fetch("/api/lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form, type: "referral", lang }),
      keepalive: true,
    }).catch(() => {});

    const lines = [
      `${t.wa.greeting} ${form.name.trim()}.`,
      `${t.wa.referral}: ${form.business.trim()}.`,
      `${t.wa.bottleneck}: ${form.bottleneck}.`,
      t.wa.closing,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      import("canvas-confetti").then(({ default: confetti }) => {
        confetti({
          particleCount: 90,
          spread: 75,
          startVelocity: 32,
          origin: { y: 0.75 },
          colors: ["#3b82f6", "#8b5cf6", "#10b981", "#f4f4f0"],
        });
      });
    }
  };

  return (
    <section id="referir" className="scroll-mt-14 py-24 md:py-32">
      <div className="mx-auto max-w-xl px-6">
        <Reveal>
          <p className="tag mb-6 text-center">{t.tag}</p>
          <h2 className="display text-center text-[clamp(48px,8vw,90px)] leading-none text-ink">
            {t.title.replace(/\.$/, "")}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-7 text-center text-[15px] leading-relaxed text-stone">
            {t.sub}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-7">
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
              required
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
              style={{ color: form.bottleneck ? "#f4f4f0" : "#75756d" }}
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
              className="mt-6 w-full rounded-full bg-wa py-4 text-[15px] font-medium text-white shadow-lg shadow-wa/30 transition-all duration-300 hover:bg-[#15803d] hover:shadow-xl hover:shadow-wa/40 active:scale-[0.99]"
            >
              {t.cta}
            </button>

            <p className="mt-2 text-center text-[13px] text-stone">{t.note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
