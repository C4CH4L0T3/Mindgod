import Reveal from "@/components/Reveal";
import { Glyph } from "@/components/hero/HandScene";
import {
  GlassButton,
  GlassDock,
  GlassFilter,
  type DockItem,
} from "@/components/ui/liquid-glass";

/**
 * Hero — the opening frame. The hand (HandBackdrop) lives behind this;
 * liquid-glass elements float in front, refracting the ink drawing.
 */

const dockItems: DockItem[] = [
  { label: "React", node: <DockGlyph id="react" /> },
  { label: "Next.js", node: <DockGlyph id="next" /> },
  { label: "TypeScript", node: <DockGlyph id="ts" /> },
  { label: "Tailwind", node: <DockGlyph id="tailwind" /> },
  { label: "Node.js", node: <DockGlyph id="node" /> },
  { label: "IA aplicada", node: <DockGlyph id="ia" /> },
];

function DockGlyph({ id }: { id: string }) {
  return (
    <svg viewBox="-20 -20 40 40" className="h-9 w-9 md:h-10 md:w-10" aria-hidden="true">
      <Glyph id={id} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen flex-col items-center">
      <GlassFilter />

      <div className="pt-[13vh] text-center">
        <Reveal>
          <p className="tag mb-6">Agencia de IA · Medellín</p>
          <h1 className="display text-[clamp(44px,6.5vw,88px)] leading-[1.02] text-ink">
            Empieza <em>humano</em>.
          </h1>
          <p className="mt-5 text-[clamp(14px,1.4vw,18px)] text-stone">
            Todo lo que vale la pena empieza con una mano.
          </p>
        </Reveal>
      </div>

      {/* liquid glass floating over the hand */}
      <div className="absolute bottom-[16vh] left-1/2 flex -translate-x-1/2 flex-col items-center gap-5">
        <Reveal delay={250}>
          <GlassDock items={dockItems} />
        </Reveal>
        <Reveal delay={400}>
          <GlassButton href="#contacto">
            <p className="whitespace-nowrap text-[15px] text-ink md:text-base">
              ¿Cómo te ayudamos hoy?
            </p>
          </GlassButton>
        </Reveal>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="tag">Desliza</span>
        <div className="h-9 w-px overflow-hidden bg-black/10">
          <div className="hint-line h-full w-full bg-ink/60" />
        </div>
      </div>
    </section>
  );
}
