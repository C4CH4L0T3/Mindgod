import { copy, type Lang } from "@/lib/copy";

/*
 * Las tres fugas — el costo de seguir vendiendo a mano.
 *
 * Reemplaza al viejo StatsBar de cifras count-up: sin métricas reales de
 * clientes no publicamos números. Cuando existan, este strip los recupera.
 */
/* pérdida en colores cálidos: rosa → naranja → ámbar (aversión a la pérdida) */
const leakColors = ["#f43f5e", "#f97316", "#f59e0b"];

export default function Leaks({ lang }: { lang: Lang }) {
  const t = copy[lang].leaks;

  return (
    <div className="border-y border-black/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
        {t.items.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col gap-3 px-6 py-12 md:px-10 ${
              i > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : ""
            }`}
            style={{ boxShadow: `inset 0 3px 0 ${leakColors[i]}` }}
          >
            <span
              className="tag !text-[10px]"
              style={{ color: leakColors[i] }}
            >
              {String(i + 1).padStart(2, "0")} · {t.tag}
            </span>
            <span
              className="display text-2xl md:text-[26px]"
              style={{ color: leakColors[i] }}
            >
              {item.title}
            </span>
            <span className="text-[14px] leading-relaxed text-stone">
              {item.body}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
