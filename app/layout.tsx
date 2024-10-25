import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Orbitron, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Rexuz | RWA's on Bitcoin",
  description: "Rexuz is a platform that brings Real World Assets to Bitcoin.",
  authors: {
    name: "TokenMinds",
    url: "https://tokenminds.co",
  },
  creator: "TokenMinds",
  keywords: [
    "Rexuz",
    "RWA",
    "Bitcoin",
    "Real World Assets",
    "TokenMinds",
    "Asset Backed",
    "Baal Coin",
    "Baal",
    "Rexuz Coin",
    "Rexuz Token",
    "Rexuz Platform",
    "Rexuz Network",
    "Rexuz Blockchain",
    "Rexuz Cryptocurrency",
    "Rexuz Tokenomics",
    "Rexuz Whitepaper",
    "Rexuz Roadmap",
    "Rexuz Team",
    "Rexuz Community",
    "Rexuz Investors",
    "Rexuz Partners",
    "Rexuz Advisors",
    "Rexuz Developers",
    "Rexuz Governance",
    "Bitcoin RWA",
    "Rexuz RWA",
    "Rexuz Baal",
  ],
  openGraph: {
    title: "Rexuz | RWA's on Bitcoin",
    description:
      "Rexuz is a platform that brings Real World Assets to Bitcoin.",
    url: "https://rexuz.com",
    type: "website",
    images: [
      {
        url: "https://www.rexuz.com/_next/image?url=%2Fimages%2Fchallenge-2.png&w=1920&q=75",
        width: 1920,
        height: 1080,
        alt: "Rexuz Challenge",
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
        className={`${plusJakartaSans.variable} ${orbitron.variable} ${inter.variable} antialiased bg-darkbg`}
      >
        {children}
      </body>
    </html>
  );
}
