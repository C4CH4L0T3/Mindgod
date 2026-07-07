/*
 * Diccionario bilingüe — todo el copy del sitio vive aquí.
 *
 * ES es el idioma primario (ruta "/"); EN vive en "/en".
 * Traducimos intención, no palabra por palabra: cada versión debe leerse
 * como si se hubiera escrito en ese idioma.
 */

export type Lang = "es" | "en";

type NavLink = { label: string; href: string };

export interface Copy {
  meta: { title: string; description: string };
  nav: { links: NavLink[]; cta: string };
  intro: { born: string; words: string[]; tagline: string };
  hero: {
    tag: string;
    line1: string;
    line2: string;
    support: string;
    cta: string;
    ctaNote: string;
    photoAlt: string;
  };
  leaks: {
    tag: string;
    items: { title: string; body: string }[];
  };
  method: {
    tag: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    steps: { number: string; title: string; body: string }[];
    tools: { tag: string; titleA: string; titleB: string; body: string };
  };
  footer: { links: NavLink[]; location: string; tagline: string };
}

export const copy: Record<Lang, Copy> = {
  es: {
    meta: {
      title: "MindGod — Sistemas de venta autónomos con IA · Medellín",
      description:
        "Instalamos sitio, CRM y agentes de IA como un solo sistema: cada lead respondido en segundos, cada venta con seguimiento y tus horas de vuelta. Aplica a tu Radiografía.",
    },
    nav: {
      links: [
        { label: "Sistemas", href: "#servicios" },
        { label: "Método", href: "#metodo" },
        { label: "Nosotros", href: "#nosotros" },
      ],
      cta: "Aplicar",
    },
    intro: {
      born: "Nacimos 🪐 para",
      words: ["Crear", "Optimizar", "Transformar"],
      tagline: "De la mano a la máquina",
    },
    hero: {
      tag: "Socio de IA · Medellín",
      line1: "Vendes bien a mano.",
      line2: "Por eso pierdes plata.",
      support:
        "Instalamos sitio, CRM y agentes de IA como un solo sistema. Cada lead respondido en segundos.",
      cta: "Aplica a tu Radiografía",
      // TODO: reemplazar "Cupos limitados" con la capacidad real mensual
      // (ej. "8 radiografías al mes") — urgencia honesta o ninguna.
      ctaNote: "30 min · Sin costo · Cupos limitados",
      photoAlt: "Una mano humana y una mano robótica a punto de tocarse",
    },
    // TODO: cuando existan métricas reales de clientes (leads respondidos,
    // horas ahorradas, ventas recuperadas), este strip vuelve a ser numérico.
    leaks: {
      tag: "Las tres fugas",
      items: [
        {
          title: "Leads sin respuesta",
          body: "Un lead que espera horas compra donde le respondieron en segundos.",
        },
        {
          title: "Seguimientos olvidados",
          body: "Las ventas se cierran en el seguimiento — el que nadie tiene tiempo de hacer.",
        },
        {
          title: "Horas digitadas",
          body: "Cada hora copiando datos entre WhatsApp, Excel y facturas es una hora en la que nadie vende.",
        },
      ],
    },
    method: {
      tag: "Nuestro método",
      titleA: "El Método",
      titleB: "Mano → Máquina™.",
      subtitle: "Cuatro fases. Un sistema instalado sin detener tu negocio.",
      steps: [
        {
          number: "01",
          title: "Radiografía",
          body: "Mapeamos dónde tu negocio pierde plata y horas: leads sin respuesta, seguimientos caídos, datos digitados tres veces. Sales con la lista de fugas — trabajes con nosotros o no.",
        },
        {
          number: "02",
          title: "Plano",
          body: "Diseñamos el sistema que tapa esas fugas — y nada más. Sin plantillas, sin módulos que nunca vas a usar.",
        },
        {
          number: "03",
          // TODO: cuando exista un plazo de entrega real, ponerlo aquí
          // (ej. "en 4 semanas") en vez de "en semanas, no meses".
          title: "Instalación",
          body: "Montamos, conectamos y probamos todo mientras sigues vendiendo. En semanas, no meses.",
        },
        {
          number: "04",
          title: "Afinación",
          body: "Medimos cada mes contra las fugas de tu Radiografía. Lo que no genera, se ajusta o se elimina.",
        },
      ],
      tools: {
        tag: "Con lo que ya usas",
        titleA: "Nos conectamos",
        titleB: "a tus herramientas.",
        body: "WhatsApp, Mercado Pago, Shopify, el ecosistema de Google… No te obligamos a cambiar de herramientas: conectamos las que ya usas para que trabajen juntas, solas.",
      },
    },
    footer: {
      links: [
        { label: "Sistemas", href: "#servicios" },
        { label: "Método", href: "#metodo" },
        { label: "Nosotros", href: "#nosotros" },
        { label: "Contacto", href: "#contacto" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "De la mano a la máquina",
    },
  },
  en: {
    meta: {
      title: "MindGod — Autonomous AI revenue systems · Medellín",
      description:
        "We install your site, CRM, and AI agents as one system: every lead answered in seconds, every sale followed up, your hours back. Apply for your Radiografía.",
    },
    nav: {
      links: [
        { label: "Systems", href: "#servicios" },
        { label: "Method", href: "#metodo" },
        { label: "About", href: "#nosotros" },
      ],
      cta: "Apply",
    },
    intro: {
      born: "Born 🪐 to",
      words: ["Create", "Optimize", "Transform"],
      tagline: "From hand to machine",
    },
    hero: {
      tag: "AI Partner · Medellín",
      line1: "You sell well by hand.",
      line2: "That's why you lose money.",
      support:
        "We install your site, CRM, and AI agents as one system. Every lead answered in seconds.",
      cta: "Apply for your Radiografía",
      // TODO: replace "Limited spots" with real monthly capacity
      ctaNote: "30 min · Free · Limited spots",
      photoAlt: "A human hand and a robotic hand about to touch",
    },
    // TODO: swap back to real numbers once real client metrics exist.
    leaks: {
      tag: "The three leaks",
      items: [
        {
          title: "Unanswered leads",
          body: "A lead kept waiting for hours buys from whoever answered in seconds.",
        },
        {
          title: "Forgotten follow-ups",
          body: "Sales close in the follow-up — the one nobody has time to do.",
        },
        {
          title: "Hours of typing",
          body: "Every hour copying data between WhatsApp, spreadsheets, and invoices is an hour nobody sells.",
        },
      ],
    },
    // Step names stay in Spanish in both languages — they're the named
    // mechanism, not generic labels.
    method: {
      tag: "Our method",
      titleA: "The Mano → Máquina",
      titleB: "Method™.",
      subtitle: "Four phases. One system, installed without stopping your business.",
      steps: [
        {
          number: "01",
          title: "Radiografía",
          body: "We map where your business leaks money and hours: unanswered leads, dropped follow-ups, data typed three times. You leave with the leak list — whether you hire us or not.",
        },
        {
          number: "02",
          title: "Plano",
          body: "We design the system that plugs those leaks — and nothing else. No templates, no modules you'll never use.",
        },
        {
          number: "03",
          // TODO: replace with the real delivery window when defined.
          title: "Instalación",
          body: "We build, connect, and test everything while you keep selling. Weeks, not months.",
        },
        {
          number: "04",
          title: "Afinación",
          body: "We measure every month against the leaks in your Radiografía. Whatever doesn't produce gets tuned or cut.",
        },
      ],
      tools: {
        tag: "With what you already use",
        titleA: "We plug into",
        titleB: "your existing tools.",
        body: "WhatsApp, Mercado Pago, Shopify, the Google ecosystem… We don't force a switch: we connect the tools you already use so they work together, on their own.",
      },
    },
    footer: {
      links: [
        { label: "Systems", href: "#servicios" },
        { label: "Method", href: "#metodo" },
        { label: "About", href: "#nosotros" },
        { label: "Contact", href: "#contacto" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "From hand to machine",
    },
  },
};
