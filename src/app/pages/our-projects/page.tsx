import type { Metadata } from 'next';
import Script from 'next/script';
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

// Customised Temple Projects
const customTempleProjects = [
  { src: '/Customised Temples/celestial serenity mandap.jpg', title: 'Celestial Serenity Mandap' },
  { src: '/Customised Temples/divine majesty mandir.jpg', title: 'Divine Majesty Mandir' },
  { src: '/Customised Temples/golden grace temple.jpg', title: 'Golden Grace Temple' },
  { src: '/Customised Temples/grand heritage mandap.jpg', title: 'Grand Heritage Mandap' },
  { src: '/Customised Temples/peacock splendor mandap.jpg', title: 'Peacock Splendor Mandap' },
  { src: '/Customised Temples/regal peacock alcove.jpg', title: 'Regal Peacock Alcove' },
  { src: '/Customised Temples/tree of life mandir.jpg', title: 'Tree of Life Mandir' },
  { src: '/Customised Temples/royal arches sanctuary.jpg', title: 'Royal Arches Sanctuary' },
  { src: '/Customised Temples/ganesh harmony sanctuary.jpg', title: 'Ganesh Harmony Sanctuary' },
  { src: '/Customised Temples/lotus entrance mandap.jpg', title: 'Lotus Entrance Mandap' },
  { src: '/Customised Temples/divine harmony alcove.jpg', title: 'Divine Harmony Alcove' },
  { src: '/Customised Temples/om heritage temple.jpg', title: 'Om Heritage Temple' },
];

// Marble Temple Projects
const marbleTempleProjects = [
  { src: '/Marble temples/projects customized marble.jpg', title: 'Custom Marble Temple Design' },
  { src: '/Marble temples/projects customized marble1.jpg', title: 'Premium Marble Temple' },
  { src: '/Marble temples/projects customized marble2.jpg', title: 'Elegant Marble Shrine' },
  { src: '/Marble temples/projects customized marble3.jpg', title: 'Traditional Marble Mandap' },
  { src: '/Marble temples/projects customized marble5.jpg', title: 'Contemporary Marble Temple' },
  { src: '/Marble temples/projects customized marble6.jpg', title: 'Luxury Marble Sanctuary' },
  { src: '/Marble temples/projects customized marble7.jpg', title: 'Ornate Marble Temple' },
  { src: '/Marble temples/projects customized marble8.jpg', title: 'Exquisite Marble Mandir' },
  { src: '/Marble temples/eternal grace mandir.jpg', title: 'Eternal Grace Mandir' },
  { src: '/Marble temples/heritage crown mandir.jpg', title: 'Heritage Crown Mandir' },
  { src: '/Marble temples/majestic lotus pavilion.jpg', title: 'Majestic Lotus Pavilion' },
  { src: '/Marble temples/royal heritage shrine.jpg', title: 'Royal Heritage Shrine' },
];

export default function OurProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/Customised Temples/grand heritage mandap.jpg"
          alt="Our Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white tracking-[0.3em] text-3xl md:text-4xl uppercase">Our Projects</h1>
        </div>
      </section>

      {/* Customised Temple Projects */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-4">
            Customised Temple Projects
          </h2>
          <p className="text-base text-[#8d8986] max-w-2xl mx-auto">
            Bespoke temple designs crafted with precision and devotion. Each project is a unique expression of spirituality and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customTempleProjects.map((project, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-stone-100">
              <Image 
                src={project.src} 
                alt={project.title}
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm md:text-base tracking-wider uppercase">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marble Temple Projects */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#444] mb-4">
              Marble Temple Installations
            </h2>
            <p className="text-base text-[#8d8986] max-w-2xl mx-auto">
              Premium marble temples featuring intricate craftsmanship and timeless elegance. Designed to create sacred spaces in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marbleTempleProjects.map((project, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-white shadow-md">
                <Image 
                  src={project.src} 
                  alt={project.title}
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm md:text-base tracking-wider uppercase">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-5 text-center">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] mb-6">
            Let's Create Your Dream Project
          </h2>
          <p className="text-base md:text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            From concept to completion, we bring your vision to life with exceptional craftsmanship and attention to detail.
          </p>
          <a
            href="/pages/our-contact"
            className="inline-block border-2 border-white px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-stone-900 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
      
      <Script id="our-projects-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </main>
  );
}


