import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import JourneyStorytelling from '@/components/sections/journey-storytelling';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story – Stones Gallery by Dish Impex LLP | Luxury Natural Stone',
  description:
    'Discover the journey of Stones Gallery, a premium natural stone boutique in Jigani, Bangalore. We craft bespoke marble idols, temple sculptures, stone furniture, and luxury interiors from the finest natural stones.',
  keywords: [
    'stones gallery',
    'dish impex llp',
    'natural stone boutique bangalore',
    'stone gallery jigani',
    'luxury marble bangalore',
    'custom temple sculptures',
    'stone furniture manufacturer',
    'marble idol manufacturers india',
  ],
  alternates: {
    canonical: '/pages/our-story',
  },
  openGraph: {
    title: 'Our Story – Stones Gallery | Premium Natural Stone Boutique',
    description:
      'From Jigani to pan-India, explore how Stones Gallery became a trusted name in luxury marble, temple sculptures, and bespoke stone furniture.',
    url: 'https://stonesgallery.in/pages/our-story',
    type: 'website',
    images: [
      {
        url: '/Stonesgallery logo.webp',
        width: 1200,
        height: 630,
        alt: 'Stones Gallery - Luxury Natural Stone Boutique',
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://stonesgallery.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Our Story',
      item: 'https://stonesgallery.in/pages/our-story',
    },
  ],
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story - Stones Gallery',
  description:
    'Stones Gallery by Dish Impex LLP is a design house where personalisation meets luxury. We craft unique statues, idols, wall claddings, home décor, modern arts, temples & inlays from the finest natural stones.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Stones Gallery by Dish Impex LLP',
    url: 'https://stonesgallery.in',
    logo: 'https://stonesgallery.in/Stonesgallery logo.webp',
    foundingLocation: {
      '@type': 'Place',
      name: 'Jigani, Bangalore',
    },
    description:
      'Premium natural stone boutique offering luxury marble, granite, temple sculptures, stone furniture, and custom stone art.',
  },
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />

      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          src="/ourstory.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h1 className="text-white tracking-[0.3em] text-2xl md:text-3xl uppercase">Our Story</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-14 md:py-20">
        <p className="mb-6 text-base leading-7">
          Stones Gallery by Dish Impex LLP is a design house where personalisation meets luxury. Stones Gallery's Natural Stone Boutique offers unique Statutes, Idols, Wall Claddings, Home Decors, Modern-Arts, Temple & Inlays all crafted from finest quality of natural stones. Discover and explore our exclusive collection at Jigani, Bangalore.
        </p>
        <p className="text-base leading-7">
          Work with us to craft timeless spaces and bespoke furniture pieces.
          Explore our collections and projects to see the breadth of work.
        </p>
        <div className="mt-10">
          <Link
            href="/pages/our-collection"
            className="inline-block border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      <JourneyStorytelling />

      <Footer />
      
      <Script id="our-story-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="our-story-about" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutSchema)}
      </Script>
    </main>
  );
}

