"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

// TODO: reemplazar con el número real de WhatsApp del negocio (formato
// internacional sin "+", ej. "57300XXXXXXX"). Los leads llegan ahí directo.
const WHATSAPP_NUMBER = "573000000000";

const interestOptions = [
  { value: "", label: "¿Qué necesita tu negocio?" },
  { value: "CRM personalizado", label: "CRM personalizado" },
  { value: "Sitio web", label: "Sitio web" },
  { value: "Solución de IA", label: "Solución de IA" },
  { value: "Otro", label: "Otro" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", interest: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // The form is the qualification; the lead lands directly in WhatsApp with
  // the answers prefilled — nothing is stored, nothing gets lost.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola, soy ${form.name.trim()}.`,
      form.business.trim() && `Mi negocio: ${form.business.trim()}.`,
      `Me interesa: ${form.interest}.`,
      "Quiero mi diagnóstico gratis de 30 minutos.",
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
                <p className="tag !text-white/50">Atención 24/7</p>
                <h3 className="display mt-3 text-2xl text-white sm:text-3xl">
                  La máquina ya está
                  <br />
                  <em className="text-white/70">despierta.</em>
                </h3>
              </div>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>

          {/* the conversation */}
          <div>
        <Reveal>
          <p className="tag mb-6 text-center">Trabajemos juntos</p>
          <h2 className="display text-center text-[clamp(56px,9vw,110px)] leading-none text-ink">
            Hablemos<span className="text-[#0071e3]">.</span>
          </h2>
          <p className="mt-7 text-center text-[15px] text-stone">
            30 minutos gratis. Sales con un diagnóstico claro de dónde estás
            perdiendo tiempo y ventas — trabajes con nosotros o no.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-7">
            <input
              type="text"
              name="name"
              required
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              className="field"
            />
            <input
              type="text"
              name="business"
              placeholder="Tu negocio (ej. inmobiliaria, clínica, tienda)"
              value={form.business}
              onChange={handleChange}
              className="field"
            />
            <select
              name="interest"
              required
              value={form.interest}
              onChange={handleChange}
              className="field cursor-pointer"
              style={{ color: form.interest ? "#0a0a0a" : "#9c9c94" }}
            >
              {interestOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={!opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#0071e3] py-4 text-[15px] font-medium text-white shadow-lg shadow-[#0071e3]/25 transition-all duration-300 hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/35 active:scale-[0.99]"
            >
              Continuar en WhatsApp
            </button>

            <p className="mt-2 text-center text-[13px] text-stone">
              Se abre WhatsApp con tu mensaje listo — lo envías tú, sin
              compromiso.
            </p>
          </form>
        </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
