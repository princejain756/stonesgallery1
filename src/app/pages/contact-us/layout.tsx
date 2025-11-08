import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Stones Gallery | Get in Touch for Premium Natural Stone',
  description:
    'Contact Stones Gallery for luxury marble, granite, temple sculptures, and custom stone furniture. Located in Jigani, Bangalore. Call +91 94489 87711 or WhatsApp us for quotations and site visits.',
  keywords: [
    'contact stones gallery',
    'granite supplier bangalore contact',
    'marble shop jigani contact',
    'temple sculptures bangalore',
    'stone gallery near me',
    'dish impex llp contact',
    'stone furniture inquiry',
  ],
  alternates: {
    canonical: '/pages/contact-us',
  },
  openGraph: {
    title: 'Contact Stones Gallery – Premium Natural Stone Supplier',
    description:
      'Reach out to Stones Gallery in Jigani, Bangalore for marble, granite, sculptures, and stone furniture. Expert consultation for residential and commercial projects.',
    url: 'https://stonesgallery.in/pages/contact-us',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
