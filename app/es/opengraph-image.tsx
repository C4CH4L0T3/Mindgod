import { ogCard, ogSize } from "@/lib/og-card";

export const alt =
  "MindGod — Del humano a la máquina. Sistemas de venta autónomos con IA para negocios de servicios.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard("es");
}
