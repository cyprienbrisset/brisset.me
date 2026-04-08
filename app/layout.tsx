import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { JungleBackground } from "@/components/JungleBackground";
import { Vines } from "@/components/Vines";
import { ScrollSnake } from "@/components/ScrollSnake";
import { ScrollScene } from "@/components/ScrollScene";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://brisset.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cyprien Brisset — Développeur indépendant",
    template: "%s · Cyprien Brisset",
  },
  description:
    "Je conçois des logiciels qu'on oublie. Développeur indépendant, je conçois et j'accompagne vos projets web, desktop et mobile — de l'idée au déploiement.",
  keywords: [
    "développeur indépendant",
    "freelance",
    "Next.js",
    "Rust",
    "Tauri",
    "TypeScript",
    "open source",
    "France",
  ],
  authors: [{ name: "Cyprien Brisset", url: SITE_URL }],
  creator: "Cyprien Brisset",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Cyprien Brisset",
    title: "Cyprien Brisset — Développeur indépendant",
    description:
      "Je conçois des logiciels qu'on oublie. Tant ils sont rapides, fiables et bien pensés.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cyprien Brisset" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprien Brisset — Développeur indépendant",
    description: "Je conçois des logiciels qu'on oublie.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#081A0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <JungleBackground />
        <Vines />
        <ScrollSnake />
        <Header />
        <main>{children}</main>
        <ScrollScene />
      </body>
    </html>
  );
}
