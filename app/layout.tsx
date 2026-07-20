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
  title: "MindGod — Websites & AI Sales Systems for Service Businesses",
  description:
    "We build websites that sell — and install CRM + AI agents around them as one system: every lead answered in seconds, every follow-up done, your hours back. Apply for your X-Ray.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  // La imagen OG vive en app/opengraph-image.tsx (y app/es/…): una carta
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
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body className="min-h-full antialiased bg-paper text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
