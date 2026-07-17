import type { Metadata } from "next";
import ReferralsPage from "@/components/ReferralsPage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.es.referrals.meta.title,
  description: copy.es.referrals.meta.description,
  alternates: {
    canonical: "/referidos",
    languages: {
      es: "/referidos",
      en: "/en/referidos",
      "x-default": "/referidos",
    },
  },
};

export default function Referidos() {
  return <ReferralsPage lang="es" />;
}
