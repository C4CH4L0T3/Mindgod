import Reveal from "@/components/Reveal";

/**
 * Finale — the resolution of the scroll story. By the time the reader
 * arrives, the hand behind has fully assembled and technology is
 * emerging from it.
 */
export default function Finale() {
  return (
    <section className="relative flex min-h-screen flex-col items-center pt-[13vh] pb-32">
      <div className="px-6 text-center">
        <Reveal>
          <p className="tag mb-6">De la mano a la máquina</p>
          <h2 className="display text-[clamp(44px,6.5vw,88px)] leading-[1.02] text-ink">
            Termina <em>inevitable</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[clamp(14px,1.4vw,18px)] text-stone">
            Tu negocio, potenciado por inteligencia artificial.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-opacity duration-300 hover:opacity-80"
            >
              Hablemos
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-black/15 px-8 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-black/50"
            >
              Ver servicios
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
