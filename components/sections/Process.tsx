import Reveal from "@/components/Reveal";
import { IconCloud } from "@/components/ui/icon-cloud";

// Herramientas que más usan los negocios en Colombia: ventas por WhatsApp y
// redes, pagos con Mercado Pago/PayPal, ecosistema Google, CRM y automatización.
const techSlugs = [
  "whatsapp",
  "instagram",
  "facebook",
  "tiktok",
  "x",
  "telegram",
  "gmail",
  "googleanalytics",
  "googleads",
  "googledrive",
  "googlecalendar",
  "googlemaps",
  "shopify",
  "woocommerce",
  "wordpress",
  "mercadopago",
  "stripe",
  "paypal",
  "hubspot",
  "salesforce",
  "mailchimp",
  "notion",
  "zoom",
  "claude",
  "n8n",
  "zapier",
  "make",
  "airtable",
  "trello",
  "asana",
];

const techImages = techSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}`
);

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "Analizamos tu negocio y te decimos exactamente dónde estás perdiendo tiempo y ventas. Gratis y sin compromiso.",
    color: "#7c3aed",
  },
  {
    number: "02",
    title: "Diseño",
    body: "Diseñamos la solución a tu medida. Sin plantillas, sin módulos que nunca vas a usar.",
    color: "#ec4899",
  },
  {
    number: "03",
    title: "Implementación",
    body: "Montamos, conectamos y probamos todo. Tú sigues vendiendo como siempre mientras tanto.",
    color: "#f97316",
  },
  {
    number: "04",
    title: "Optimización",
    body: "Medimos resultados cada mes. Lo que no genera, se ajusta o se elimina.",
    color: "#84cc16",
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
            <em className="text-gradient">Sin detener tu negocio.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 110}>
              <div
                className="group border-t-2 pt-7 transition-colors duration-500"
                style={{ borderColor: `${s.color}40` }}
              >
                <span
                  className="font-mono text-xs font-semibold tracking-[0.2em]"
                  style={{ color: s.color }}
                >
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

        <div className="mt-24 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="tag mb-6">Con lo que ya usas</p>
            <h3 className="display text-[clamp(24px,2.8vw,38px)] leading-tight text-ink">
              Nos conectamos
              <br />
              <em className="text-gradient">a tus herramientas.</em>
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
              WhatsApp, Mercado Pago, Shopify, el ecosistema de Google… No te
              obligamos a cambiar de herramientas: conectamos las que ya usas
              para que trabajen juntas, solas.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <div className="flex justify-center md:justify-end">
              <IconCloud images={techImages} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
