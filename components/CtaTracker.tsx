"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import type { Lang } from "@/lib/copy";

/*
 * Medición del embudo — un solo listener global en vez de tocar cada CTA.
 *
 * Todo botón de aplicar apunta a "#contacto"; aquí capturamos el clic y
 * registramos DESDE DÓNDE vino (sección más cercana, navbar o data-cta).
 * Con eso el dashboard responde la pregunta que importa: ¿qué sección
 * empuja a la gente a aplicar y cuál es puro paisaje?
 */
export default function CtaTracker({ lang }: { lang: Lang }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href$="#contacto"]');
      if (!anchor) return;
      const placement =
        anchor.dataset.cta ??
        anchor.closest("section")?.id ??
        (anchor.closest("header") ? "navbar" : "unknown");
      track("apply_intent", { placement, lang });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [lang]);

  return null;
}
