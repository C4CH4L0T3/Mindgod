import { ImageResponse } from "next/og";
import type { Lang } from "@/lib/copy";

/*
 * La carta OG — la primera impresión del sitio viaja por WhatsApp.
 *
 * Antes el link compartido mostraba el logo pelado; ahora muestra la
 * promesa en colores de la casa. Render en el edge vía next/og, un
 * archivo por idioma (app/opengraph-image.tsx y app/en/…) que llama aquí.
 */

export const ogSize = { width: 1200, height: 630 };

const texts: Record<
  Lang,
  { badge: string; tagline: string; promise: string; place: string }
> = {
  es: {
    badge: "SISTEMA EN LÍNEA · RESPONDE EN <60 S",
    tagline: "Del humano a la máquina",
    promise: "Sitio, CRM y agentes de IA instalados como un solo sistema de ventas.",
    place: "MEDELLÍN · COLOMBIA",
  },
  en: {
    badge: "SYSTEM ONLINE · REPLIES IN <60 S",
    tagline: "From human to machine",
    promise: "Site, CRM, and AI agents installed as one sales system.",
    place: "MEDELLÍN · COLOMBIA",
  },
};

export function ogCard(lang: Lang) {
  const t = texts[lang];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0b0b0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* profundidad ambiental — los mismos blobs del hero */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(59,130,246,0.22), rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.2), rgba(139,92,246,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#10b981",
            }}
          />
          <div style={{ fontSize: 20, letterSpacing: 4, color: "#a3a399" }}>
            {t.badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 150,
              fontWeight: 700,
              letterSpacing: -6,
              lineHeight: 1,
              backgroundImage:
                "linear-gradient(100deg, #f4f4f0 30%, #3b82f6 70%, #8b5cf6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            MindGod
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 44,
              fontStyle: "italic",
              color: "#f4f4f0",
            }}
          >
            {t.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 26, color: "#a3a399", maxWidth: 760, lineHeight: 1.4 }}>
            {t.promise}
          </div>
          <div style={{ fontSize: 19, letterSpacing: 4, color: "#75756d" }}>
            {t.place}
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
