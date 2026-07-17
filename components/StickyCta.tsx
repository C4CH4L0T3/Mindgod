"use client";

import { useEffect, useState } from "react";
import { copy, type Lang } from "@/lib/copy";

/*
 * Sticky CTA — solo móvil. Aparece después del hero y se esconde cuando
 * el formulario de aplicación ya está en pantalla (ahí sobra).
 */
export default function StickyCta({ lang }: { lang: Lang }) {
  const t = copy[lang].hero;
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contacto");
    if (!contact) return;
    const io = new IntersectionObserver(([e]) => setContactVisible(e.isIntersecting));
    io.observe(contact);
    return () => io.disconnect();
  }, []);

  const visible = pastHero && !contactVisible;

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-500 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#contacto"
        data-cta="sticky-mobile"
        className="btn-gradient flex w-full items-center justify-center rounded-full py-3.5 text-[15px] font-medium"
      >
        {t.cta}
      </a>
    </div>
  );
}
