"use client";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/*
 * La escena 3D es lo más pesado de la página (~1MB+ de runtime + escena).
 * No se descarga nada hasta que el visitante se acerca a 600px del bloque:
 * el load inicial queda liviano y el robot igual está listo al llegar.
 */
export function SplineScene({ scene, className }: SplineSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fallback = (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {near ? (
        <Suspense fallback={fallback}>
          <Spline scene={scene} className="h-full w-full" />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
