"use client";

import { useEffect, useState } from "react";
import { copy, type Lang } from "@/lib/copy";

export default function Navbar({ lang }: { lang: Lang }) {
  const t = copy[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // switching language reloads the page on purpose: it's a different route
  const langHref = lang === "es" ? "/en" : "/";
  const langLabel = lang === "es" ? "EN" : "ES";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-black/8 bg-paper/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="text-[15px] font-semibold tracking-[-0.02em] text-ink"
        >
          MindGod
        </a>

        <nav className="hidden items-center gap-9 md:flex">
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

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={langHref}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            className="font-mono text-[11px] tracking-[0.18em] text-stone transition-colors duration-300 hover:text-ink"
          >
            {langLabel}
          </a>
          <a
            href="#contacto"
            className="inline-flex rounded-full bg-accent px-4.5 py-1.5 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-85"
          >
            {t.cta}
          </a>
        </div>

        {/* mobile */}
        <div className="flex items-center gap-5 md:hidden">
          <a
            href={langHref}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            className="font-mono text-[11px] tracking-[0.18em] text-stone"
          >
            {langLabel}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={lang === "es" ? "Menú" : "Menu"}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`h-px w-4.5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4.5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden border-b border-black/8 bg-paper/90 backdrop-blur-xl transition-[grid-template-rows] duration-400 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-b-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {[...t.links, { label: t.cta, href: "#contacto" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] text-stone transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
