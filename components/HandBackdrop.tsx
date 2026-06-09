"use client";

/**
 * HandBackdrop — the protagonist lives behind the page.
 *
 * A fixed, full-viewport layer holding the hand. One GSAP timeline,
 * scrubbed against the ENTIRE document scroll, evolves it while the
 * content sections pass in front:
 *
 *   hero      → 01 ANATOMÍA       the human hand (drawn on load)
 *   stats     → 02 OBSERVACIÓN    scan line, 21 landmarks ignite
 *   services  → 03 RECONSTRUCCIÓN skeleton + mesh, flesh fades
 *   process   → 04 ENSAMBLAJE     plates, rings, core, circuits
 *   finale    → 05 EMERGENCIA     technology leaves the fingertips
 *
 * A mono HUD in the corners narrates the phases and tracks progress.
 */

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HandScene from "@/components/hero/HandScene";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  { label: "FASE 01 / ANATOMÍA", sub: "Empieza humano." },
  { label: "FASE 02 / OBSERVACIÓN", sub: "La máquina observa." },
  { label: "FASE 03 / RECONSTRUCCIÓN", sub: "Aprende la estructura." },
  { label: "FASE 04 / ENSAMBLAJE", sub: "Se vuelve precisión." },
  { label: "FASE 05 / EMERGENCIA", sub: "Termina inevitable." },
];

function prepDraw(el: SVGGeometryElement) {
  const len = el.getTotalLength();
  el.style.strokeDasharray = `${len}`;
  el.style.strokeDashoffset = `${len}`;
}

export default function HandBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const q = gsap.utils.selector(rootRef);

        q<SVGGeometryElement>(".dr").forEach(prepDraw);

        gsap.set("#vision, #emergence", { autoAlpha: 0 });
        gsap.set(".hero-glow", { autoAlpha: 0 });
        gsap.set(".plate", { fillOpacity: 0 });
        gsap.set(".chip", { autoAlpha: 0 });
        gsap.set(".phase-hud", { autoAlpha: 0 });

        /* ——— intro (time-based): the human hand draws itself ——— */
        const intro = gsap.timeline({ defaults: { ease: "power2.out" } });
        intro
          .to("#organic .dr", {
            strokeDashoffset: 0,
            duration: 2.2,
            stagger: 0.08,
            ease: "power2.inOut",
          })
          .fromTo(".phase-0", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, "-=1.2");

        /* ——— the story, scrubbed across the whole page ——— */
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        const swapPhase = (at: number, out: number, into: number) => {
          tl.to(`.phase-${out}`, { autoAlpha: 0, duration: 0.2 }, at);
          tl.fromTo(
            `.phase-${into}`,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.2 },
            at + 0.18
          );
        };

        /* content arrives — the hand recedes politely but keeps evolving */
        tl.to(".hand-layer", { opacity: 0.45, duration: 0.8 }, 0.7);

        /* — 02 OBSERVACIÓN — */
        tl.set("#vision", { autoAlpha: 1 }, 0.4);
        tl.fromTo("#scan", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 }, 0.45);
        tl.fromTo("#scan", { y: 100 }, { y: 700, duration: 0.9 }, 0.5);
        tl.to("#scan", { autoAlpha: 0, duration: 0.12 }, 1.35);
        tl.to(".lm", { attr: { r: 4 }, duration: 0.15, stagger: 0.035 }, 0.6);
        swapPhase(0.7, 0, 1);
        tl.to("#organic", { opacity: 0.3, duration: 0.7 }, 1.2);

        /* — 03 RECONSTRUCCIÓN — */
        tl.to(".bone", { strokeDashoffset: 0, duration: 0.4, stagger: 0.04 }, 2.2);
        tl.to("#mesh-extra", { opacity: 0.4, duration: 0.6 }, 2.7);
        swapPhase(2.8, 1, 2);
        tl.to("#organic", { opacity: 0, duration: 0.6 }, 2.9);

        /* — 04 ENSAMBLAJE — */
        tl.to(".plate", { strokeDashoffset: 0, duration: 0.5, stagger: 0.04 }, 4.4);
        tl.to(".plate", { fillOpacity: 1, duration: 0.6 }, 4.8);
        tl.to(".ring", { opacity: 0.85, duration: 0.2, stagger: 0.025 }, 4.7);
        tl.to(".lm", { attr: { r: 1.8 }, duration: 0.4 }, 4.7);
        tl.to("#mesh-extra", { opacity: 0.08, duration: 0.5 }, 4.8);
        tl.to("#bones", { opacity: 0.25, duration: 0.5 }, 4.8);
        swapPhase(4.9, 2, 3);
        tl.to("#circuits .dr", { strokeDashoffset: 0, duration: 0.5, stagger: 0.07 }, 5.7);
        tl.fromTo(
          ".core-ring",
          { opacity: 0, scale: 0.4, transformOrigin: "300px 535px" },
          { opacity: 0.9, scale: 1, duration: 0.4, stagger: 0.1 },
          5.9
        );
        tl.fromTo("#core-dot", { opacity: 0 }, { opacity: 1, duration: 0.25 }, 6.2);
        tl.to(".hero-glow", { autoAlpha: 1, duration: 0.8 }, 5.9);

        /* — 05 EMERGENCIA: the hand settles lower; the resolution crowns it — */
        tl.set("#emergence", { autoAlpha: 1 }, 7.2);
        swapPhase(7.3, 3, 4);
        tl.to(
          ".hand-layer",
          {
            opacity: 0.7,
            scale: 0.62,
            yPercent: 15,
            transformOrigin: "50% 50%",
            duration: 0.9,
          },
          7.3
        );
        CHIPS_ORDER.forEach((id, i) => {
          const at = 7.5 + i * 0.25;
          tl.to(`.link-${id}`, { strokeDashoffset: 0, duration: 0.35 }, at);
          tl.fromTo(
            `.chip-${id}`,
            { autoAlpha: 0, scale: 0.3, transformOrigin: "50% 50%" },
            { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power2.out" },
            at + 0.12
          );
        });

        /* contact arrives — the story ends, the hand recedes into ambient */
        tl.to(".hand-layer", { opacity: 0.16, duration: 0.6 }, 9.0);

        /* journey tracker */
        tl.to(".progress-line", { scaleX: 1, duration: 9.6 }, 0.01);
        tl.to(".hud", { autoAlpha: 0, duration: 0.3 }, 9.7);
        tl.to({}, { duration: 0.3 });

        return () => intro.kill();
      }, rootRef);

      return () => ctx.revert();
    });

    /* reduced motion: the ending, quietly present */
    mm.add("(prefers-reduced-motion: reduce)", () => {
      const ctx = gsap.context(() => {
        gsap.set("#organic, #scan, .phase-hud", { autoAlpha: 0 });
        gsap.set("#vision, #emergence, .hero-glow", { autoAlpha: 1 });
        gsap.set(".hand-layer", { opacity: 0.3 });
        gsap.set(".dr", { strokeDashoffset: 0 });
        gsap.set(".plate", { fillOpacity: 1 });
        gsap.set(".lm", { attr: { r: 1.8 } });
        gsap.set(".ring", { opacity: 0.85 });
        gsap.set(".core-ring, #core-dot", { opacity: 0.9 });
        gsap.set(".chip", { autoAlpha: 1 });
        gsap.set(".phase-4", { autoAlpha: 1 });
      }, rootRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* atmosphere — ignites with the core */}
      <div
        className="hero-glow absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 38% at 50% 54%, rgba(0,0,0,0.04), transparent 70%)",
        }}
      />

      {/* the hand */}
      <div className="hand-layer flex h-full w-full items-center justify-center pt-[10vh]">
        <div className="flex h-[70vh] items-center justify-center">
          <HandScene />
        </div>
      </div>

      {/* HUD — the machine narrating its own progress */}
      <div className="hud">
        <div className="absolute bottom-7 left-6 md:left-10">
          {PHASES.map((p, i) => (
            <div key={i} className={`phase-hud phase-${i} absolute bottom-0 left-0 w-56`}>
              <span className="tag block whitespace-nowrap !text-[10px]">{p.label}</span>
              <span className="display mt-1.5 block whitespace-nowrap text-[15px] italic text-ink/80">
                {p.sub}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 right-6 h-px w-28 bg-black/10 md:right-10 md:w-40">
          <div className="progress-line h-full w-full origin-left scale-x-0 bg-ink/50" />
        </div>
      </div>
    </div>
  );
}

const CHIPS_ORDER = ["react", "next", "ts", "ia", "tailwind", "node"];
