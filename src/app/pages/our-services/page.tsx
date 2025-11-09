import type { Metadata } from "next";
import Script from "next/script";

import { panIndiaCoverage } from "@/data/pan-india-coverage";

const services = [
  {
    title: 'Luxury Marble & Granite Procurement',
    description:
      'Italian marble, pistachio marble, quartzite, and exotic granites sourced from vetted quarries with moisture and thickness reports.',
    deliverables: ['Calacatta, Panda White, Taj Mahal quartzite', 'Book-matching & slab scanning', 'Moisture + polish QA reports'],
    keywords: ['italian marble bangalore', 'luxury marble bangalore', 'granite slabs bangalore'],
  },
  {
    title: 'Temple Sculptures & Marble Idols',
    description:
      'Hand-carved idols, temple accessories, and custom mandir architecture produced in Jigani with vastu compliance and export-ready packaging.',
    deliverables: ['Clay maquettes + CAD reviews', 'Gemstone/metal inlay', 'On-site pran pratishtha support'],
    keywords: ['temple sculptures bangalore', 'marble idols bangalore', 'mandir marble murti bangalore'],
  },
  {
    title: 'Custom Stone Furniture & Wash Basins',
    description:
      'Dining tables, sculptural benches, stone bathtubs, and wash basins engineered for villas, resorts, and penthouses.',
    deliverables: ['Finite element balancing', 'Nano-sealed finishes', 'Installation-ready hardware kits'],
    keywords: ['custom stone furniture india', 'granite dining table bangalore', 'stone wash basin bangalore'],
  },
  {
    title: 'Exterior Cladding & Façade Engineering',
    description:
      'Ventilated façades, elevation tiles, driveway friendly granites, and parking decks designed for Bengaluru’s monsoons.',
    deliverables: ['Shop drawings & anchor layouts', 'Factory sealing & texture matching', 'Maintenance manuals'],
    keywords: ['exterior cladding stone bangalore', 'stone elevation tiles bangalore', 'parking tiles granite bangalore'],
  },
];

const productCollections = [
  {
    title: 'Italian Marble Capsule',
    description: 'Calacatta Monaco, Panda White, Verde Alpi, and Portoro curated for hospitality & penthouse foyers.',
  },
  {
    title: 'Dark Roast & Exotic Granites',
    description: 'Jigani-processed Dark Roast, Red Jasper, Nero Santiago, and flamed driveway slabs.',
  },
  {
    title: 'Temple Sculpture Gallery',
    description: 'Marble idols, carved pillars, and temple murals with gemstone inlay ready for export installs.',
  },
  {
    title: 'Stone Furniture Line',
    description: 'Free-form dining tables, sculpted benches, and stone bathtubs with integrated hardware.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stones Gallery Turnkey Stone Services',
  serviceType: 'Luxury marble, granite, sculpture & cladding services',
  provider: {
    '@type': 'Organization',
    name: 'Dish Impex LLP',
    telephone: '+91-9035664747',
    areaServed: ['Bengaluru', 'Jigani', 'Koramangala', 'Indiranagar', 'Whitefield', 'India'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Premium Stone Services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        areaServed: ['Bengaluru', 'India'],
        serviceType: service.title,
      },
      itemCondition: 'https://schema.org/NewCondition',
    })),
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Stones Gallery Signature Products',
  itemListElement: productCollections.map((product, index) => ({
    '@type': 'Product',
    position: index + 1,
    name: product.title,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Stones Gallery',
    },
    category: 'Natural Stone',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      price: '0',
    },
  })),
};

export const metadata: Metadata = {
  title: 'Stones Gallery Services – Luxury Marble, Granite & Sculptures',
  description:
    'Dish Impex LLP (StonesGallery.in) delivers Italian marble, granite fabrication, temple sculptures, stone furniture, and façade engineering across Bengaluru and India.',
  keywords: [
    'granite supplier bangalore',
    'italian marble bangalore',
    'temple sculptures bangalore',
    'custom stone furniture india',
    'exterior stone cladding india',
  ],
  alternates: {
    canonical: '/pages/our-services',
  },
};

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#4c4c4c]">
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a07858]">Dish Impex LLP • Stones Gallery</p>
        <h1 className="mt-4 text-3xl md:text-4xl uppercase tracking-[0.25em] text-[#1f1d1b]">
          Bespoke stone services for landmark projects
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#6c6764]">
          From sourcing Italian marble in record time to engineering ventilated façades, Stones Gallery operates as your
          turnkey partner for villas, hospitality spaces, retail concepts, and temple restorations across Bengaluru and India.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="border border-[#e7e2de] bg-[#fbf8f4] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#a07858]">{service.keywords[0]}</p>
              <h2 className="mt-2 text-2xl font-light tracking-[0.1em] text-[#1f1d1b]">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c5552]">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#3f3a38]">
                {service.deliverables.map((item) => (
                  <li key={item} className="pl-4 text-[#5c5552]">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3efea]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a07858]">Pan-India build partners</p>
          <h2 className="mt-3 text-3xl font-light tracking-[0.15em] text-[#1f1d1b]">
            Jaipur to Delhi, Mumbai to Kochi — one stone partner
          </h2>
          <p className="mt-4 text-sm text-[#5c5552] max-w-3xl">
            Stones Gallery supports architects, builders, and procurement teams across every Indian metro with onsite QA,
            WhatsApp support, and export-grade packing. Explore the metros we service daily.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {panIndiaCoverage.map((region) => (
              <div key={region.region} className="border border-[#dfd4ca] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[#a07858]">{region.region}</p>
                <h3 className="mt-2 text-xl font-light tracking-[0.1em] text-[#1f1d1b]">{region.focus}</h3>
                <p className="mt-2 text-sm text-[#5c5552]">Cities: {region.cities.join(" • ")}</p>
                <ul className="mt-3 space-y-1 text-sm text-[#5c5552]">
                  {region.sellingPoints.slice(0, 2).map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-[#7a746f]">
                  {region.keywords.slice(0, 4).map((keyword) => (
                    <span key={keyword} className="border border-[#d1c6bd] px-2 py-1">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Product capsules</p>
              <h2 className="mt-3 text-3xl font-light tracking-[0.15em]">Signature stone collections</h2>
              <p className="mt-4 text-sm text-white/70">
                Premium slabs, sculptures, and furniture curated for villa foyers, clubhouses, and export orders. Each capsule can be toured virtually or in person at Jigani and Koramangala.
              </p>
            </div>
            <div className="grid gap-4">
              {productCollections.map((product) => (
                <div key={product.title} className="border border-white/15 bg-white/5 p-4">
                  <h3 className="text-xl font-light tracking-[0.1em]">{product.title}</h3>
                  <p className="text-sm text-white/70">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a07858]">Schedule a spec review</p>
        <h2 className="mt-3 text-3xl font-light tracking-[0.2em] text-[#1f1d1b]">Send drawings, BOQs, or WhatsApp voice notes</h2>
        <p className="mt-4 text-sm text-[#5c5552]">
          Email sales@stonesgallery.in or WhatsApp +91 90356 64747 for granite, marble, idol, or export requests. We revert within 12 working hours.
        </p>
      </section>
      <Script id="stonesgallery-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="stonesgallery-product-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(productSchema)}
      </Script>
    </main>
  );
}
