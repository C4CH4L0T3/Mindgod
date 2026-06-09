"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const interestOptions = [
  { value: "", label: "¿Qué te interesa?" },
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
      <div className="mx-auto max-w-xl px-6">
        <Reveal>
          <p className="tag mb-6 text-center">Trabajemos juntos</p>
          <h2 className="display text-center text-[clamp(56px,10vw,120px)] leading-none text-ink">
            Hablemos.
          </h2>
          <p className="mt-7 text-center text-[15px] text-stone">
            Una llamada gratuita de 30 minutos. Sin compromisos.
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
                className="mt-6 w-full rounded-full bg-ink py-4 text-[15px] font-medium text-paper transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
              >
                {loading ? "Enviando…" : "Enviar mensaje"}
              </button>

              <p className="mt-2 text-center text-[13px] text-stone">
                O escríbenos directo por{" "}
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-ink"
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
              <h3 className="display text-3xl text-ink">Mensaje enviado.</h3>
              <p className="text-[15px] text-stone">
                Nos pondremos en contacto en menos de 24 horas.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
