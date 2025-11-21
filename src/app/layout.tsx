import type { Metadata } from "next";
import { Rajdhani, Outfit } from "next/font/google";
import "./globals.css";
import SecurityDeterrent from "@/components/SecurityDeterrent";

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
  title: "COSMIC BLUE",
  description: "Making space accessible for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${outfit.variable} bg-cosmic-black text-white antialiased`}>
        <SecurityDeterrent />
        {children}
      </body>
    </html>
  );
}
