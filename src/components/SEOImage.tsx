import type { ImgHTMLAttributes } from 'react';
import Image from 'next/image';

interface SEOImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * SEO-optimized Image component with proper alt text and metadata
 * Always use descriptive alt text for better SEO
 */
export function SEOImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  className,
  ...props 
}: SEOImageProps) {
  // Ensure alt text is descriptive and not empty
  const descriptiveAlt = alt || 'Stones Gallery - Premium Natural Stone';
  
  if (fill) {
    return (
      <Image
        src={src}
        alt={descriptiveAlt}
        fill
        sizes={sizes || '100vw'}
        priority={priority}
        quality={quality}
        className={className}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={descriptiveAlt}
      width={width || 1200}
      height={height || 800}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      {...props}
    />
  );
}

/**
 * Generate comprehensive image metadata for Open Graph
 */
export function getImageMetadata(params: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  const { url, alt, width = 1200, height = 630 } = params;
  
  return {
    url: url.startsWith('http') ? url : `https://stonesgallery.in${url}`,
    alt,
    width,
    height,
    type: 'image/jpeg',
  };
}
