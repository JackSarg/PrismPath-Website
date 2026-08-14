import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prismpath.jacksarg.com"),
  title: "PrismPath — Stable XPath Selectors for Blue Prism",
  description:
    "Generate, verify, save, and retest stable XPath selectors for Blue Prism browser automation—entirely on your machine.",
  icons: {
    icon: "/prismpath-icon.png",
    shortcut: "/prismpath-icon.png",
  },
  openGraph: {
    title: "PrismPath XPath Assistant",
    description: "A stronger path to stable selectors for Blue Prism browser automation.",
    type: "website",
    images: [{ url: "/prismpath-promo.png", width: 1400, height: 560, alt: "PrismPath XPath Assistant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrismPath XPath Assistant",
    description: "Generate, verify, save, and retest stable XPath selectors.",
    images: ["/prismpath-promo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
