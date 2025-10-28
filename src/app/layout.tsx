import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Stones Gallery - Premium Natural Stones & Construction Materials",
  description: "Explore Stones Gallery for the finest selection of natural stones, marble, granite, and construction materials. Quality craftsmanship, competitive prices, and expert services. Visit stonesgallery.in today!",
  keywords: "stones gallery, natural stones, marble, granite, construction materials, stone suppliers, premium stones, stonesgallery.in",
  authors: [{ name: "Stones Gallery" }],
  creator: "Stones Gallery",
  publisher: "Stones Gallery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stonesgallery.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stones Gallery - Premium Natural Stones & Construction Materials",
    description: "Discover exquisite stone collections at Stones Gallery. We offer high-quality stones for construction, decoration, and more.",
    url: "https://stonesgallery.in",
    siteName: "Stones Gallery",
    images: [
      {
        url: "/Stonesgallery logo.webp",
        width: 1200,
        height: 630,
        alt: "Stones Gallery Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stones Gallery - Premium Natural Stones & Construction Materials",
    description: "Discover exquisite stone collections at Stones Gallery. We offer high-quality stones for construction, decoration, and more.",
    images: ["/Stonesgallery logo.webp"],
    creator: "@stonesgallery",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
