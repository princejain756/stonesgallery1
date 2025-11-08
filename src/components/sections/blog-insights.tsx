'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const BlogInsights = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#0f0f0f] text-white py-0 px-6 lg:px-14">
      <div className="mx-auto max-w-6xl py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Insights</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-[0.2em]">
              Strategy notes for architects, builders &amp; collectors
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl">
              Deep dives on granite sourcing across Jigani, marble lookbooks for Indiranagar residences,
              temple sculpture craftsmanship, and pan-India export readiness—crafted to rank for high-intent searches.
            </p>
          </div>
          <Link
            href="/pages/blog"
            className="inline-flex items-center border border-white/50 px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition-colors"
          >
            Read the blog
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="group bg-white/5 border border-white/10 transition hover:-translate-y-1 hover:border-white/40">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.heroAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{post.categories.join(' • ')}</p>
                <h3 className="text-xl font-light tracking-[0.08em]">{post.title}</h3>
                <p className="text-sm text-white/70">{post.summary}</p>
                {post.sections[0]?.paragraphs[0] && (
                  <p className="text-xs text-white/60">
                    {post.sections[0].paragraphs[0]}
                  </p>
                )}
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{post.readTime}</span>
                  <span>{post.publishedOn}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {post.keywords.slice(0, 2).map((keyword) => (
                    <span key={keyword} className="border border-white/20 px-2 py-1">
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/pages/blog/${post.slug}`}
                  className="inline-flex text-xs uppercase tracking-[0.25em] text-white border-b border-white/40 hover:border-white"
                >
                  Continue reading
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
