import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/hero/HeroVideo";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

/* Hero — the opening frame: title centered over the video, one call to action. */

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      <HeroVideo />

      <div className="px-6 text-center">
        <Reveal>
          <p className="tag mb-6">Agencia de IA · Medellín</p>
          <h1 className="display text-[clamp(44px,6.5vw,88px)] leading-[1.02] text-ink">
            Tu negocio no descansa.
            <br />
            <em className="text-gradient">Tú sí.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[clamp(14px,1.4vw,18px)] text-stone">
            CRM, página web y automatización con IA para que ningún cliente se
            quede sin respuesta — y tú recuperes tus horas.
          </p>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-12 flex justify-center">
            <LiquidButton href="#contacto">Únete a la revolución</LiquidButton>
          </div>
          <p className="tag mt-6 !text-[10px]">
            Diagnóstico gratis · 30 minutos · Sin enredos técnicos
          </p>
        </Reveal>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="tag">Desliza</span>
        <div className="h-9 w-px overflow-hidden bg-black/10">
          <div className="hint-line h-full w-full bg-ink/60" />
        </div>
      </div>
    </section>
  );
}
