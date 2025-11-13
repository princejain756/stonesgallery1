import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Contact – Stones Gallery by Dish Impex LLP',
  description:
      'Stones Gallery offers customized natural stone solutions with creative and agile service. Contact us for environmentally sustainable products.',
  keywords: [
    'stones gallery contact',
    'custom stone solutions',
    'natural stone bangalore',
    'stone production jaipur',
    'stone production makrana',
    'contact stones gallery',
    'stone showroom bangalore',
  ],
  alternates: {
    canonical: '/pages/our-contact',
  },
  openGraph: {
    title: 'Our Contact – Stones Gallery',
    description:
      'Creative and agile stone solutions. Customized products for your stone dreams. Get in touch with us.',
    url: 'https://stonesgallery.in/pages/our-contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}