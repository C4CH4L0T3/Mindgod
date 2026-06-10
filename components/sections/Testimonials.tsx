import Reveal from "@/components/Reveal";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "El CRM que nos armaron organizó todas las ventas de la inmobiliaria. Antes perdíamos clientes por falta de seguimiento; ahora cada lead tiene su proceso.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Carolina Restrepo",
    role: "Inmobiliaria · El Poblado",
  },
  {
    text: "Automatizaron la agenda y los recordatorios por WhatsApp. Las citas perdidas bajaron a la mitad en dos meses.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Dr. Andrés Mejía",
    role: "Clínica odontológica · Laureles",
  },
  {
    text: "La página nueva convierte de verdad. Pasamos de 3 a 20 cotizaciones semanales sin invertir un peso más en pauta.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Juliana Álvarez",
    role: "Distribuidora de insumos · Itagüí",
  },
  {
    text: "El agente de IA responde a los clientes a medianoche y deja la venta lista. Es como tener un empleado que nunca duerme.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Santiago Cardona",
    role: "Almacén de repuestos · Centro",
  },
  {
    text: "Nos conectaron Shopify, el CRM y la facturación. Lo que antes era digitar todo tres veces, hoy pasa solo.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Manuela Ortiz",
    role: "Marca de ropa · Provenza",
  },
  {
    text: "Entendieron el negocio antes de proponer nada. La automatización de pedidos nos ahorra unas 12 horas a la semana.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Felipe Zuluaga",
    role: "Restaurante · Envigado",
  },
  {
    text: "Yo no sé de tecnología y nunca me sentí perdido. Me explicaron todo en cristiano y el sistema lo usa hasta mi señora.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    name: "Hernán Gómez",
    role: "Ferretería · Belén",
  },
  {
    text: "Los reportes llegan solos cada lunes. Por fin sé qué sede vende más sin tener que perseguir a nadie.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Laura Bedoya",
    role: "Gimnasios · 3 sedes",
  },
  {
    text: "Respondieron en horas, no en semanas. Se nota que son de aquí y entienden cómo se vende en Medellín.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Camilo Henao",
    role: "Agencia de viajes · Sabaneta",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
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
