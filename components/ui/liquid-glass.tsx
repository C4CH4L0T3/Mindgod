"use client";

/**
 * Liquid glass — adapted from 21st.dev (suraj-xd/liquid-glass) for the
 * MindGod monochrome system: light-theme glass tuned for porcelain paper,
 * refracting the ink hand drawing that lives behind the page.
 */

import React from "react";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

const SPRING = "cubic-bezier(0.175, 0.885, 0.32, 2.2)";

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_self",
}) => {
  const glassStyle: React.CSSProperties = {
    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 0, 0, 0.06)",
    transitionTimingFunction: SPRING,
    ...style,
  };

  const content = (
    <div
      className={`relative flex cursor-pointer overflow-hidden font-medium text-ink transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* glass layers: refraction → tint → bevel highlight */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-[inherit]"
        style={{ background: "rgba(255, 255, 255, 0.3)" }}
      />
      <div
        className="absolute inset-0 z-20 overflow-hidden rounded-[inherit]"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.65), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.45), inset 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
      />

      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export interface DockItem {
  label: string;
  node: React.ReactNode;
  href?: string;
}

export const GlassDock: React.FC<{ items: DockItem[] }> = ({ items }) => (
  <GlassEffect className="rounded-3xl p-2.5 hover:rounded-4xl hover:p-3.5">
    <div className="flex items-center justify-center gap-1 px-1">
      {items.map((it) => (
        <div
          key={it.label}
          title={it.label}
          aria-label={it.label}
          className="flex h-12 w-12 items-center justify-center transition-transform duration-700 hover:scale-110 md:h-14 md:w-14"
          style={{ transformOrigin: "center center", transitionTimingFunction: SPRING }}
        >
          {it.node}
        </div>
      ))}
    </div>
  </GlassEffect>
);

export const GlassButton: React.FC<{
  children: React.ReactNode;
  href?: string;
}> = ({ children, href }) => (
  <GlassEffect
    href={href}
    className="rounded-3xl px-9 py-4 hover:rounded-4xl hover:px-10 hover:py-5"
  >
    <div
      className="transition-all duration-700 hover:scale-95"
      style={{ transitionTimingFunction: SPRING }}
    >
      {children}
    </div>
  </GlassEffect>
);

/* SVG displacement filter that gives the glass its liquid refraction */
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
