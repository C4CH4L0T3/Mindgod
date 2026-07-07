import Reveal from "@/components/Reveal";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

/*
 * TODO: poblar con testimonios REALES de clientes (con su permiso).
 * La sección no se muestra mientras la lista esté vacía — nunca publicar
 * nombres, fotos o resultados inventados.
 *
 * Formato por testimonio:
 *   {
 *     text: "Resultado concreto en palabras del cliente.",
 *     image: "/images/clientes/nombre.jpg", // foto real, con permiso
 *     name: "Nombre Apellido",
 *     role: "Negocio · Ciudad",
 *   }
 */
const testimonials: Testimonial[] = [];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonios" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto flex max-w-[540px] flex-col items-center text-center">
            <p className="tag mb-6">Lo que dicen</p>
            <h2 className="display text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
              Negocios reales.
              <br />
              <em className="text-gradient">Resultados reales.</em>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-stone">
              Empresas de Medellín que ya pasaron de la mano a la máquina.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 flex max-h-[680px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
