"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/*
 * Globe — un planeta 3D real (cobe v2, ~5kb WebGL) con Medellín marcada en
 * zafiro y arcos de conexión hacia LatAm y el mundo. Gira solo, se puede
 * arrastrar, y no bloquea nada: corre en su canvas a 60fps.
 */

const MEDELLIN: [number, number] = [6.2442, -75.5812];

export default function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let phi = 4.2; // arranca mirando a América
    let width = canvas.offsetWidth;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.2,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 14000,
      mapBrightness: 5,
      baseColor: [0.94, 0.94, 0.93],
      markerColor: [29 / 255, 78 / 255, 216 / 255],
      glowColor: [0.92, 0.92, 0.9],
      markers: [{ location: MEDELLIN, size: 0.09 }],
      // desde Medellín hacia el mundo
      arcs: [
        { from: MEDELLIN, to: [19.4326, -99.1332] }, // CDMX
        { from: MEDELLIN, to: [-34.6037, -58.3816] }, // Buenos Aires
        { from: MEDELLIN, to: [25.7617, -80.1918] }, // Miami
        { from: MEDELLIN, to: [40.4168, -3.7038] }, // Madrid
      ],
      arcColor: [29 / 255, 78 / 255, 216 / 255],
    });

    let raf = 0;
    const loop = () => {
      if (!reduce && pointerInteracting.current === null) {
        phi += 0.0035;
      }
      globe.update({
        phi: phi + pointerMovement.current,
        width: width * 2,
        height: width * 2,
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerMovement.current;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerMove={(e) => {
        if (pointerInteracting.current !== null) {
          pointerMovement.current =
            (e.clientX - pointerInteracting.current) / 200;
        }
      }}
      className={className}
      style={{ cursor: "grab", contain: "layout paint size", aspectRatio: "1" }}
    />
  );
}
