"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * LiquidButton — adapted from 21st.dev's liquid-glass-button for the MindGod
 * monochrome system: a pill of distorted glass (SVG displacement backdrop)
 * with a layered inset-shadow rim, ink text on porcelain paper.
 */

const GLASS_RIM =
  "shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]";

export function LiquidButton({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-9 text-[15px] font-medium tracking-[-0.01em] text-ink transition duration-300 hover:scale-105 active:scale-[0.98] md:h-14 md:px-11 md:text-base",
        className
      )}
    >
      {/* silver halo behind the glass */}
      <span className="absolute -inset-1 -z-20 rounded-full bg-gradient-to-r from-neutral-400 via-white to-neutral-400 opacity-30 blur-md transition-opacity duration-300 group-hover:opacity-70" />
      {/* glass rim */}
      <span
        className={cn(
          "absolute left-0 top-0 h-full w-full rounded-full transition-all",
          GLASS_RIM
        )}
      />
      {/* refractive body — distorts whatever passes behind the button */}
      <span
        className="absolute left-0 top-0 isolate -z-10 h-full w-full overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#liquid-button-glass")' }}
      />
      <span className="pointer-events-none z-10">{children}</span>
      <LiquidGlassFilter />
    </a>
  );
}

function LiquidGlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="liquid-button-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
