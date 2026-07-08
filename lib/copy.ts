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
    live: string;
    line1: string;
    line2: string;
    support: string;
    cta: string;
    ctaNote: string;
    stripLabel: string;
  };
  leaks: {
    tag: string;
    items: { title: string; body: string }[];
  };
  offers: {
    tag: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    orbitalHint: string;
    orbitalLabels: { featured: string; impact: string; related: string; cta: string };
    items: {
      name: string;
      tag: string;
      orbital: string;
      outcome: string;
      includes: string[];
      forWho: string;
      notForWho: string;
      priceAnchor: string;
      price: string;
    }[];
    cardCta: string;
    guarantee: { tag: string; title: string; body: string };
    inside: {
      tag: string;
      titleA: string;
      titleB: string;
      body: string;
      cmd: string;
      lines: string[];
      done: string;
    };
  };
  method: {
    tag: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    steps: { number: string; title: string; body: string }[];
    tools: { tag: string; titleA: string; titleB: string; body: string };
  };
  fit: {
    tag: string;
    titleA: string;
    titleB: string;
    forTitle: string;
    forItems: string[];
    againstTitle: string;
    againstItems: string[];
    close: string;
    closeCta: string;
  };
  about: {
    tag: string;
    statement: { text: string; style?: "ink" | "em" }[];
    founder: { tag: string; name: string; role: string; note: string };
    honest: { tag: string; title: string; body: string };
    marks: string[];
  };
  faq: {
    tag: string;
    titleA: string;
    titleB: string;
    items: { q: string; a: string }[];
  };
  contact: {
    tag: string;
    title: string;
    sub: string;
    capacity: string;
    namePlaceholder: string;
    businessPlaceholder: string;
    bottleneckLabel: string;
    bottleneckOptions: string[];
    cta: string;
    note: string;
    wa: { greeting: string; business: string; bottleneck: string; closing: string };
    spline: { tag: string; titleA: string; titleB: string };
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
        { label: "Sistemas", href: "#sistemas" },
        { label: "Método", href: "#metodo" },
        { label: "Nosotros", href: "#nosotros" },
      ],
      cta: "Aplicar",
    },
    intro: {
      born: "Nacimos 🪐 para",
      words: ["Crear", "Optimizar", "Transformar"],
      tagline: "Del humano a la máquina",
    },
    hero: {
      tag: "Socio de IA · Medellín",
      live: "Sistema en línea · responde en <60 s",
      line1: "Sigues atrapado en tu negocio.",
      line2: "Tu competencia ya lo automatizó.",
      support:
        "No te va a reemplazar la IA — te va a reemplazar el dueño que la usó primero y hoy trabaja la mitad ganando el doble.",
      cta: "Aplica a tu Radiografía",
      // TODO: reemplazar "Cupos limitados" con la capacidad real mensual
      // (ej. "8 radiografías al mes") — urgencia honesta o ninguna.
      ctaNote: "30 min · Sin costo · Cupos limitados",
      stripLabel: "Instalamos sobre las herramientas que ya usas",
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
    offers: {
      tag: "Lo que instalamos",
      titleA: "No vendemos servicios.",
      titleB: "Instalamos sistemas.",
      subtitle:
        "Tres formas de pasar del humano a la máquina — según dónde estés.",
      orbitalHint: "Toca un sistema para explorarlo",
      orbitalLabels: {
        featured: "BUQUE INSIGNIA",
        impact: "Nivel de impacto",
        related: "Sistemas conectados",
        cta: "Aplicar",
      },
      items: [
        {
          name: "La Primera Pieza",
          tag: "Punto de partida",
          orbital:
            "Tu primera automatización: la recepción. La IA responde, califica y agenda por WhatsApp — en segundos, a toda hora.",
          outcome: "Ningún lead vuelve a esperar.",
          includes: [
            "Agente de IA en tu WhatsApp, entrenado con tu negocio",
            "Respuesta y calificación en menos de 60 segundos",
            "Agenda conectada a tu calendario",
            "Panel simple: qué llegó, qué se agendó, qué se perdió",
          ],
          forWho: "Para negocios que pierden leads por demora en responder.",
          notForWho:
            "No es para quien quiere “probar la IA” sin leads reales que atender.",
          priceAnchor:
            "Suma lo que vale un solo cliente que se fue por no recibir respuesta. Eso cuesta no tenerla — cada semana.",
          // TODO: precio real. Mientras tanto, se define en la Radiografía.
          price: "Inversión: se define en tu Radiografía.",
        },
        {
          name: "El Sistema Completo",
          tag: "Hecho para ti",
          orbital:
            "Sitio que convierte + CRM a tu medida + agentes de IA — instalados como una sola máquina de ventas, con tu equipo entrenado.",
          outcome: "Tu operación comercial completa, corriendo sola.",
          includes: [
            "Sitio diseñado para convertir, conectado al pipeline",
            "CRM a la medida de tu forma de vender",
            "Agentes de IA: recepción, seguimiento y recordatorios",
            "Reportes automáticos cada semana",
            "Equipo entrenado y acompañamiento de arranque",
          ],
          forWho:
            "Para negocios con demanda real que se ahogan en el seguimiento manual.",
          notForWho:
            "No es para quien aún no tiene flujo de clientes, ni para quien busca “una página bonita”.",
          priceAnchor:
            "Antes del precio, haz la cuenta: ¿cuánto vale un mes de leads sin respuesta y seguimientos caídos? El sistema cuesta menos.",
          // TODO: precio real del buque insignia.
          price: "Inversión: se define en tu Radiografía.",
        },
        {
          name: "Socio de Afinación",
          tag: "Solo post-instalación",
          orbital:
            "Medición mensual, ajustes y nuevas automatizaciones sobre tu sistema instalado. Lo que no genera, se cambia.",
          outcome: "El sistema mejora cada mes.",
          includes: [
            "Revisión mensual contra tu Radiografía",
            "Ajustes y nuevas automatizaciones incluidas",
            "Reporte claro: qué generó, qué se afinó",
            "Prioridad de soporte",
          ],
          forWho:
            "Para quien ya tiene un sistema MindGod instalado y quiere que mejore solo.",
          notForWho:
            "No se vende por separado: sin instalación no hay qué afinar.",
          priceAnchor:
            "Un sistema sin afinar se degrada; uno afinado se compone. La diferencia paga la mensualidad.",
          // TODO: mensualidad real.
          price: "Mensualidad: se define en tu Radiografía.",
        },
      ],
      cardCta: "Aplica a tu Radiografía",
      guarantee: {
        tag: "Garantía",
        title: "La garantía de los 60 segundos.",
        body: "Si un lead escribe y tu sistema no responde en menos de 60 segundos, afinamos gratis hasta que lo haga. Garantizamos lo que controlamos: velocidad, entrega y funcionamiento. No te prometemos ventas — promesas así las hace quien no piensa quedarse a medirlas.",
      },
      inside: {
        tag: "Así se ve por dentro",
        titleA: "Mientras tú vendes,",
        titleB: "la máquina trabaja.",
        body: "Cada sistema que entregamos corre solo: captura, responde, organiza y reporta — sin que nadie toque una tecla.",
        cmd: "> mindgod deploy --sistema completo",
        lines: [
          "✔ CRM configurado a tu medida.",
          "✔ Sitio conectado al pipeline de ventas.",
          "✔ Agentes de IA entrenados con tus procesos.",
          "✔ Leads capturados, calificados y asignados.",
          "ℹ Cada lead respondido en menos de 60 segundos.",
        ],
        done: "Listo. Del humano a la máquina.",
      },
    },
    method: {
      tag: "Nuestro método",
      titleA: "El Método",
      titleB: "Humano → Máquina™.",
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
    fit: {
      tag: "Filtro honesto",
      titleA: "No trabajamos con todos.",
      titleB: "Y eso te conviene.",
      forTitle: "Es para ti si…",
      forItems: [
        "Tu negocio ya vende y te llegan clientes cada semana.",
        "Pierdes ventas por demoras, olvidos o falta de manos.",
        "Quieres un sistema que quede tuyo — no depender de una agencia para siempre.",
        "Puedes dedicarle dos horas a tu Radiografía y a decidir en serio.",
      ],
      againstTitle: "No es para ti si…",
      againstItems: [
        "Todavía no tienes clientes ni flujo de leads.",
        "Buscas la opción más barata, no la que recupera más plata.",
        "Quieres “una página bonita” sin cambiar cómo operas.",
        "Esperas resultados mágicos de un día para otro.",
      ],
      close: "Si te viste en la primera lista, la Radiografía es tuya.",
      closeCta: "Aplica ahora",
    },
    about: {
      tag: "Quiénes somos",
      statement: [
        { text: "Nacimos en Medellín", style: "ink" },
        {
          text: " con una idea fija: la tecnología de las grandes corporaciones también es para ",
        },
        { text: "tu negocio", style: "em" },
        {
          text: " — sin jerga, sin enredos y sin costos de corporación. Tú lo conoces mejor que nadie; ",
        },
        { text: "nosotros lo hacemos imparable", style: "ink" },
        { text: "." },
      ],
      founder: {
        tag: "El fundador",
        // TODO: foto real del fundador (public/images/founder.jpg)
        name: "Emmanuel",
        role: "Fundador · MindGod",
        note: "“Monté MindGod porque veía negocios buenos perder ventas por cosas que una máquina resuelve en segundos. En tu Radiografía hablas conmigo — no con un vendedor.”",
      },
      honest: {
        tag: "Sin humo",
        title: "Cero testimonios inventados.",
        body: "Somos un estudio nuevo con estándares viejos: no publicamos testimonios que no existen ni cifras que no medimos. Publicamos el método, lo garantizamos por escrito y dejamos que los resultados hablen cuando existan — con nombre y apellido.",
      },
      marks: ["Medellín · Colombia", "IA aplicada al negocio real"],
    },
    faq: {
      tag: "Preguntas directas",
      titleA: "Lo que preguntarías",
      titleB: "antes de escribirnos.",
      items: [
        {
          q: "¿Cuánto cuesta?",
          // TODO: cuando existan precios/rangos reales, ponerlos aquí.
          a: "Menos que el problema. Cada sistema se cotiza sobre tu Radiografía: primero medimos cuánto te cuesta operar a mano y contra eso ves el precio. Sin costos ocultos y sin mensualidades obligatorias — la Afinación es opcional y solo existe después de instalar.",
        },
        {
          q: "¿En cuánto tiempo está funcionando?",
          // TODO: plazo real de entrega cuando esté definido.
          a: "Semanas, no meses. El plazo exacto sale del Plano y queda por escrito — y la fecha de entrega hace parte de lo que garantizamos.",
        },
        {
          q: "No sé nada de tecnología.",
          a: "Perfecto: no tienes que saber. Entregamos todo montado y probado, entrenamos a tu equipo y te hablamos en cristiano. Si algo no se entiende, es problema nuestro, no tuyo.",
        },
        {
          q: "¿Y si el sistema no funciona?",
          a: "Garantizamos lo que controlamos: si un lead escribe y el sistema no responde en menos de 60 segundos, afinamos gratis hasta que lo haga. Lo que no te vamos a prometer son ventas — eso lo promete quien no piensa quedarse a medirlas.",
        },
        {
          q: "¿Tengo que cambiar mis herramientas?",
          a: "No. Nos conectamos a lo que ya usas — WhatsApp, tu calendario, Mercado Pago, Shopify, hasta tu Excel. El sistema se adapta a tu forma de trabajar, no al revés.",
        },
        {
          q: "¿Por qué no un freelancer más barato?",
          a: "Puedes — y te hará una página o un bot sueltos. Nosotros instalamos un sistema completo, con garantía por escrito y medición mensual. Lo barato sale caro cuando cada lead perdido vale plata.",
        },
        {
          q: "¿La IA va a sonar como robot con mis clientes?",
          a: "La entrenamos con tu tono y tus respuestas reales, y lo delicado siempre puede pasar a un humano. Tus clientes notan una sola cosa: que ahora les responden al instante.",
        },
      ],
    },
    contact: {
      tag: "Último paso",
      title: "Aplica.",
      sub: "Tu Radiografía: 30 minutos con el fundador. Sales sabiendo exactamente dónde pierdes tiempo y ventas — trabajes con nosotros o no.",
      // TODO: capacidad real mensual (ej. "8 radiografías al mes").
      capacity: "Cupos limitados por mes",
      namePlaceholder: "Nombre completo",
      businessPlaceholder: "Tu negocio (ej. inmobiliaria, clínica, tienda)",
      bottleneckLabel: "¿Dónde pierdes más hoy?",
      bottleneckOptions: [
        "Leads sin respuesta",
        "Seguimiento de ventas",
        "Horas en tareas manuales",
        "No estoy seguro — para eso es la Radiografía",
      ],
      cta: "Aplicar por WhatsApp",
      note: "Se abre WhatsApp con tu aplicación lista — la envías tú, sin compromiso.",
      wa: {
        greeting: "Hola, soy",
        business: "Mi negocio",
        bottleneck: "Mi mayor fuga",
        closing: "Quiero aplicar a la Radiografía de 30 minutos.",
      },
      spline: {
        tag: "Atención 24/7",
        titleA: "La máquina ya está",
        titleB: "despierta.",
      },
    },
    footer: {
      links: [
        { label: "Sistemas", href: "#sistemas" },
        { label: "Método", href: "#metodo" },
        { label: "Nosotros", href: "#nosotros" },
        { label: "FAQ", href: "#faq" },
        { label: "Contacto", href: "#contacto" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "Del humano a la máquina",
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
        { label: "Systems", href: "#sistemas" },
        { label: "Method", href: "#metodo" },
        { label: "About", href: "#nosotros" },
      ],
      cta: "Apply",
    },
    intro: {
      born: "Born 🪐 to",
      words: ["Create", "Optimize", "Transform"],
      tagline: "From human to machine",
    },
    hero: {
      tag: "AI Partner · Medellín",
      live: "System online · replies in <60s",
      line1: "You're still trapped in your business.",
      line2: "Your competition already automated theirs.",
      support:
        "AI won't replace you — the owner who used it first will. He works half the hours and earns double.",
      cta: "Apply for your Radiografía",
      // TODO: replace "Limited spots" with real monthly capacity
      ctaNote: "30 min · Free · Limited spots",
      stripLabel: "We install on the tools you already use",
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
    offers: {
      tag: "What we install",
      titleA: "We don't sell services.",
      titleB: "We install systems.",
      subtitle:
        "Three ways to go from human to machine — depending on where you are.",
      orbitalHint: "Tap a system to explore it",
      orbitalLabels: {
        featured: "FLAGSHIP",
        impact: "Impact level",
        related: "Connected systems",
        cta: "Apply",
      },
      items: [
        {
          name: "La Primera Pieza",
          tag: "The starting point",
          orbital:
            "Your first automation: reception. AI answers, qualifies, and books over WhatsApp — in seconds, around the clock.",
          outcome: "No lead ever waits again.",
          includes: [
            "AI agent on your WhatsApp, trained on your business",
            "Answer and qualification in under 60 seconds",
            "Booking wired to your calendar",
            "A simple panel: what came in, what got booked, what slipped",
          ],
          forWho: "For businesses losing leads to slow replies.",
          notForWho:
            "Not for “trying out AI” without real leads to attend to.",
          priceAnchor:
            "Add up what one client who walked away over a slow reply is worth. That's the cost of not having it — every week.",
          // TODO: real price. Until then it's quoted in the Radiografía.
          price: "Investment: defined in your Radiografía.",
        },
        {
          name: "El Sistema Completo",
          tag: "Built around you",
          orbital:
            "Converting site + custom CRM + AI agents — installed as one sales machine, with your team trained.",
          outcome: "Your entire sales operation, running on its own.",
          includes: [
            "A site designed to convert, wired to the pipeline",
            "A CRM shaped to how you actually sell",
            "AI agents: reception, follow-up, and reminders",
            "Automatic weekly reports",
            "Team trained, launch support included",
          ],
          forWho:
            "For businesses with real demand drowning in manual follow-up.",
          notForWho:
            "Not for businesses without client flow yet, or anyone shopping for “a pretty website”.",
          priceAnchor:
            "Before the price, run the math: what does one month of unanswered leads and dropped follow-ups cost you? The system costs less.",
          // TODO: real flagship price.
          price: "Investment: defined in your Radiografía.",
        },
        {
          name: "Socio de Afinación",
          tag: "Post-install only",
          orbital:
            "Monthly measurement, tuning, and new automations on your installed system. What doesn't produce gets changed.",
          outcome: "The system gets better every month.",
          includes: [
            "Monthly review against your Radiografía",
            "Tuning and new automations included",
            "A clear report: what produced, what got tuned",
            "Priority support",
          ],
          forWho:
            "For owners with a MindGod system installed who want it improving on its own.",
          notForWho:
            "Not sold separately: without an install there's nothing to tune.",
          priceAnchor:
            "An untuned system decays; a tuned one compounds. The difference pays the retainer.",
          // TODO: real monthly price.
          price: "Monthly: defined in your Radiografía.",
        },
      ],
      cardCta: "Apply for your Radiografía",
      guarantee: {
        tag: "Guarantee",
        title: "The 60-second guarantee.",
        body: "If a lead writes and your system doesn't answer in under 60 seconds, we tune it for free until it does. We guarantee what we control: speed, delivery, and uptime. We won't promise you revenue — promises like that come from people who don't plan to stick around and measure.",
      },
      inside: {
        tag: "What it looks like inside",
        titleA: "While you sell,",
        titleB: "the machine works.",
        body: "Every system we deliver runs on its own: it captures, answers, organizes, and reports — without anyone touching a key.",
        cmd: "> mindgod deploy --system complete",
        lines: [
          "✔ CRM configured to fit you.",
          "✔ Site wired to the sales pipeline.",
          "✔ AI agents trained on your processes.",
          "✔ Leads captured, qualified, and assigned.",
          "ℹ Every lead answered in under 60 seconds.",
        ],
        done: "Done. From human to machine.",
      },
    },
    // Step names stay in Spanish in both languages — they're the named
    // mechanism, not generic labels.
    method: {
      tag: "Our method",
      titleA: "The Humano → Máquina",
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
    fit: {
      tag: "An honest filter",
      titleA: "We don't work with everyone.",
      titleB: "That's good for you.",
      forTitle: "This is for you if…",
      forItems: [
        "Your business already sells and clients reach out every week.",
        "You lose sales to slow replies, missed follow-ups, or too few hands.",
        "You want a system you own — not a lifetime dependency on an agency.",
        "You can give your Radiografía two hours and a serious decision.",
      ],
      againstTitle: "It's not for you if…",
      againstItems: [
        "You don't have clients or lead flow yet.",
        "You're shopping for the cheapest option, not the one that recovers the most money.",
        "You want “a pretty website” without changing how you operate.",
        "You expect magic overnight.",
      ],
      close: "Saw yourself in the first list? The Radiografía is yours.",
      closeCta: "Apply now",
    },
    about: {
      tag: "Who we are",
      statement: [
        { text: "Born in Medellín", style: "ink" },
        {
          text: " with one fixed idea: big-corporation technology belongs to ",
        },
        { text: "your business", style: "em" },
        {
          text: " too — no jargon, no tangles, no corporate price tag. You know it better than anyone; ",
        },
        { text: "we make it unstoppable", style: "ink" },
        { text: "." },
      ],
      founder: {
        tag: "The founder",
        // TODO: real founder photo (public/images/founder.jpg)
        name: "Emmanuel",
        role: "Founder · MindGod",
        note: "“I started MindGod because I kept watching good businesses lose sales to things a machine solves in seconds. On your Radiografía call you talk to me — not to a salesperson.”",
      },
      honest: {
        tag: "No smoke",
        title: "Zero invented testimonials.",
        body: "We're a new studio with old-school standards: we don't publish testimonials that don't exist or numbers we didn't measure. We publish the method, guarantee it in writing, and let results speak when they exist — with first and last names.",
      },
      marks: ["Medellín · Colombia", "AI applied to real business"],
    },
    faq: {
      tag: "Straight questions",
      titleA: "What you'd ask",
      titleB: "before writing to us.",
      items: [
        {
          q: "How much does it cost?",
          // TODO: real prices/ranges when defined.
          a: "Less than the problem. Every system is quoted off your Radiografía: first we measure what running by hand costs you, and you see the price against that. No hidden fees, no forced retainers — Afinación is optional and only exists after an install.",
        },
        {
          q: "How fast is it up and running?",
          // TODO: real delivery window when defined.
          a: "Weeks, not months. The exact timeline comes out of the Plano and goes in writing — and the delivery date is part of what we guarantee.",
        },
        {
          q: "I know nothing about technology.",
          a: "Perfect: you don't have to. We deliver everything built and tested, train your team, and speak plainly. If something isn't clear, that's our problem, not yours.",
        },
        {
          q: "What if the system doesn't work?",
          a: "We guarantee what we control: if a lead writes and the system doesn't answer in under 60 seconds, we tune it for free until it does. What we won't promise is revenue — that promise comes from people who don't plan to stay and measure.",
        },
        {
          q: "Do I have to switch tools?",
          a: "No. We plug into what you already use — WhatsApp, your calendar, Mercado Pago, Shopify, even your spreadsheet. The system adapts to how you work, not the other way around.",
        },
        {
          q: "Why not a cheaper freelancer?",
          a: "You can — and you'll get a standalone page or bot. We install a complete system, with a written guarantee and monthly measurement. Cheap gets expensive when every lost lead is worth money.",
        },
        {
          q: "Will the AI sound like a robot to my clients?",
          a: "We train it on your tone and your real answers, and anything delicate can always hand off to a human. Your clients notice exactly one thing: they get answered instantly now.",
        },
      ],
    },
    contact: {
      tag: "Last step",
      title: "Apply.",
      sub: "Your Radiografía: 30 minutes with the founder. You leave knowing exactly where you're losing time and sales — whether you work with us or not.",
      // TODO: real monthly capacity (e.g. "8 radiografías a month").
      capacity: "Limited spots per month",
      namePlaceholder: "Full name",
      businessPlaceholder: "Your business (e.g. real estate, clinic, store)",
      bottleneckLabel: "Where do you lose the most today?",
      bottleneckOptions: [
        "Unanswered leads",
        "Sales follow-up",
        "Hours on manual tasks",
        "Not sure — that's what the Radiografía is for",
      ],
      cta: "Apply via WhatsApp",
      note: "WhatsApp opens with your application ready — you hit send, no commitment.",
      wa: {
        greeting: "Hi, I'm",
        business: "My business",
        bottleneck: "My biggest leak",
        closing: "I want to apply for the 30-minute Radiografía.",
      },
      spline: {
        tag: "On call 24/7",
        titleA: "The machine is already",
        titleB: "awake.",
      },
    },
    footer: {
      links: [
        { label: "Systems", href: "#sistemas" },
        { label: "Method", href: "#metodo" },
        { label: "About", href: "#nosotros" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contacto" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "From human to machine",
    },
  },
};
