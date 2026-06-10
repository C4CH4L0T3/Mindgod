import Reveal from "@/components/Reveal";

export default function Nosotros() {
  return (
    <section id="nosotros" className="scroll-mt-14 border-y border-black/10 py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="tag mb-10">Quiénes somos</p>
        </Reveal>

        <Reveal delay={100}>
          <p className="display text-[clamp(26px,3.6vw,48px)] leading-[1.25] text-stone">
            <span className="text-ink">Nacimos en Medellín</span> con una idea
            fija: la tecnología de las grandes corporaciones también es para{" "}
            <em className="text-gradient">tu negocio</em> — sin jerga, sin
            enredos y sin costos de corporación. Tú lo conoces mejor que nadie;{" "}
            <span className="text-ink">nosotros lo hacemos imparable</span>.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-14 flex items-center justify-center gap-8">
            <span className="tag">Medellín · Colombia</span>
            <span className="h-3 w-px bg-black/20" />
            <span className="tag">IA aplicada al negocio real</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
