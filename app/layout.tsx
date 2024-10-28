import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Orbitron, Inter, Michroma } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/layouts/aosinit";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Rexus | RWA's on Bitcoin",
  description:
    "Rexus is a platform that brings Real World Assets to Bitcoin, making it easy for businesses to turn physical assets into digital tokens. With secure management, automated processes, and Bitcoin’s transparent infrastructure, Rexus helps partners issue, track, and manage their assets effortlessly.",
  authors: {
    name: "TokenMinds",
    url: "https://tokenminds.co",
  },
  creator: "TokenMinds",
  publisher: "TokenMinds",
  keywords: [
    "Rexus",
    "RWA",
    "Bitcoin",
    "Real World Assets",
    "TokenMinds",
    "Asset Backed",
    "Baal Coin",
    "Baal",
    "Rexus Coin",
    "Rexus Token",
    "Rexus Platform",
    "Rexus Network",
    "Rexus Blockchain",
    "Rexus Cryptocurrency",
    "Rexus Tokenomics",
    "Rexus Whitepaper",
    "Rexus Roadmap",
    "Rexus Team",
    "Rexus Community",
    "Rexus Investors",
    "Rexus Partners",
    "Rexus Advisors",
    "Rexus Developers",
    "Rexus Governance",
    "Bitcoin RWA",
    "Rexus RWA",
    "Rexus Baal",
  ],
  openGraph: {
    title: "Rexus | RWA's on Bitcoin",
    description:
      "Rexus is a platform that brings Real World Assets to Bitcoin, making it easy for businesses to turn physical assets into digital tokens. With secure management, automated processes, and Bitcoin’s transparent infrastructure, Rexus helps partners issue, track, and manage their assets effortlessly.",
    url: "https://Rexus.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/challenge-1.png",
        width: 1920,
        height: 1080,
        alt: "Rexus Challenge",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${orbitron.variable} ${inter.variable} ${michroma.variable} antialiased bg-darkbg`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
