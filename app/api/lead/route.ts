/*
 * Red de seguridad de leads.
 *
 * El formulario abre WhatsApp con el mensaje listo — pero si el visitante
 * no llega a darle enviar (popup bloqueado, se arrepintió, WhatsApp Web
 * sin sesión), el lead se evaporaba sin dejar rastro. Ahora cada aplicación
 * se registra AQUÍ antes de abrir WhatsApp: no se pierde ninguna.
 *
 * Destino: LEAD_WEBHOOK_URL (env) — un webhook de n8n, Make o Google Apps
 * Script, las mismas herramientas que instalamos. Sin la variable, el lead
 * queda al menos en los logs de Vercel.
 */

type Lead = {
  type?: unknown;
  name?: unknown;
  business?: unknown;
  bottleneck?: unknown;
  lang?: unknown;
};

const asText = (v: unknown, max = 200) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const body: Lead | null = await req.json().catch(() => null);
  const name = asText(body?.name);
  if (!name) return new Response(null, { status: 400 });

  const lead = {
    // "lead" = aplicación a Radiografía; "referral" = programa de referidos
    // (name es quien refiere, business es el negocio referido)
    type: asText(body?.type, 20) === "referral" ? "referral" : "lead",
    name,
    business: asText(body?.business),
    bottleneck: asText(body?.bottleneck),
    lang: asText(body?.lang, 5) || "en",
    at: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // el lead no se pierde: queda en logs aunque el webhook falle
      console.error("[lead] webhook failed", err, lead);
    }
  } else {
    console.log("[lead]", JSON.stringify(lead));
  }

  return new Response(null, { status: 204 });
}
