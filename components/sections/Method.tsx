import Reveal from "@/components/Reveal";
import { IconCloud } from "@/components/ui/icon-cloud";
import TracingBeam from "@/components/ui/tracing-beam";
import { copy, type Lang } from "@/lib/copy";

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

// monocromo claro: legible sobre obsidiana (los logos negros desaparecerían)
const techImages = techSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/c9c9c1`
);

/* un solo acento disciplinado: los números en zafiro, el resto en tinta */
const stepColors = ["#3b82f6", "#3b82f6", "#3b82f6", "#3b82f6"];

export default function Method({ lang }: { lang: Lang }) {
  const t = copy[lang].method;

  return (
    <section id="metodo" className="scroll-mt-14 py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="tag mb-6">{t.tag}</p>
          <h2 className="display max-w-2xl text-[clamp(34px,4.5vw,60px)] leading-[1.05] text-ink">
            {t.titleA}
            <br />
            <em className="text-gradient">{t.titleB}</em>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-20">
          <TracingBeam>
            <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {t.steps.map((s, i) => (
                <Reveal key={s.number} delay={i * 110}>
                  <div
                    className="group border-t-2 pt-7 transition-colors duration-500"
                    style={{ borderColor: `${stepColors[i]}40` }}
                  >
                    <span
                      className="font-mono text-xs font-semibold tracking-[0.2em]"
                      style={{ color: stepColors[i] }}
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
          </TracingBeam>
        </div>

        <div className="mt-24 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="tag mb-6">{t.tools.tag}</p>
            <h3 className="display text-[clamp(24px,2.8vw,38px)] leading-tight text-ink">
              {t.tools.titleA}
              <br />
              <em className="text-gradient">{t.tools.titleB}</em>
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
              {t.tools.body}
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
