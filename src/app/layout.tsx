import type { Metadata } from "next";
import "./globals.css";
import SecurityDeterrent from "@/components/SecurityDeterrent";

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
      <body className="bg-primary text-text-primary antialiased">
        <SecurityDeterrent />
        {children}
      </body>
    </html>
  );
}
