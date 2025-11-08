import type { MetadataRoute } from 'next';

import { blogPosts } from '@/data/blog-posts';

const baseUrl = 'https://stonesgallery.in';

const staticRoutes = [
  '/',
  '/pages/our-story',
  '/pages/our-collection',
  '/pages/our-projects',
  '/pages/our-services',
  '/pages/contact-us',
  '/pages/blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/pages/blog/${post.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
