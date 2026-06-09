import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Analizamos tu negocio y detectamos dónde la IA puede generar más impacto.",
  },
  {
    number: "02",
    title: "Diseño",
    body: "Construimos la solución a medida: CRM, sitio o automatización.",
  },
  {
    number: "03",
    title: "Implementación",
    body: "Desplegamos, conectamos y probamos cada pieza del sistema.",
  },
  {
    number: "04",
    title: "Optimización",
    body: "Medimos resultados y mejoramos continuamente.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="tag mb-6">Cómo trabajamos</p>
          <h2 className="display max-w-2xl text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            De la idea al resultado.
            <br />
            <em className="text-stone">Sin fricción.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 110}>
              <div className="group border-t border-black/10 pt-7 transition-colors duration-500 hover:border-black/60">
                <span className="font-mono text-xs tracking-[0.2em] text-stone transition-colors duration-500 group-hover:text-ink">
                  {s.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
