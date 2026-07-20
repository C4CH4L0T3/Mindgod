import type { Metadata } from "next";
import ReferralsPage from "@/components/ReferralsPage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.es.referrals.meta.title,
  description: copy.es.referrals.meta.description,
  alternates: {
    canonical: "/es/referidos",
    languages: {
      en: "/referidos",
      es: "/es/referidos",
      "x-default": "/referidos",
    },
  },
};

export default function Referidos() {
  // El <html> raíz declara lang="en"; este wrapper corrige el idioma del
  // contenido para lectores de pantalla y buscadores.
  return (
    <div lang="es">
      <ReferralsPage lang="es" />
    </div>
  );
}
