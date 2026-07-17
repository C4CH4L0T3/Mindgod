import type { Metadata } from "next";
import { preconnect } from "react-dom";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindgod.vercel.app"),
  title: "MindGod — Del humano a la máquina",
  description:
    "Agencia de inteligencia artificial en Medellín. CRM a medida, páginas que venden y automatización con IA para que ningún cliente se quede sin respuesta — y tú recuperes tus horas.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  // La imagen OG vive en app/opengraph-image.tsx (y app/en/…): una carta
  // diseñada con la promesa — lo que se ve al compartir el link por WhatsApp.
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // los orígenes externos abren conexión desde el primer byte
  preconnect("https://cdn.simpleicons.org");
  preconnect("https://prod.spline.design");
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body className="min-h-full antialiased bg-paper text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
