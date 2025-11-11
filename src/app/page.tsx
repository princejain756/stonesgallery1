import Script from 'next/script';
import HeroVideo from '@/components/sections/hero-video';
import SplitHeroIntroducing from '@/components/sections/split-hero-introducing';
import ServicesHero from '@/components/sections/services-hero';
import WhereArtMeetsEngineering from '@/components/sections/where-art-meets-engineering';
import LiveTheExperience from '@/components/sections/live-the-experience';
import FeaturedCollections from '@/components/sections/featured-collections';
import BlogInsights from '@/components/sections/blog-insights';
import Showroom3DView from '@/components/sections/showroom-3d-view';

// Enhanced homepage structured data
const homepageOfferCatalog = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Stones Gallery Product & Service Catalog',
  description: 'Comprehensive stone solutions for luxury residential and commercial projects',
  itemListElement: [
    {
      '@type': 'Product',
      position: 1,
      name: 'Italian Marble',
      description: 'Premium Calacatta, Panda White, and luxury imported marble slabs',
      brand: { '@type': 'Brand', name: 'Stones Gallery' },
      category: 'Natural Stone',
    },
    {
      '@type': 'Product',
      position: 2,
      name: 'Granite Slabs',
      description: 'Dark Roast, Red Jasper, and calibrated granite for countertops and flooring',
      brand: { '@type': 'Brand', name: 'Stones Gallery' },
      category: 'Natural Stone',
    },
    {
      '@type': 'Product',
      position: 3,
      name: 'Temple Sculptures',
      description: 'Hand-carved marble idols, deity sculptures, and temple accessories',
      brand: { '@type': 'Brand', name: 'Stones Gallery' },
      category: 'Sculpture & Art',
    },
    {
      '@type': 'Product',
      position: 4,
      name: 'Stone Furniture',
      description: 'Custom marble dining tables, wash basins, and garden benches',
      brand: { '@type': 'Brand', name: 'Stones Gallery' },
      category: 'Furniture',
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Exterior Cladding',
      description: 'Façade engineering and stone cladding for luxury villas',
  provider: { '@type': 'Organization', name: 'Dish Impex LLP', address: 'Sy.no, 16/2, hobli, begihalli village, taluk, Jigani, Anekal, Karnataka 560105' },
    },
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroVideo />
      <SplitHeroIntroducing />
      <ServicesHero />
      <WhereArtMeetsEngineering />
      <LiveTheExperience />
      <FeaturedCollections />
      <BlogInsights />
      <Showroom3DView />
      
      <Script id="homepage-offer-catalog" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homepageOfferCatalog)}
      </Script>
    </main>
  );
}
