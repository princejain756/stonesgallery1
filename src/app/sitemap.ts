import type { MetadataRoute } from 'next';

import { blogPosts } from '@/data/blog-posts';

export const dynamic = 'force-static';

const baseUrl = 'https://stonesgallery.in';

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/pages/our-story', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/pages/our-collection', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/pages/our-projects', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pages/our-services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/pages/contact-us', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/pages/blog', priority: 0.85, changeFrequency: 'weekly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  // Static pages with strategic priorities
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: route.path === '/' ? today : lastWeek,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Blog posts with article-specific metadata
  const blogEntries = blogPosts.map((post) => {
    // Parse published date for more accurate lastModified
    const publishedDate = new Date(post.publishedOn);
    
    return {
      url: `${baseUrl}/pages/blog/${post.slug}`,
      lastModified: publishedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    };
  });

  return [...staticEntries, ...blogEntries];
}
