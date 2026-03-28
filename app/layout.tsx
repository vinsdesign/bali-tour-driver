import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Made Surya | Private Driver & Bali Tour Guide",
  description:
    "Private driver and Bali tour guide service for airport transfer, Bali tours, and custom private trips with Toyota Innova Reborn.",
  keywords: [
    "Bali private driver",
    "Bali tour guide",
    "airport transfer Bali",
    "Innova Reborn Bali driver",
    "private driver Bali",
  ],
  openGraph: {
    title: "Made Surya | Private Driver & Bali Tour Guide",
    description:
      "Comfortable and reliable private driver service in Bali for airport pickup, family trips, and tours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made Surya | Private Driver & Bali Tour Guide",
    description: "Comfortable and reliable private driver service in Bali.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
