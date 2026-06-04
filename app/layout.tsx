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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ceyloncinnamon.com'),
  title: {
    default: "Ceylon Cinnamon Company | Finest Ceylon Cinnamon Exporter",
    template: "%s | Ceylon Cinnamon Company"
  },
  description:
    "Premium Ceylon cinnamon cultivator and exporter from Sri Lanka, offering cinnamon sticks, powder, oils, pieces, tea, and toothpicks.",
  keywords: [
    "Ceylon cinnamon", 
    "cinnamon sticks", 
    "cinnamon powder", 
    "cinnamon oil", 
    "Sri Lanka cinnamon export", 
    "true cinnamon",
    "pure ceylon cinnamon"
  ],
  openGraph: {
    title: "Ceylon Cinnamon Company | Finest Ceylon Cinnamon Exporter",
    description: "Premium Ceylon cinnamon cultivator and exporter from Sri Lanka, offering cinnamon sticks, powder, oils, pieces, tea, and toothpicks.",
    url: "/",
    siteName: "Ceylon Cinnamon Company",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon_io/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Ceylon Cinnamon Company Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceylon Cinnamon Company | Finest Ceylon Cinnamon Exporter",
    description: "Premium Ceylon cinnamon cultivator and exporter from Sri Lanka, offering cinnamon sticks, powder, oils, pieces, tea, and toothpicks.",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ]
  },
  manifest: "/favicon_io/site.webmanifest"
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
