import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { client } from "@/config/client";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: client.metaTitle,
  description: client.metaDescription,
  openGraph: {
    title: client.metaTitle,
    description: client.metaDescription,
    type: "website",
    locale: "en_GB",
    siteName: client.name,
  },
  twitter: {
    card: "summary_large_image",
    title: client.metaTitle,
    description: client.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
