import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
};

export default function Home() {
  return <HomePage lang="es" />;
}
