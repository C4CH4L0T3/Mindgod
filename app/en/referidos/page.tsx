import type { Metadata } from "next";
import ReferralsPage from "@/components/ReferralsPage";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.en.referrals.meta.title,
  description: copy.en.referrals.meta.description,
  alternates: {
    canonical: "/en/referidos",
    languages: {
      es: "/referidos",
      en: "/en/referidos",
      "x-default": "/referidos",
    },
  },
};

export default function Referrals() {
  return <ReferralsPage lang="en" />;
}
