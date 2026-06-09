import Reveal from "@/components/Reveal";

const services = [
  {
    index: "01",
    title: "CRM a tu medida",
    body: "Tu sistema de gestión de clientes desde cero — hecho para tu industria, tu equipo y tu forma de trabajar.",
    tag: "Gestión · Clientes · Pipeline",
    featured: false,
  },
  {
    index: "02",
    title: "Sitio web que convierte",
    body: "No solo un sitio bonito. Un sistema de captura de leads conectado a tu CRM, automatizado y optimizado para vender.",
    tag: "Leads · Conversión · Automatización",
    featured: true,
  },
  {
    index: "03",
    title: "IA para tu empresa",
    body: "Procesos repetitivos automatizados con inteligencia artificial: desde atención al cliente hasta análisis de datos en tiempo real.",
    tag: "Automatización · IA · Procesos",
    featured: false,
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
            <em className="text-stone">Un solo objetivo.</em>
          </h2>
        </Reveal>

        <div className="mt-20">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 90}>
              <a
                href="#contacto"
                className="group grid grid-cols-1 gap-4 border-t border-black/10 py-10 transition-colors duration-500 last:border-b hover:bg-black/[0.025] md:grid-cols-12 md:items-center md:gap-8 md:py-14"
              >
                <span className="font-mono text-sm text-stone md:col-span-1">
                  {s.index}
                </span>

                <h3 className="display text-[clamp(26px,3.2vw,44px)] leading-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:col-span-5">
                  {s.title}
                  {s.featured && (
                    <span className="ml-4 inline-block -translate-y-2 font-mono text-[10px] not-italic tracking-[0.2em] text-ink">
                      MÁS SOLICITADO
                    </span>
                  )}
                </h3>

                <div className="md:col-span-5">
                  <p className="max-w-md text-[15px] leading-relaxed text-stone">
                    {s.body}
                  </p>
                  <p className="tag mt-4 !text-[10px] opacity-70">{s.tag}</p>
                </div>

                <span className="hidden justify-self-end text-stone opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink group-hover:opacity-100 md:col-span-1 md:block">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
