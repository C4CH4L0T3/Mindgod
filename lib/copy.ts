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
        { label: "Método", href: "#proceso" },
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
    footer: {
      links: [
        { label: "Sistemas", href: "#servicios" },
        { label: "Método", href: "#proceso" },
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
        { label: "Method", href: "#proceso" },
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
    footer: {
      links: [
        { label: "Systems", href: "#servicios" },
        { label: "Method", href: "#proceso" },
        { label: "About", href: "#nosotros" },
        { label: "Contact", href: "#contacto" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "From hand to machine",
    },
  },
};
