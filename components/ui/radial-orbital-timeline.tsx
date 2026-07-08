"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";

export interface OrbitalItem {
  id: number;
  title: string;
  tag: string;
  content: string;
  icon: React.ElementType;
  relatedIds: number[];
  impact: number;
  /* dopamine accent (hex) — colors the node, glow, impact bar and card details */
  accent: string;
  featured?: boolean;
}

export interface OrbitalLabels {
  featured: string;
  impact: string;
  related: string;
  cta: string;
}

const DEFAULT_LABELS: OrbitalLabels = {
  featured: "BUQUE INSIGNIA",
  impact: "Nivel de impacto",
  related: "Sistemas conectados",
  cta: "Aplicar",
};

interface RadialOrbitalTimelineProps {
  items: OrbitalItem[];
  labels?: OrbitalLabels;
}

export default function RadialOrbitalTimeline({
  items,
  labels = DEFAULT_LABELS,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [radius, setRadius] = useState<number>(200);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Tighter orbit on small screens so the nodes stay inside the viewport
  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 640 ? 125 : 200);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const newPulseEffect: Record<number, boolean> = {};
        getRelatedItems(id).forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const rotationTimer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(rotationTimer);
  }, [autoRotate]);

  /* rotate the clicked node to the top of the orbit so its card has room below */
  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = items.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / items.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = items.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  return (
    <div
      className="flex h-[560px] w-full flex-col items-center justify-center overflow-hidden md:h-[640px]"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
        <div
          className="absolute flex h-full w-full items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* core — the single objective everything orbits around */}
          <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 via-neutral-500 to-neutral-800">
            <div className="absolute h-20 w-20 animate-ping rounded-full border border-white/25 opacity-70"></div>
            <div
              className="absolute h-24 w-24 animate-ping rounded-full border border-white/10 opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="h-7 w-7 rounded-full bg-paper/90"></div>
          </div>

          {/* orbit ring */}
          <div
            className="absolute rounded-full border border-white/10"
            style={{ width: radius * 2, height: radius * 2 }}
          ></div>

          {items.map((item, index) => {
            const position = calculateNodePosition(index, items.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                className="absolute cursor-pointer transition-all duration-700"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full ${
                    isPulsing ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, ${item.accent}33 0%, ${item.accent}00 70%)`,
                    width: `${item.impact * 0.5 + 40}px`,
                    height: `${item.impact * 0.5 + 40}px`,
                    left: `-${(item.impact * 0.5) / 2}px`,
                    top: `-${(item.impact * 0.5) / 2}px`,
                  }}
                ></div>

                <div
                  className={`flex h-10 w-10 transform items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isExpanded
                      ? "scale-150 text-white"
                      : isRelated
                        ? "animate-pulse"
                        : "bg-paper"
                  }`}
                  style={
                    isExpanded
                      ? {
                          backgroundColor: item.accent,
                          borderColor: item.accent,
                          boxShadow: `0 10px 28px ${item.accent}55`,
                        }
                      : isRelated
                        ? {
                            borderColor: item.accent,
                            backgroundColor: `${item.accent}1a`,
                            color: item.accent,
                          }
                        : { borderColor: `${item.accent}66`, color: item.accent }
                  }
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${
                    isExpanded ? "scale-110" : "text-stone"
                  }`}
                  style={isExpanded ? { color: item.accent } : undefined}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute left-1/2 top-24 w-72 -translate-x-1/2 cursor-default rounded-xl border border-white/15 bg-paper/95 shadow-xl shadow-black/10 backdrop-blur-lg">
                    <div
                      className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2"
                      style={{ backgroundColor: item.accent }}
                    ></div>
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl"
                      style={{
                        background: `linear-gradient(90deg, ${item.accent}, ${item.accent}33)`,
                      }}
                    ></div>
                    <div className="p-5 pb-0">
                      <div className="flex items-center justify-between gap-3">
                        <span className="tag !text-[9px]">{item.tag}</span>
                        {item.featured && (
                          <span
                            className="whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-[0.2em]"
                            style={{ borderColor: item.accent, color: item.accent }}
                          >
                            {labels.featured}
                          </span>
                        )}
                      </div>
                      <h3 className="display mt-3 text-xl text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-5 pt-3 text-xs leading-relaxed text-stone">
                      <p>{item.content}</p>

                      <div className="mt-4 border-t border-white/10 pt-3">
                        <div className="mb-1 flex items-center justify-between text-[11px]">
                          <span className="flex items-center text-stone">
                            <Zap size={10} className="mr-1" />
                            {labels.impact}
                          </span>
                          <span
                            className="font-mono"
                            style={{ color: item.accent }}
                          >
                            {item.impact}%
                          </span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/15">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.impact}%`,
                              background: `linear-gradient(90deg, ${item.accent}, #d4d4d4)`,
                            }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 border-t border-white/10 pt-3">
                          <div className="mb-2 flex items-center">
                            <LinkIcon size={10} className="mr-1 text-stone" />
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">
                              {labels.related}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = items.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <button
                                  key={relatedId}
                                  type="button"
                                  className="flex h-6 items-center border border-white/25 bg-transparent px-2 text-[11px] text-ink/80 transition-all hover:bg-white/10 hover:text-ink"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-stone"
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <a
                        href="#contacto"
                        className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent underline underline-offset-4 transition-opacity hover:opacity-60"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {labels.cta}
                        <ArrowRight size={10} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
