import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Projects – Luxury Stone Installations | Stones Gallery',
  description:
    'View completed luxury residential and commercial stone projects by Stones Gallery. From marble foyers to temple installations, see our craftsmanship in action across Bangalore and India.',
  keywords: [
    'stone projects bangalore',
    'marble installation projects',
    'luxury villa stone work',
    'temple installation projects',
    'granite projects india',
    'commercial stone projects',
    'residential stone interiors',
  ],
  alternates: {
    canonical: '/pages/our-projects',
  },
  openGraph: {
    title: 'Our Projects – Completed Stone Installations | Stones Gallery',
    description:
      'Explore our portfolio of luxury marble, granite, and temple sculpture installations across residential and commercial projects.',
    url: 'https://stonesgallery.in/pages/our-projects',
    type: 'website',
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
      name: 'Our Projects',
      item: 'https://stonesgallery.in/pages/our-projects',
    },
  ],
};

const projects = [
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_projects-42_1950x.jpg?v=1730018553',
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/collections-17_1950x.jpg?v=1707587292',
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_collections_banner-26_1950x.jpg?v=1707587426',
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_projects-16_1950x.jpg?v=1730018553',
];

export default function OurProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />
      <section className="mx-auto max-w-[1200px] px-5 pt-10 md:pt-16">
        <h1 className="mb-8 text-center text-2xl uppercase tracking-[0.25em] text-[#333]">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image src={src} alt="Project" fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
      
      <Script id="our-projects-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </main>
  );
}

