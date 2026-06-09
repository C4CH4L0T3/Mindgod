const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
            MindGod
          </span>
          <span className="text-[13px] text-stone">
            © 2026 · Medellín, Colombia
          </span>
        </div>

        <nav className="flex flex-wrap gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-stone transition-colors duration-300 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone transition-colors duration-300 hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone transition-colors duration-300 hover:text-ink"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-black/[0.06] py-6 text-center">
        <span className="tag !text-[10px] opacity-70">
          De la mano a la máquina
        </span>
      </div>
    </footer>
  );
}
