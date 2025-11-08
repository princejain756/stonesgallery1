import { blogPosts, findBlogPostBySlug } from '@/data/blog-posts';

export async function fetchBlogPosts() {
  return blogPosts;
}

export async function fetchBlogPostBySlug(slug: string) {
  return findBlogPostBySlug(slug) ?? null;
}
