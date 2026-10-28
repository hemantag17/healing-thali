import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healing Thali \u00b7 Vegetarian Postpartum Recovery Guide (C-Section & Normal Delivery)",
  description:
    "A free, science-backed vegetarian recovery and nutrition guide for Indian mothers — after a C-section or a normal delivery. Built on ICMR-NIN 2020, WHO and ERAS Society evidence \u2014 no myths, no products, no tracking.",
  keywords: [
    "C-section recovery",
    "normal delivery recovery",
    "postpartum diet India",
    "vegetarian postpartum nutrition",
    "Indian mother recovery",
    "evidence-based postpartum care",
    "lactation nutrition",
  ],
  icons: {
    icon: "/thali.svg",
  },
  openGraph: {
    title: "Healing Thali \u00b7 Vegetarian Postpartum Recovery Guide",
    description:
      "Science-backed vegetarian recovery guide for Indian mothers after a C-section or normal delivery \u2014 phases, food lists, myth verdicts and a printable fridge sheet.",
    siteName: "Healing Thali",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f7a72",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
