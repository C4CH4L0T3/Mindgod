"use client";

import { Bot, Database, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import RadialOrbitalTimeline, {
  type OrbitalItem,
} from "@/components/ui/radial-orbital-timeline";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const solutions: OrbitalItem[] = [
  {
    id: 1,
    title: "CRM a tu medida",
    tag: "Gestión · Clientes · Pipeline",
    content:
      "Deja de perder ventas por falta de seguimiento. Cada cliente, cada cotización y cada pendiente en un solo lugar — hecho para tu forma de trabajar, no al revés.",
    icon: Database,
    relatedIds: [2, 3],
    impact: 90,
  },
  {
    id: 2,
    title: "Sitio web que convierte",
    tag: "Leads · Conversión · Automatización",
    content:
      "Una página bonita que no vende es decoración. La tuya captura clientes, los califica y te los entrega en el CRM, listos para cerrar.",
    icon: Globe,
    relatedIds: [1, 3],
    impact: 100,
    featured: true,
  },
  {
    id: 3,
    title: "IA para tu empresa",
    tag: "Automatización · IA · Procesos",
    content:
      "Tus clientes escriben a las 10 de la noche. La IA les responde en segundos, agenda la cita y te deja la venta servida. Lo repetitivo se automatiza; las decisiones siguen siendo tuyas.",
    icon: Bot,
    relatedIds: [1, 2],
    impact: 95,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="tag mb-6">Lo que construimos</p>
          <h2 className="display max-w-2xl text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            Tres soluciones.
            <br />
            <em className="text-stone">Un solo objetivo: que vendas más.</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <RadialOrbitalTimeline items={solutions} />
          <p className="tag -mt-6 text-center !text-[10px] opacity-70">
            Toca una solución para explorarla
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="tag mb-6">Así se ve por dentro</p>
            <h3 className="display text-[clamp(24px,2.8vw,38px)] leading-tight text-ink">
              Mientras tú vendes,
              <br />
              <em className="text-stone">la máquina trabaja.</em>
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
              Cada solución que entregamos corre sola: captura, responde,
              organiza y reporta — sin que nadie toque una tecla.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <Terminal className="max-w-none font-mono text-ink shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_60px_-30px_rgba(0,0,0,0.18)]">
              <TypingAnimation>&gt; mindgod deploy --empresa tu-negocio</TypingAnimation>
              <AnimatedSpan className="text-green-700">
                ✔ CRM configurado a tu medida.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-700">
                ✔ Sitio web conectado al pipeline de ventas.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-700">
                ✔ Agentes de IA entrenados con tus procesos.
              </AnimatedSpan>
              <AnimatedSpan className="text-green-700">
                ✔ Leads capturados, calificados y asignados.
              </AnimatedSpan>
              <AnimatedSpan className="text-stone">
                ℹ 14 horas a la semana recuperadas para tu equipo.
              </AnimatedSpan>
              <TypingAnimation className="text-stone">
                Listo. De la mano a la máquina.
              </TypingAnimation>
            </Terminal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
