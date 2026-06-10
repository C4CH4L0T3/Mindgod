"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const interestOptions = [
  { value: "", label: "¿Qué necesita tu negocio?" },
  { value: "crm", label: "CRM personalizado" },
  { value: "web", label: "Sitio web" },
  { value: "ia", label: "Solución de IA" },
  { value: "otro", label: "Otro" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", interest: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
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
          {!submitted ? (
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
                type="email"
                name="email"
                required
                placeholder="Correo electrónico"
                value={form.email}
                onChange={handleChange}
                className="field"
              />
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="WhatsApp"
                value={form.whatsapp}
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
                disabled={loading}
                className="mt-6 w-full rounded-full bg-[#0071e3] py-4 text-[15px] font-medium text-white shadow-lg shadow-[#0071e3]/25 transition-all duration-300 hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/35 active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? "Enviando…" : "Quiero mi diagnóstico gratis"}
              </button>

              <p className="mt-2 text-center text-[13px] text-stone">
                O escríbenos directo por{" "}
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0071e3] underline decoration-[#0071e3]/30 underline-offset-4 transition-colors hover:decoration-[#0071e3]"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          ) : (
            <div className="mt-16 flex flex-col items-center gap-5 py-10 text-center">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12.5l2.5 2.5L16 9.5" />
              </svg>
              <h3 className="display text-3xl text-ink">Hecho.</h3>
              <p className="text-[15px] text-stone">
                Te respondemos en menos de 24 horas. Mientras tanto, sigue
                vendiendo — de eso nos vamos a encargar juntos.
              </p>
            </div>
          )}
        </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
