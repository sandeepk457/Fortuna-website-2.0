import type { Metadata } from "next";

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