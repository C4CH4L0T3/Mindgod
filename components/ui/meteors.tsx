/*
 * Meteors — lluvia diagonal de chispas sobre fondo oscuro (patrón Magic UI).
 * Posiciones deterministas (nada de Math.random: SSR y cliente deben
 * coincidir). Puro CSS: cero JS en runtime.
 */
export default function Meteors({ number = 12 }: { number?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {Array.from({ length: number }, (_, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            left: `${(i * 83) % 100}%`,
            top: `${(i * 29) % 40}%`,
            animationDelay: `${((i * 0.61) % 4).toFixed(2)}s`,
            animationDuration: `${(4 + ((i * 1.3) % 4)).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
