import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Chatbot from "@/components/Chatbot";
import Script from "next/script";
import { seoKeywords, panIndiaCities, bengaluruHubs } from "@/lib/seo-keywords";

const siteUrl = "https://stonesgallery.in";
const servedLocations = Array.from(
  new Set([
    "Bengaluru",
    "Jigani",
    ...bengaluruHubs,
    ...panIndiaCities.flatMap((region) => region.cities),
  ])
);

const offerCatalog = [
  "Italian marble supply & installation",
  "Granite slabs, dining tables, and countertops",
  "Temple sculptures, marble idols, and custom murtis",
  "Exterior stone cladding & façade systems",
  "Custom stone furniture & garden artifacts",
  "Online marble & granite procurement India",
  "Export logistics for premium stone lots",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#stonesgallery`,
  name: "Stones Gallery by Dish Impex LLP",
  url: siteUrl,
  image: `${siteUrl}/Stonesgallery logo.webp`,
  description:
    "Dish Impex LLP (Stones Gallery) supplies luxury marble, granite, quartzite, temple sculptures, and custom stone furniture for premium homes and commercial projects across Bengaluru, Delhi NCR, Mumbai, Jaipur, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Kochi, and pan-India digital buyers.",
  telephone: "+91-9876543210",
  email: "sales@stonesgallery.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jigani Industrial Area",
    addressLocality: "Bengaluru",
    postalCode: "560105",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.7820",
    longitude: "77.6460",
  },
  sameAs: [
    "https://www.instagram.com/miraclestonex24/",
    "https://in.pinterest.com/NIVASA_HOME/",
    "https://m.facebook.com/NivasaHome/",
  ],
  areaServed: servedLocations,
  makesOffer: offerCatalog,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Stones Gallery",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stones Gallery – Luxury Marble, Granite & Sculptures Pan-India",
    template: "%s | Stones Gallery",
  },
  description:
    "Dish Impex LLP (StonesGallery.in) curates Italian marble, premium granite, temple sculptures, stone furniture, and façade systems for architects, builders, and homeowners across Bengaluru, Delhi NCR, Mumbai, Jaipur, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Kochi, and pan-India export projects.",
  keywords: seoKeywords,
  applicationName: "Stones Gallery",
  category: "Architecture, Interior Design, Construction Supplies",
  authors: [{ name: "Dish Impex LLP" }],
  creator: "Dish Impex LLP",
  publisher: "Stones Gallery",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: { en: siteUrl },
  },
  openGraph: {
    title: "Stones Gallery – Luxury Marble, Granite & Sculptures",
    description:
      "Explore handcrafted marble, granite slabs, temple sculptures, and premium stone interiors from Stones Gallery for Bengaluru, Delhi NCR, Mumbai, Jaipur, Hyderabad, Chennai, Pune, Ahmedabad, and pan-India projects.",
    url: siteUrl,
    siteName: "Stones Gallery",
    images: [
      {
        url: "/Stonesgallery logo.webp",
        width: 1200,
        height: 630,
        alt: "Stones Gallery premium stones display",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stones Gallery – Natural Stone Experts",
    description:
      "Granite, marble, quartzite, temple sculptures, and custom stone furniture supplied by Dish Impex LLP across Bengaluru and every major Indian metro.",
    images: ["/Stonesgallery logo.webp"],
    creator: "@stonesgallery",
    site: "@stonesgallery",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script id="stonesgallery-localbusiness" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script id="stonesgallery-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Chatbot />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
