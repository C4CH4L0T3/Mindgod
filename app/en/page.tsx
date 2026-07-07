import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
};

export default function HomeEn() {
  // El <html> raíz declara lang="es"; este wrapper corrige el idioma del
  // contenido para lectores de pantalla y buscadores.
  return (
    <div lang="en">
      <HomePage lang="en" />
    </div>
  );
}
