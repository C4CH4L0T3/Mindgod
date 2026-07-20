/*
 * Diccionario bilingüe — todo el copy del sitio vive aquí.
 *
 * EN es el idioma primario (ruta "/"); ES vive en "/es".
 * Traducimos intención, no palabra por palabra: cada versión debe leerse
 * como si se hubiera escrito en ese idioma.
 *
 * Cliente objetivo: dueño de negocio de servicios en EE. UU. (techos, HVAC,
 * contratistas, transporte, restaurantes) — muchos bilingües. Piensa en
 * dólares por trabajo perdido, no en features.
 */

export type Lang = "en" | "es";

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
  caseStudy: {
    tag: string;
    titleA: string;
    titleB: string;
    cases: {
      name: string;
      handle: string;
      url: string;
      desc: string;
      frameLabel: string;
      summary: string;
      facts: string[];
      shotsNote: string;
      shots: { src: string; alt: string }[];
      /* quote vacío = no se muestra; NUNCA inventar las palabras del cliente */
      quote: string;
      quoteAuthor: string;
    }[];
    ctaLead: string;
    cta: string;
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
  referrals: {
    meta: { title: string; description: string };
    tag: string;
    titleA: string;
    titleB: string;
    support: string;
    steps: { number: string; title: string; body: string }[];
    deal: { tag: string; title: string; items: string[] };
    fit: {
      forTitle: string;
      forItems: string[];
      againstTitle: string;
      againstItems: string[];
    };
    form: {
      tag: string;
      title: string;
      sub: string;
      namePlaceholder: string;
      businessPlaceholder: string;
      bottleneckLabel: string;
      bottleneckOptions: string[];
      cta: string;
      note: string;
      wa: { greeting: string; referral: string; bottleneck: string; closing: string };
    };
  };
  footer: { links: NavLink[]; location: string; tagline: string };
}

export const copy: Record<Lang, Copy> = {
  en: {
    meta: {
      title: "MindGod — Websites & AI Sales Systems for Service Businesses",
      description:
        "We build websites that sell — and install CRM + AI agents around them as one system: every lead answered in seconds, every follow-up done, your hours back. Apply for your X-Ray.",
    },
    nav: {
      links: [
        { label: "Systems", href: "#sistemas" },
        { label: "Method", href: "#metodo" },
        { label: "About", href: "#nosotros" },
        { label: "Real work", href: "#caso" },
      ],
      cta: "Apply",
    },
    intro: {
      born: "Born 🪐 to",
      words: ["Create", "Optimize", "Transform"],
      tagline: "From human to machine",
    },
    hero: {
      tag: "Websites & AI Systems for Service Businesses",
      live: "System online · replies in <60s",
      line1: "You're still trapped in your business.",
      line2: "Your competitor already automated his.",
      support:
        "AI won't replace you. The owner who used it first will — he works half the hours and closes twice the jobs.",
      cta: "Apply for your X-Ray",
      // Honest urgency or none: the real scarcity is the founder doing every
      // call himself. TODO: swap in the real monthly capacity when defined.
      ctaNote: "30 min · Free · Straight with the founder",
      stripLabel: "We install on the tools you already use",
    },
    // TODO: swap back to real numbers once real client metrics exist.
    leaks: {
      tag: "The three leaks",
      items: [
        {
          title: "Unanswered leads",
          body: "A lead kept waiting for hours buys from whoever answered in seconds. Run the math on one lost job.",
        },
        {
          title: "Forgotten follow-ups",
          body: "Jobs close in the follow-up — the one nobody has time to do.",
        },
        {
          title: "Hours lost to data entry",
          body: "Every night retyping jobs between WhatsApp, spreadsheets, and invoices is a night nobody's selling.",
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
          name: "The First Piece",
          tag: "The starting point",
          orbital:
            "Your first automation: the front desk. AI answers, qualifies, and books over WhatsApp — in seconds, around the clock.",
          outcome: "No lead ever waits again.",
          includes: [
            "An AI agent on your WhatsApp, trained on your business",
            "Answer and qualification in under 60 seconds",
            "Booking wired to your calendar",
            "A simple panel: what came in, what got booked, what slipped",
          ],
          forWho: "For businesses losing jobs to slow replies.",
          notForWho:
            "Not for “trying out AI” without real leads to answer.",
          priceAnchor:
            "Add up what ONE job lost to a slow reply is worth. That's the cost of not having it — every week.",
          // TODO: real price. Until then it's quoted in the X-Ray.
          price: "Investment: defined in your X-Ray.",
        },
        {
          name: "The Full System",
          tag: "Built around you",
          orbital:
            "A website that sells + a custom CRM + AI agents — installed as one sales machine, with your team trained.",
          outcome: "Your whole sales operation, running on its own.",
          includes: [
            "A website designed to sell, wired to your pipeline",
            "A CRM shaped to how you actually sell",
            "AI agents: front desk, follow-up, and reminders",
            "Automatic weekly reports",
            "Team trained, launch support included",
          ],
          forWho:
            "For businesses with real demand drowning in manual follow-up.",
          notForWho:
            "Not for businesses without lead flow yet, or anyone shopping for “a pretty website”.",
          priceAnchor:
            "Before the price, run the numbers: what did last month's unanswered leads and dropped follow-ups cost you? The system costs less.",
          // TODO: real flagship price.
          price: "Investment: defined in your X-Ray.",
        },
        {
          name: "Tuning Partner",
          tag: "Post-install only",
          orbital:
            "Monthly measurement, adjustments, and new automations on your installed system. What doesn't produce gets changed.",
          outcome: "The system gets better every month.",
          includes: [
            "Monthly review against your X-Ray",
            "Tuning and new automations included",
            "A clear report: what produced, what got tuned",
            "Priority support",
          ],
          forWho:
            "For owners with a MindGod system installed who want it improving on its own.",
          notForWho:
            "Not sold separately: no install, nothing to tune.",
          priceAnchor:
            "An untuned system decays; a tuned one compounds. The difference pays the retainer.",
          // TODO: real monthly price.
          price: "Monthly: defined in your X-Ray.",
        },
      ],
      cardCta: "Apply for your X-Ray",
      guarantee: {
        tag: "Guarantee",
        title: "The 60-second guarantee.",
        body: "If a lead writes in and your system doesn't answer in under 60 seconds, we tune it for free until it does. We guarantee what we control: speed, delivery, and uptime. We won't promise you revenue — promises like that come from people who don't plan to stick around and measure.",
      },
      inside: {
        tag: "What it looks like inside",
        titleA: "While you sell,",
        titleB: "the machine works.",
        body: "Every system we deliver runs on its own: it captures, answers, organizes, and reports — without anyone touching a key.",
        cmd: "> mindgod deploy --full-system",
        lines: [
          "✔ CRM configured to fit your operation.",
          "✔ Website wired to the sales pipeline.",
          "✔ AI agents trained on your processes.",
          "✔ Leads captured, qualified, and assigned.",
          "ℹ Every lead answered in under 60 seconds.",
        ],
        done: "Done. From human to machine.",
      },
    },
    method: {
      tag: "Our method",
      titleA: "The Human → Machine",
      titleB: "Method™.",
      subtitle: "Four phases. One system, installed without stopping your business.",
      steps: [
        {
          number: "01",
          title: "X-Ray",
          body: "We map where your business leaks money and hours: unanswered leads, dropped follow-ups, data typed in three times. You leave with the leak list — whether you hire us or not.",
        },
        {
          number: "02",
          title: "Blueprint",
          body: "We design the system that plugs those leaks — and nothing else. No templates, no modules you'll never use.",
        },
        {
          number: "03",
          // TODO: replace with the real delivery window when defined.
          title: "Installation",
          body: "We build, connect, and test everything while you keep selling. Weeks, not months.",
        },
        {
          number: "04",
          title: "Tuning",
          body: "We measure every month against the leaks in your X-Ray. Whatever doesn't produce gets adjusted or cut.",
        },
      ],
      tools: {
        tag: "With what you already use",
        titleA: "We plug into",
        titleB: "your existing tools.",
        body: "WhatsApp, Stripe, QuickBooks, the Google ecosystem… We don't make you switch tools: we connect the ones you already use so they work together, on their own.",
      },
    },
    fit: {
      tag: "An honest filter",
      titleA: "We don't work with everyone.",
      titleB: "That's good for you.",
      forTitle: "This is for you if…",
      forItems: [
        "Your business already sells and leads come in every week.",
        "You're losing jobs to slow replies, missed follow-ups, or too few hands.",
        "You want a system you own — not a lifetime dependency on an agency.",
        "You can give your X-Ray two hours and a serious decision.",
      ],
      againstTitle: "It's not for you if…",
      againstItems: [
        "You don't have clients or lead flow yet.",
        "You're shopping for the cheapest option, not the one that recovers the most dollars.",
        "You want “a pretty website” without changing how you operate.",
        "You expect magic overnight.",
      ],
      close: "Saw yourself in the first list? The X-Ray is yours.",
      closeCta: "Apply now",
    },
    about: {
      tag: "Who we are",
      statement: [
        { text: "Built from Medellín", style: "ink" },
        {
          text: " — your time zone, senior work, none of the US-agency price tag. Big-corporation technology belongs to ",
        },
        { text: "your business", style: "em" },
        {
          text: " too. You know it better than anyone; ",
        },
        { text: "we make it unstoppable", style: "ink" },
        { text: "." },
      ],
      founder: {
        tag: "The founder",
        // TODO: real founder photo (public/images/founder.jpg)
        name: "Emmanuel",
        role: "Founder · MindGod",
        note: "“I started MindGod because I kept watching good businesses lose jobs to things a machine solves in seconds. On your X-Ray call you talk to me — not a sales rep.”",
      },
      honest: {
        tag: "No smoke",
        title: "Zero fake testimonials.",
        body: "We're a new studio with old-school standards: we don't publish testimonials that don't exist or numbers we didn't measure. We publish the method, guarantee it in writing, and let results speak when they exist — with first and last names.",
      },
      marks: ["Medellín · Colombia", "Serving businesses across the US"],
    },
    /*
     * Los casos reales — la continuación directa del bloque "Sin humo":
     * dijimos que los resultados hablarían cuando existieran. Ya existen.
     * StormShield va primero: es el espejo del cliente objetivo (servicios,
     * EE. UU., miles de dólares por trabajo).
     */
    caseStudy: {
      tag: "Real work",
      titleA: "We promised to publish only what's real.",
      titleB: "Two, and counting.",
      cases: [
        {
          name: "StormShield Roofing",
          handle: "@stormshield_roofing_",
          url: "https://www.instagram.com/stormshield_roofing_",
          desc: "Residential roofing · United States",
          frameLabel: "STORMSHIELD ROOFING CRM · BY MINDGOD",
          summary:
            "StormShield is a US roofing company selling renovations worth thousands of dollars per job, putting dozens of people to work every month. They chose us to build their custom CRM: from lead to installed roof in one system.",
          facts: [
            "A visual lead pipeline: first contact to inspection to close.",
            "Every job with its crew, dates, and payment status.",
            "Estimates, install scheduling, invoicing, and reports — without leaving the system.",
            "Built from Medellín for a US operation — same hours, senior work.",
          ],
          shotsNote: "Real product — screenshots use demo data.",
          shots: [
            {
              src: "/images/casos/stormshield-panel.png",
              alt: "StormShield Roofing CRM dashboard: leads, jobs in progress, pipeline value, and revenue",
            },
            {
              src: "/images/casos/stormshield-leads.png",
              alt: "CRM lead pipeline: cards by stage, from new contact to scheduled inspection",
            },
            {
              src: "/images/casos/stormshield-crew.png",
              alt: "CRM crew management: every member with their active jobs and availability",
            },
          ],
          // TODO: the client's VERBATIM words, with permission — the quote
          // block stays hidden until then. Never write them for him.
          quote: "",
          quoteAuthor: "",
        },
        {
          name: "Puebleriando",
          handle: "@puebleriando",
          url: "https://www.instagram.com/puebleriando",
          desc: "Travel agency",
          frameLabel: "PUEBLERIANDO CRM · POWERED BY MINDGOD",
          summary:
            "We built Puebleriando a custom CRM around their operation: clients, trips, payments, and calendar in one panel. Paid for once, owned forever — no monthly software fees for life.",
          facts: [
            "The week's departures, returns, overdue payments, and check-ins — at a glance.",
            "Every client with their trip, balance, and history on a single card.",
            "Active trips with dates, airlines, and payment status in real time.",
            "One payment: the system is theirs. Zero monthly fees, for life.",
          ],
          shotsNote:
            "Real product, in production. Names and figures changed to protect the agency's data.",
          shots: [
            {
              src: "/images/casos/puebleriando-panel.png",
              alt: "Puebleriando CRM dashboard: departures, overdue payments, returns, and yearly finances",
            },
            {
              src: "/images/casos/puebleriando-clientes.png",
              alt: "CRM clients view: every client with their trip, status, and balance",
            },
            {
              src: "/images/casos/puebleriando-viajes.png",
              alt: "CRM active trips: destinations, departure and return dates, payment status",
            },
          ],
          // TODO: the client's VERBATIM words, with permission.
          quote: "",
          quoteAuthor: "",
        },
      ],
      ctaLead: "Does your business need its own?",
      cta: "Apply for your X-Ray",
    },
    faq: {
      tag: "Straight questions",
      titleA: "What you'd ask",
      titleB: "before texting us.",
      items: [
        {
          q: "How much does it cost?",
          // TODO: real prices/ranges when defined.
          a: "Less than the problem. Every system is quoted off your X-Ray: first we measure what running on manual costs you, then you see the price next to that number. No hidden fees, no forced monthlies — Tuning is optional and only exists after an install.",
        },
        {
          q: "How fast is it up and running?",
          // TODO: real delivery window when defined.
          a: "Weeks, not months. The exact timeline comes out of the Blueprint and goes in writing — and the delivery date is part of what we guarantee.",
        },
        {
          q: "I know nothing about technology.",
          a: "Perfect: you don't have to. We deliver everything built and tested, train your team, and talk like humans — not like a SaaS demo. If something isn't clear, that's our problem, not yours.",
        },
        {
          q: "What if the system doesn't work?",
          a: "We guarantee what we control: if a lead writes in and the system doesn't answer in under 60 seconds, we tune it for free until it does. What we won't promise is revenue — that promise comes from people who don't plan to stay and measure.",
        },
        {
          q: "Do I have to switch tools?",
          a: "No. We plug into what you already use — WhatsApp, your calendar, Stripe, QuickBooks, even your spreadsheet. The system adapts to how you work, not the other way around.",
        },
        {
          q: "Why not a cheaper freelancer?",
          a: "You can — and you'll get a page that just sits there. We build websites with a sales system behind them: CRM, AI agents, a written guarantee, monthly measurement. Cheap gets expensive when every lost lead is a paying job.",
        },
        {
          q: "Will the AI sound like a robot to my customers?",
          a: "We train it on your tone and your real answers, and anything delicate can always hand off to a human. Your customers notice exactly one thing: they get answered instantly now.",
        },
      ],
    },
    contact: {
      tag: "Last step",
      title: "Apply.",
      sub: "Your X-Ray: 30 minutes with the founder. You leave knowing exactly where you're losing time and jobs — whether you work with us or not.",
      // The true scarcity: there's no sales team behind this, just a calendar.
      // TODO: swap in the real monthly capacity when defined.
      capacity: "The founder runs every one himself — that's why there are few each month",
      namePlaceholder: "Full name",
      businessPlaceholder: "Your business (e.g. roofing, HVAC, trucking)",
      bottleneckLabel: "Where do you lose the most today?",
      bottleneckOptions: [
        "Unanswered leads",
        "Sales follow-up",
        "Hours on manual tasks",
        "Not sure — that's what the X-Ray is for",
      ],
      cta: "Apply via WhatsApp",
      note: "WhatsApp opens with your application ready — you hit send, no commitment.",
      wa: {
        greeting: "Hi, I'm",
        business: "My business",
        bottleneck: "My biggest leak",
        closing: "I want to apply for the 30-minute X-Ray.",
      },
      spline: {
        tag: "On call 24/7",
        titleA: "The machine is already",
        titleB: "awake.",
      },
    },
    referrals: {
      meta: {
        title: "Referral Program — Earn 20% of the sale · MindGod",
        description:
          "Know a business losing sales to manual work? Introduce us. If they buy their system, 20% of that sale is yours. Clear terms, in writing.",
      },
      tag: "Referral program",
      titleA: "Refer a business.",
      titleB: "Keep 20% of the sale.",
      support:
        "You know the owner; we do the rest. Introduce us to a company that needs to stop running by hand, and if they end up buying their system, 20% of that sale is yours. You don't sell anything — you just open the door.",
      steps: [
        {
          number: "01",
          title: "Introduce us",
          body: "Tell us which business you know and where it leaks the most. From the first message it's registered under your name — we confirm it on WhatsApp.",
        },
        {
          number: "02",
          title: "We sell",
          body: "We run the X-Ray and the whole sales process. You chase nobody: selling is our job.",
        },
        {
          number: "03",
          title: "You collect 20%",
          body: "If your referral buys, we transfer you 20% of the sale. We get paid, you get paid — that simple.",
        },
      ],
      deal: {
        tag: "The deal",
        title: "Clear, and in writing.",
        items: [
          "20% of the first sale: the system the client buys and we install.",
          "We pay you when the client pays. If they pay in parts, you collect in parts.",
          "Your referral is registered under your name from the first message — with confirmation.",
          "No cap: refer as many businesses as you want.",
          "Only businesses not already in conversation with us count.",
        ],
      },
      fit: {
        forTitle: "A good referral…",
        forItems: [
          "Already sells, with leads coming in every week.",
          "Loses jobs to slow replies, missed follow-ups, or too few hands.",
          "You know the owner or the decision-maker — you can introduce us.",
        ],
        againstTitle: "Doesn't count…",
        againstItems: [
          "A business with no clients yet.",
          "Someone just shopping for “a pretty website”.",
          "A company already talking to us.",
        ],
      },
      form: {
        tag: "Refer now",
        title: "Introduce us.",
        sub: "Two minutes. WhatsApp opens with your referral ready — you hit send and we confirm it under your name.",
        namePlaceholder: "Your name",
        businessPlaceholder: "The business you're referring (name, city, or Instagram)",
        bottleneckLabel: "Where does that business lose the most?",
        bottleneckOptions: [
          "Unanswered leads",
          "Sales follow-up",
          "Hours on manual tasks",
          "Not sure — you'll see it in the X-Ray",
        ],
        cta: "Refer via WhatsApp",
        note: "You send the message, no strings. If your referral buys, 20% is yours.",
        wa: {
          greeting: "Hi, I'm",
          referral: "I want to refer",
          bottleneck: "Where they lose the most",
          closing: "I'm here for the referral program (20% of the sale).",
        },
      },
    },
    footer: {
      links: [
        { label: "Systems", href: "#sistemas" },
        { label: "Method", href: "#metodo" },
        { label: "About", href: "#nosotros" },
        { label: "Real work", href: "#caso" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contacto" },
        { label: "Referrals", href: "/referidos" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "From human to machine",
    },
  },
  es: {
    meta: {
      title: "MindGod — Sitios web y sistemas de venta con IA para negocios de servicios",
      description:
        "Hacemos sitios web que venden — e instalamos CRM y agentes de IA alrededor como un solo sistema: cada lead respondido en segundos, cada seguimiento hecho y tus horas de vuelta. Aplica a tu Radiografía.",
    },
    nav: {
      links: [
        { label: "Sistemas", href: "#sistemas" },
        { label: "Método", href: "#metodo" },
        { label: "Nosotros", href: "#nosotros" },
        { label: "Caso real", href: "#caso" },
      ],
      cta: "Aplicar",
    },
    intro: {
      born: "Nacimos 🪐 para",
      words: ["Crear", "Optimizar", "Transformar"],
      tagline: "Del humano a la máquina",
    },
    hero: {
      tag: "Sitios web y sistemas de IA para negocios de servicios",
      live: "Sistema en línea · responde en <60 s",
      line1: "Sigues atrapado en tu negocio.",
      line2: "Tu competencia ya automatizó el suyo.",
      support:
        "No te va a reemplazar la IA — te va a reemplazar el dueño que la usó primero y hoy trabaja la mitad cerrando el doble de trabajos.",
      cta: "Aplica a tu Radiografía",
      // Urgencia honesta o ninguna: la escasez real es que las hace el
      // fundador en persona. TODO: cuando exista capacidad mensual definida
      // (ej. "8 radiografías al mes"), ese número reemplaza esta línea.
      ctaNote: "30 min · Sin costo · Directo con el fundador",
      stripLabel: "Instalamos sobre las herramientas que ya usas",
    },
    // TODO: cuando existan métricas reales de clientes (leads respondidos,
    // horas ahorradas, ventas recuperadas), este strip vuelve a ser numérico.
    leaks: {
      tag: "Las tres fugas",
      items: [
        {
          title: "Leads sin respuesta",
          body: "Un lead que espera horas compra donde le respondieron en segundos. Haz la cuenta de UN trabajo perdido.",
        },
        {
          title: "Seguimientos olvidados",
          body: "Los trabajos se cierran en el seguimiento — el que nadie tiene tiempo de hacer.",
        },
        {
          title: "Horas digitadas",
          body: "Cada noche copiando trabajos entre WhatsApp, Excel y facturas es una noche en la que nadie vende.",
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
          forWho: "Para negocios que pierden trabajos por demorarse en responder.",
          notForWho:
            "No es para quien quiere “probar la IA” sin leads reales que atender.",
          priceAnchor:
            "Suma lo que vale UN trabajo que se fue por responder tarde. Eso cuesta no tenerla — cada semana.",
          // TODO: precio real. Mientras tanto, se define en la Radiografía.
          price: "Inversión: se define en tu Radiografía.",
        },
        {
          name: "El Sistema Completo",
          tag: "Hecho para ti",
          orbital:
            "Sitio web que vende + CRM a tu medida + agentes de IA — instalados como una sola máquina de ventas, con tu equipo entrenado.",
          outcome: "Tu operación comercial completa, corriendo sola.",
          includes: [
            "Sitio web diseñado para vender, conectado al pipeline",
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
            "Antes del precio, haz la cuenta: ¿cuánto te costó el mes pasado en leads sin respuesta y seguimientos caídos? El sistema cuesta menos.",
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
          "✔ Sitio web conectado al pipeline de ventas.",
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
          body: "Mapeamos dónde tu negocio pierde dólares y horas: leads sin respuesta, seguimientos caídos, datos digitados tres veces. Sales con la lista de fugas — trabajes con nosotros o no.",
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
        body: "WhatsApp, Stripe, QuickBooks, el ecosistema de Google… No te obligamos a cambiar de herramientas: conectamos las que ya usas para que trabajen juntas, solas.",
      },
    },
    fit: {
      tag: "Filtro honesto",
      titleA: "No trabajamos con todos.",
      titleB: "Y eso te conviene.",
      forTitle: "Es para ti si…",
      forItems: [
        "Tu negocio ya vende y te llegan clientes cada semana.",
        "Pierdes trabajos por demoras, olvidos o falta de manos.",
        "Quieres un sistema que quede tuyo — no depender de una agencia para siempre.",
        "Puedes dedicarle dos horas a tu Radiografía y a decidir en serio.",
      ],
      againstTitle: "No es para ti si…",
      againstItems: [
        "Todavía no tienes clientes ni flujo de leads.",
        "Buscas la opción más barata, no la que recupera más dólares.",
        "Quieres “una página bonita” sin cambiar cómo operas.",
        "Esperas resultados mágicos de un día para otro.",
      ],
      close: "Si te viste en la primera lista, la Radiografía es tuya.",
      closeCta: "Aplica ahora",
    },
    about: {
      tag: "Quiénes somos",
      statement: [
        { text: "Trabajamos desde Medellín", style: "ink" },
        {
          text: " — tu mismo huso horario, trabajo senior y sin precios de agencia gringa. La tecnología de las grandes corporaciones también es para ",
        },
        { text: "tu negocio", style: "em" },
        {
          text: ". Tú lo conoces mejor que nadie; ",
        },
        { text: "nosotros lo hacemos imparable", style: "ink" },
        { text: "." },
      ],
      founder: {
        tag: "El fundador",
        // TODO: foto real del fundador (public/images/founder.jpg)
        name: "Emmanuel",
        role: "Fundador · MindGod",
        note: "“Monté MindGod porque veía negocios buenos perder trabajos por cosas que una máquina resuelve en segundos. En tu Radiografía hablas conmigo — no con un vendedor.”",
      },
      honest: {
        tag: "Sin humo",
        title: "Cero testimonios inventados.",
        body: "Somos un estudio nuevo con estándares viejos: no publicamos testimonios que no existen ni cifras que no medimos. Publicamos el método, lo garantizamos por escrito y dejamos que los resultados hablen cuando existan — con nombre y apellido.",
      },
      marks: ["Medellín · Colombia", "Sirviendo negocios en todo EE. UU."],
    },
    /*
     * Los casos reales — la continuación directa del bloque "Sin humo":
     * dijimos que los resultados hablarían cuando existieran. Ya existen.
     * StormShield primero: el espejo del cliente objetivo. Cada captura dice
     * la verdad al pie: datos cambiados (Puebleriando, producción con
     * clientes reales) o datos de demostración (StormShield).
     */
    caseStudy: {
      tag: "Casos reales",
      titleA: "Prometimos publicar solo lo real.",
      titleB: "Van dos, y contando.",
      cases: [
        {
          name: "StormShield Roofing",
          handle: "@stormshield_roofing_",
          url: "https://www.instagram.com/stormshield_roofing_",
          desc: "Techos residenciales · Estados Unidos",
          frameLabel: "STORMSHIELD ROOFING CRM · BY MINDGOD",
          summary:
            "StormShield es una empresa de techos en Estados Unidos que vende renovaciones de miles de dólares por trabajo y emplea a decenas de personas cada mes. Nos escogió para construir su CRM a la medida: de lead a techo instalado en un solo sistema.",
          facts: [
            "Pipeline visual de leads: del primer contacto a la inspección y el cierre.",
            "Cada obra con su cuadrilla, sus fechas y su estado de pago.",
            "Presupuestos, agenda de instalaciones, facturación y reportes — sin salir del sistema.",
            "Hecho desde Medellín para una operación en Estados Unidos — mismo horario, trabajo senior.",
          ],
          shotsNote: "Producto real — capturas con datos de demostración.",
          shots: [
            {
              src: "/images/casos/stormshield-panel.png",
              alt: "Dashboard del CRM de StormShield Roofing: leads, obras en curso, valor del pipeline e ingresos",
            },
            {
              src: "/images/casos/stormshield-leads.png",
              alt: "Pipeline de leads del CRM: tarjetas por etapa, de nuevo contacto a inspección agendada",
            },
            {
              src: "/images/casos/stormshield-crew.png",
              alt: "Gestión de cuadrillas del CRM: cada miembro con sus obras activas y disponibilidad",
            },
          ],
          // TODO: palabras TEXTUALES del cliente, con su permiso — hasta
          // entonces el bloque de cita no se muestra. Nunca redactarlas.
          quote: "",
          quoteAuthor: "",
        },
        {
          name: "Puebleriando",
          handle: "@puebleriando",
          url: "https://www.instagram.com/puebleriando",
          desc: "Agencia de viajes",
          frameLabel: "PUEBLERIANDO CRM · POWERED BY MINDGOD",
          summary:
            "Le instalamos a Puebleriando un CRM hecho a la medida de su operación: clientes, viajes, pagos y calendario en un solo panel. Pagado una sola vez, suyo para siempre — cero mensualidades de software de por vida.",
          facts: [
            "Salidas, regresos, pagos vencidos y check-ins de la semana — de un vistazo.",
            "Cada cliente con su viaje, su saldo y su historial en una sola ficha.",
            "Viajes activos con fechas, aerolíneas y estado de pago en tiempo real.",
            "Pago único: el sistema quedó suyo. Cero mensualidades, de por vida.",
          ],
          shotsNote:
            "Producto real, en producción. Nombres y cifras cambiados para proteger los datos de la agencia.",
          shots: [
            {
              src: "/images/casos/puebleriando-panel.png",
              alt: "Panel principal del CRM de Puebleriando: salidas, pagos vencidos, regresos y finanzas del año",
            },
            {
              src: "/images/casos/puebleriando-clientes.png",
              alt: "Vista de clientes del CRM: cada cliente con su viaje, estado y saldo",
            },
            {
              src: "/images/casos/puebleriando-viajes.png",
              alt: "Viajes activos del CRM: destinos, fechas de salida y regreso, estado de pago",
            },
          ],
          // TODO: palabras TEXTUALES del cliente, con su permiso.
          quote: "",
          quoteAuthor: "",
        },
      ],
      ctaLead: "¿Tu negocio necesita el suyo?",
      cta: "Aplica a tu Radiografía",
    },
    faq: {
      tag: "Preguntas directas",
      titleA: "Lo que preguntarías",
      titleB: "antes de escribirnos.",
      items: [
        {
          q: "¿Cuánto cuesta?",
          // TODO: cuando existan precios/rangos reales, ponerlos aquí.
          a: "Menos que el problema. Cada sistema se cotiza sobre tu Radiografía: primero medimos cuánto te cuesta operar a mano y contra ese número ves el precio. Sin costos ocultos y sin mensualidades obligatorias — la Afinación es opcional y solo existe después de instalar.",
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
          a: "No. Nos conectamos a lo que ya usas — WhatsApp, tu calendario, Stripe, QuickBooks, hasta tu Excel. El sistema se adapta a tu forma de trabajar, no al revés.",
        },
        {
          q: "¿Por qué no un freelancer más barato?",
          a: "Puedes — y te hará una página que se queda quieta. Nosotros hacemos sitios web con un sistema de ventas detrás: CRM, agentes de IA, garantía por escrito y medición mensual. Lo barato sale caro cuando cada lead perdido es un trabajo pagado.",
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
      sub: "Tu Radiografía: 30 minutos con el fundador. Sales sabiendo exactamente dónde pierdes tiempo y trabajos — trabajes con nosotros o no.",
      // La escasez verdadera: no hay equipo de ventas detrás, hay una agenda.
      // TODO: cuando exista capacidad mensual definida, aquí va el número.
      capacity: "Las hace el fundador en persona — por eso son pocas al mes",
      namePlaceholder: "Nombre completo",
      businessPlaceholder: "Tu negocio (ej. techos, HVAC, transporte)",
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
    /*
     * Programa de referidos — página propia ("/es/referidos"). El trato es
     * simple y se cumple: 20% de la primera venta, pagado cuando el cliente
     * paga. Mismas reglas de la casa: claro, por escrito, sin humo.
     */
    referrals: {
      meta: {
        title: "Programa de Referidos — Gana el 20% de la venta · MindGod",
        description:
          "¿Conoces un negocio que pierde ventas por operar a mano? Preséntanoslo. Si compra su sistema, el 20% de esa venta es tuyo. Claro y por escrito.",
      },
      tag: "Programa de referidos",
      titleA: "Refiere un negocio.",
      titleB: "Llévate el 20% de la venta.",
      support:
        "Tú conoces al dueño; nosotros hacemos el resto. Si nos presentas una empresa que necesita dejar de operar a mano y termina comprando su sistema, el 20% de esa venta es tuyo. No tienes que vender nada — solo abrir la puerta.",
      steps: [
        {
          number: "01",
          title: "Preséntanos",
          body: "Cuéntanos qué negocio conoces y dónde pierde más. Desde el primer mensaje queda registrado a tu nombre — te lo confirmamos por WhatsApp.",
        },
        {
          number: "02",
          title: "Nosotros vendemos",
          body: "Hacemos la Radiografía y todo el proceso comercial. Tú no persigues a nadie: la venta es trabajo nuestro.",
        },
        {
          number: "03",
          title: "Cobras el 20%",
          body: "Si tu referido compra, te transferimos el 20% de la venta. Nos pagan, te pagamos — así de simple.",
        },
      ],
      deal: {
        tag: "El trato",
        title: "Claro y por escrito.",
        items: [
          "20% del valor de la primera venta: el sistema que el cliente compra e instalamos.",
          "Te pagamos cuando el cliente paga. Si paga por partes, cobras por partes.",
          "Tu referido queda registrado a tu nombre desde el primer mensaje — con confirmación.",
          "Sin límite: refiere todos los negocios que quieras.",
          "Solo cuenta un negocio que no esté ya en conversación con nosotros.",
        ],
      },
      fit: {
        forTitle: "Un buen referido…",
        forItems: [
          "Ya vende y le llegan clientes cada semana.",
          "Pierde trabajos por demoras, olvidos o falta de manos.",
          "Conoces al dueño o a quien decide — puedes presentarnos.",
        ],
        againstTitle: "No cuenta…",
        againstItems: [
          "Un negocio que todavía no tiene clientes.",
          "Alguien que solo busca “una página bonita”.",
          "Una empresa que ya está hablando con nosotros.",
        ],
      },
      form: {
        tag: "Refiere ahora",
        title: "Preséntanos.",
        sub: "Dos minutos. Se abre WhatsApp con tu referido listo — lo envías tú y te confirmamos el registro a tu nombre.",
        namePlaceholder: "Tu nombre",
        businessPlaceholder: "El negocio que refieres (nombre, ciudad o Instagram)",
        bottleneckLabel: "¿Dónde pierde más ese negocio?",
        bottleneckOptions: [
          "Leads sin respuesta",
          "Seguimiento de ventas",
          "Horas en tareas manuales",
          "No estoy seguro — ustedes lo verán en la Radiografía",
        ],
        cta: "Referir por WhatsApp",
        note: "Tú envías el mensaje, sin compromiso. Si tu referido compra, el 20% es tuyo.",
        wa: {
          greeting: "Hola, soy",
          referral: "Quiero referir a",
          bottleneck: "Donde más pierde",
          closing: "Vengo por el programa de referidos (20% de la venta).",
        },
      },
    },
    footer: {
      links: [
        { label: "Sistemas", href: "#sistemas" },
        { label: "Método", href: "#metodo" },
        { label: "Nosotros", href: "#nosotros" },
        { label: "Caso real", href: "#caso" },
        { label: "FAQ", href: "#faq" },
        { label: "Contacto", href: "#contacto" },
        { label: "Referidos", href: "/es/referidos" },
      ],
      location: "© 2026 · Medellín, Colombia",
      tagline: "Del humano a la máquina",
    },
  },
};
