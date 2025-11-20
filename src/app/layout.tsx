import type { Metadata } from "next";
import { Rajdhani, Outfit } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAKING LAUNCHES AS ROUTINE AS RIDES",
  description: "100% Reusable. Sub-$1,200/kg. Weekly Cadence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${outfit.variable} bg-cosmic-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
