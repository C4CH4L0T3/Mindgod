import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
};

export default function Home() {
  return <HomePage lang="en" />;
}
