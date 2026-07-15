import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";


import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";


import { TanixProvider } from "@/components/tanix";
import Tanix from "@/components/tanix/Tanix";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fortunaglobalsupplychain.com"),

  title: {
    default: "Fortuna Global Supply Chain Systems",
    template: "%s | Fortuna Global Supply Chain Systems",
  },

  description:
    "AI-powered Supply Chain Platform for Procurement, Warehouse Management, Transportation, Inventory, Manufacturing and Logistics.",

  keywords: [
    "Supply Chain Management",
    "Warehouse Management System",
    "Inventory Management",
    "Procurement Software",
    "Transportation Management",
    "AI Supply Chain",
    "Fortuna",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/logos/favicon.png",
  },

  openGraph: {
    title: "Fortuna Global Supply Chain Systems",
    description:
      "AI-powered Supply Chain Platform for modern enterprises.",
    url: "https://www.fortunaglobalsupplychain.com",
    siteName: "Fortuna Global Supply Chain Systems",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
     <body className="min-h-screen bg-background text-foreground antialiased">
  <TanixProvider>
    <Navbar />

    {children}

    <Footer />

    <ScrollToTop />

    <Tanix />
  </TanixProvider>
</body>
    </html>
  );
}