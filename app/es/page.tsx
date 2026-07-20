import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
};

export default function HomeEs() {
  // El <html> raíz declara lang="en"; este wrapper corrige el idioma del
  // contenido para lectores de pantalla y buscadores.
  return (
    <div lang="es">
      <HomePage lang="es" />
    </div>
  );
}
