import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Fortuna Global Supply Chain Systems",
  description: "AI Powered Supply Chain Platform",
  icons: {
    icon: "/images/logos/favicon.png",
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

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Global Footer */}
        <Footer />

        {/* Scroll To Top */}
        <ScrollToTop />

      </body>
    </html>
  );
}