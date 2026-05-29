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
    "Premium Ceylon cinnamon cultivator and exporter from Sri Lanka, offering cinnamon sticks, powder, oils, pieces, tea, and toothpicks."
};

export const viewport = {
  themeColor: "#223026", // Dark green theme for the browser tab
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
