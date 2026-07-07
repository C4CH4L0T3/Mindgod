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
