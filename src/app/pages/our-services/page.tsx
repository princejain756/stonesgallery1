import type { Metadata } from "next";
import Script from "next/script";
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stones Gallery Services',
  serviceType: 'Natural Stone Products and Custom Solutions',
  provider: {
    '@type': 'Organization',
    name: 'Stones Gallery by Dish Impex LLP',
    telephone: '+91-9035664747',
    areaServed: ['Bangalore', 'Jaipur', 'Makrana', 'India'],
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
      name: 'Our Services',
      item: 'https://stonesgallery.in/pages/our-services',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Our Services – Stones Gallery by Dish Impex LLP',
  description:
    'Stones Gallery offers customized natural stone solutions with creative and agile service. We provide environmentally sustainable products from our production facilities in Jaipur and Makrana.',
  keywords: [
    'stones gallery services',
    'custom stone solutions',
    'natural stone bangalore',
    'stone production jaipur',
    'stone production makrana',
  ],
  alternates: {
    canonical: '/pages/our-services',
  },
  openGraph: {
    title: 'Our Services – Stones Gallery',
    description:
      'Creative and agile stone solutions. Customized products from our facilities in Jaipur and Makrana.',
    url: 'https://stonesgallery.in/pages/our-services',
    type: 'website',
  },
};

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      {/* Hero Section */}
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
          <h1 className="text-white tracking-[0.3em] text-2xl md:text-3xl uppercase">Our Services</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[1100px] px-5 py-14 md:py-20">
        <p className="mb-6 text-base leading-7">
          We are creative and agile. We are responsive and committed to environmentally sustainable products.
        </p>
        <p className="mb-6 text-base leading-7">
          Stones Gallery offers customized solutions to satisfy customer's requirement and to make their stone dreams come alive. We have our production facility at stone city of Rajasthan – Jaipur and Makrana.
        </p>
        <p className="text-base leading-7">
          Do visit our store to experience our range of stunning products.
        </p>
      </section>

      {/* Production Facilities Images */}
      <section className="mx-auto max-w-[1100px] px-5 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-8 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/bangaloreshowroom.webp"
              alt="Stones Gallery Bangalore Showroom"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <p className="text-sm md:text-base font-medium">Bangalore Showroom</p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/bangaloreshowroom2.webp"
              alt="Stones Gallery Bangalore Production Facility"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <p className="text-sm md:text-base font-medium">Bangalore Production Facility</p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/bangaloreshowroom3.webp"
              alt="Stones Gallery Bangalore Fabrication Unit"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <p className="text-sm md:text-base font-medium">Fabrication Unit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Store & Contact Section */}
      <section className="bg-stone-50 py-14 md:py-20">
        <div className="mx-auto max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-12 text-center">Visit Our Store</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#8d8986] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-[#444] mb-2">Store Location</h3>
                  <p className="text-base text-[#8d8986] leading-relaxed">
                    Jigani, Bangalore<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#444] mb-3">Production Facilities</h3>
                <div className="space-y-3 text-base text-[#8d8986]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#444]">•</span>
                    <span>Jaipur, Rajasthan</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#444]">•</span>
                    <span>Makrana, Rajasthan</span>
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
            <div className="relative h-[500px] overflow-hidden border border-stone-200">
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

      {/* Collections CTA */}
      <section className="mx-auto max-w-[1100px] px-5 py-14 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-6">Explore Our Products</h2>
        <p className="text-base text-[#8d8986] mb-8 max-w-2xl mx-auto">
          Discover our exclusive collection of natural stone products, from idols and sculptures to home décor and wall claddings.
        </p>
        <Link
          href="/pages/our-collection"
          className="inline-block border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          View Collections
        </Link>
      </section>

      {/* Schema Markup */}
      <Script id="our-services-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="our-services-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
    </main>
  );
}
