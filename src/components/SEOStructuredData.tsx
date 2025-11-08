import Script from 'next/script';

interface VideoStructuredDataProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
}

/**
 * Add Video structured data for better SEO
 */
export function VideoStructuredData({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
}: VideoStructuredDataProps) {
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: thumbnailUrl.startsWith('http') 
      ? thumbnailUrl 
      : `https://stonesgallery.in${thumbnailUrl}`,
    uploadDate,
    ...(duration && { duration }),
    ...(contentUrl && { 
      contentUrl: contentUrl.startsWith('http') 
        ? contentUrl 
        : `https://stonesgallery.in${contentUrl}` 
    }),
  };

  return (
    <Script
      id={`video-schema-${name.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(videoSchema)}
    </Script>
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Breadcrumb component with structured data
 */
export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://stonesgallery.in${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(breadcrumbSchema)}
    </Script>
  );
}
