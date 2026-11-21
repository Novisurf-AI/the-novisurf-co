import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistSerif } from "geist/font/serif";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novisurf Co",
  description:
    "Novisurf operates HeySurf, the most intelligent personal assistant — a personal intelligence that thinks ahead.",
  openGraph: {
    title: "Novisurf Co",
    description: "Novisurf operates HeySurf, the most intelligent personal assistant.",
    siteName: "Novisurf Co",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistSerif.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
