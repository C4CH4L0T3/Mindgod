import { copy, type Lang } from "@/lib/copy";

/*
 * Las tres fugas — el costo de seguir vendiendo a mano.
 *
 * Reemplaza al viejo StatsBar de cifras count-up: sin métricas reales de
 * clientes no publicamos números. Cuando existan, este strip los recupera.
 */
export default function Leaks({ lang }: { lang: Lang }) {
  const t = copy[lang].leaks;

  return (
    <div className="border-y border-white/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
        {t.items.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col gap-3 px-6 py-12 md:px-10 ${
              i > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
            }`}
          >
            {/* una sola señal de pérdida: oxblood, profunda — duele sin gritar */}
            <span className="tag !text-[10px] !text-rose">
              {String(i + 1).padStart(2, "0")} · {t.tag}
            </span>
            <span className="display text-2xl text-ink md:text-[26px]">
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
