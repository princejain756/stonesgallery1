import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Collection – Luxury Marble, Granite & Stone Sculptures | Stones Gallery',
  description:
    'Explore Stones Gallery\'s curated collection of Italian marble, premium granite, temple sculptures, stone furniture, and custom artifacts. View our exclusive natural stone boutique in Jigani, Bangalore.',
  keywords: [
    'marble collection bangalore',
    'granite collection bangalore',
    'italian marble showcase',
    'temple sculptures collection',
    'stone furniture gallery',
    'natural stone boutique',
    'luxury marble india',
    'custom stone art',
  ],
  alternates: {
    canonical: '/pages/our-collection',
  },
  openGraph: {
    title: 'Our Collection – Premium Natural Stone Showcase | Stones Gallery',
    description:
      'Browse handpicked marble, granite, temple idols, and bespoke stone furniture at Stones Gallery, Bangalore\'s premier natural stone boutique.',
    url: 'https://stonesgallery.in/pages/our-collection',
    type: 'website',
  },
};

export default function CollectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
