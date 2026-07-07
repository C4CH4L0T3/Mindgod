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
    <div className="border-y border-black/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
        {t.items.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col gap-3 px-6 py-12 md:px-10 ${
              i > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : ""
            }`}
          >
            <span className="tag !text-[10px]">
              {String(i + 1).padStart(2, "0")} · {t.tag}
            </span>
            <span className="display text-gradient text-2xl md:text-[26px]">
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
