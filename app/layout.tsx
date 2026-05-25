import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500"]
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["300", "400"]
});

export const metadata: Metadata = {
  title: "Ceylon Cinnamon Company | Finest Ceylon Cinnamon Exporter",
  description:
    "Premium Ceylon cinnamon cultivator and exporter from Sri Lanka, specializing in authentic whole and ground Ceylon cinnamon."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} ${notoSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
