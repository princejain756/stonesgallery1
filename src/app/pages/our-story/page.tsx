import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

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
          Stones Gallery by Dish Impex LLP is a design house where personalisation meets luxury.
        </p>
        <p className="mb-6 text-base leading-7">
          Stones Gallery's Natural Stone Boutique offers unique Statutes, Idols, Wall Claddings, Home Decors, Modern-Arts, Temple & Inlays all crafted from finest quality of natural stones.
        </p>
        <p className="text-base leading-7">
          Discover and explore our exclusive collection at Jigani, Bangalore.
        </p>
      </section>

      {/* Store Images Section */}
      <section className="mx-auto max-w-[1100px] px-5 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-8 text-center">Our Boutique</h2>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/stonesgallerystages/Phase 4- Fabrication.jpeg"
              alt="Stones Gallery Boutique - Craftsmanship"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="bg-stone-50 py-14 md:py-20">
        <div className="mx-auto max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-12 text-center">Visit Our Boutique</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#8d8986] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-[#444] mb-2">Location</h3>
                  <p className="text-base text-[#8d8986] leading-relaxed">
                    Jigani, Bangalore<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#8d8986] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-[#444] mb-2">Phone</h3>
                  <a href="tel:+919876543210" className="text-base text-[#8d8986] hover:text-black transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#8d8986] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-[#444] mb-2">Email</h3>
                  <a href="mailto:dishimpex@gmail.com" className="text-base text-[#8d8986] hover:text-black transition-colors">
                    dishimpex@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/pages/contact-us"
                  className="inline-block border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[400px] overflow-hidden border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b83e05e2c91%3A0x82acf4b7e7f4e84f!2sJigani%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Collections CTA */}
      <section className="mx-auto max-w-[1100px] px-5 py-14 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-6">Explore Our Collections</h2>
        <p className="text-base text-[#8d8986] mb-8 max-w-2xl mx-auto">
          Work with us to craft timeless spaces and bespoke furniture pieces. Explore our collections and projects to see the breadth of work.
        </p>
        <Link
          href="/pages/our-collection"
          className="inline-block border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          View Collections
        </Link>
      </section>

      
      <Script id="our-story-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="our-story-about" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutSchema)}
      </Script>
    </main>
  );
}

