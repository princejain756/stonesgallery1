import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

const siteUrl = 'https://stonesgallery.in';
const siteName = 'Stones Gallery';
const defaultOgImage = '/Stonesgallery logo.webp';

/**
 * Generate comprehensive SEO metadata for any page
 */
export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = defaultOgImage,
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
    noindex = false,
  } = config;

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: 'Dish Impex LLP' }],
    creator: 'Dish Impex LLP',
    publisher: siteName,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: { en: siteUrl },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || siteUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@stonesgallery',
      site: '@stonesgallery',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for articles/blog posts
 */
export function generateArticleSchema(params: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  keywords?: string[];
  url: string;
}) {
  const {
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author,
    keywords = [],
    url,
  } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image.startsWith('http') ? image : `${siteUrl}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Stonesgallery logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${url}`,
    },
    keywords: keywords.join(', '),
  };
}

/**
 * Generate JSON-LD structured data for products
 */
export function generateProductSchema(params: {
  name: string;
  description: string;
  image: string;
  brand?: string;
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  const { name, description, image, brand = siteName, offers, aggregateRating } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `${siteUrl}${image}`,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        priceCurrency: offers.priceCurrency || 'INR',
        price: offers.price,
        availability: offers.availability || 'https://schema.org/InStock',
        url: siteUrl,
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };
}

/**
 * Generate JSON-LD BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Organization schema with enhanced details
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: 'Stones Gallery by Dish Impex LLP',
    legalName: 'Dish Impex LLP',
    url: siteUrl,
    logo: `${siteUrl}/Stonesgallery logo.webp`,
    description:
      'Leading supplier of luxury marble, granite, quartzite, temple sculptures, and custom stone furniture across India. Serving architects, builders, and homeowners with premium natural stones.',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jigani Industrial Area',
      addressLocality: 'Bengaluru',
      postalCode: '560105',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9876543210',
        contactType: 'customer service',
        email: 'sales@stonesgallery.in',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9876543210',
        contactType: 'sales',
        email: 'sales@stonesgallery.in',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/miraclestonex24/',
      'https://in.pinterest.com/NIVASA_HOME/',
      'https://m.facebook.com/NivasaHome/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '250',
    },
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
}) {
  const { name, description, serviceType, areaServed = ['India'] } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    name,
    description,
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Stone Products & Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Marble & Granite',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Italian Marble',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Premium Granite',
              },
            },
          ],
        },
      ],
    },
  };
}

/**
 * Extract location keywords for dynamic pages
 */
export function getLocationKeywords(location: string): string[] {
  return [
    `${location} granite supplier`,
    `${location} marble shop`,
    `${location} natural stone`,
    `stone supplier ${location}`,
    `marble and granite ${location}`,
  ];
}

/**
 * Generate structured data for images
 */
export function generateImageObject(params: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  const { url, caption, width = 1200, height = 800 } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
    caption,
    width,
    height,
    contentUrl: url.startsWith('http') ? url : `${siteUrl}${url}`,
  };
}
