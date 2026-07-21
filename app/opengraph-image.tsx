import { ogCard, ogSize } from "@/lib/og-card";

export const alt =
  "MindGod — From human to machine. Websites and AI sales systems for service businesses.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard("en");
}
