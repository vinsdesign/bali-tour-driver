import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bali Private Driver",
  description:
    "Private driver and Bali guide service for airport transfer, tours, and custom trips in Bali.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
