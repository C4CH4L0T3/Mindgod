import Reveal from "@/components/Reveal";

/**
 * Hero — the opening frame. The hand (HandBackdrop) lives behind this;
 * the section just sets the scene and gets out of the way.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen flex-col items-center">
      <div className="pt-[13vh] text-center">
        <Reveal>
          <p className="tag mb-6">Agencia de IA · Medellín</p>
          <h1 className="display text-[clamp(44px,6.5vw,88px)] leading-[1.02] text-ink">
            Empieza <em>humano</em>.
          </h1>
          <p className="mt-5 text-[clamp(14px,1.4vw,18px)] text-stone">
            Todo lo que vale la pena empieza con una mano.
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
