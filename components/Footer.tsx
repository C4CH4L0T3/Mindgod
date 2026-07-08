import Globe from "@/components/ui/globe";
import { copy, type Lang } from "@/lib/copy";

export default function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang].footer;

  return (
    <footer className="border-t border-white/10 bg-paper">
      {/* el planeta, con Medellín marcada en zafiro — arrástralo */}
      <div className="relative mx-auto flex max-w-6xl justify-center overflow-hidden px-6 pt-16">
        <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] [mask-image:linear-gradient(to_bottom,black_55%,transparent_96%)]">
          <Globe className="h-full w-full" />
        </div>
        <span className="tag pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 !text-[10px]">
          {t.location.replace("© 2026 · ", "")}
        </span>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
            MindGod
          </span>
          <span className="text-[13px] text-stone">{t.location}</span>
        </div>

        <nav className="flex flex-wrap gap-7">
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-stone transition-colors duration-300 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* TODO: agregar redes cuando existan perfiles reales, ej.:
            <a href="https://linkedin.com/company/..." ...>LinkedIn</a>
            <a href="https://instagram.com/..." ...>Instagram</a> */}
      </div>

      <div className="border-t border-white/[0.06] py-6 text-center">
        <span className="tag !text-[10px] opacity-70">{t.tagline}</span>
      </div>
    </footer>
  );
}
