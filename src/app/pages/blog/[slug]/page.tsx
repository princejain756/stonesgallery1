import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { blogPosts, findBlogPostBySlug } from "@/data/blog-posts";
import { seoKeywords } from "@/lib/seo-keywords";

type BlogParams = {
  slug: string;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: BlogParams }): Metadata {
  const post = findBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Stones Gallery Blog",
      description: "Insights on granite, marble, sculptures, and exports from StonesGallery.in",
    };
  }

  const canonical = `/pages/blog/${post.slug}`;

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: Array.from(new Set([...post.keywords, ...post.seo.keywords, ...seoKeywords.slice(0, 10)])),
    alternates: { canonical },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      url: `https://stonesgallery.in${canonical}`,
      images: [{ url: post.coverImage, alt: post.heroAlt }],
    },
  };
}

export default function BlogDetailPage({ params }: { params: BlogParams }) {
  const post = findBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seo.title,
    description: post.seo.description,
    image: [post.coverImage],
    author: {
      '@type': 'Organization',
      name: 'Dish Impex LLP',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stones Gallery',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stonesgallery.in/Stonesgallery logo.webp',
      },
    },
    datePublished: post.publishedOn,
    keywords: post.keywords,
    mainEntityOfPage: `https://stonesgallery.in/pages/blog/${post.slug}`,
  };

  const faqSchema = post.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main className="bg-[#070707] text-white">
      <header className="relative h-[50vh] w-full">
        <Image src={post.coverImage} alt={post.heroAlt} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-white/70">{post.categories.join(' • ')}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-[0.15em] max-w-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
            <span>{post.readTime}</span>
            <span>{post.publishedOn}</span>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <article className="space-y-10">
          <p className="text-lg text-white/80 leading-relaxed">{post.summary}</p>

          {post.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-2xl font-light tracking-[0.15em]">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-6 text-white/70">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.insight && (
                <div className="border border-white/20 bg-white/5 p-4 text-sm text-white/80">
                  {section.insight}
                </div>
              )}
            </div>
          ))}

          {post.faqs && (
            <div className="space-y-4">
              <h3 className="text-xl font-light tracking-[0.15em]">Project FAQs</h3>
              {post.faqs.map((faq) => (
                <details key={faq.question} className="border border-white/15 bg-white/5 p-4">
                  <summary className="cursor-pointer text-lg font-light tracking-[0.1em]">{faq.question}</summary>
                  <p className="mt-3 text-sm text-white/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-white/60">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="border border-white/20 px-3 py-1">
                {keyword}
              </span>
            ))}
          </div>
        </article>

        <aside className="space-y-8 border border-white/10 bg-white/5 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stone Intelligence</p>
            <p className="mt-2 text-sm text-white/80">
              Bookmark this playbook and share it with architects, builders, and procurement leads working on premium stone scopes.
            </p>
          </div>
          {post.stats && (
            <div className="space-y-3">
              {post.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 p-3">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                  <p className="text-lg text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
          <div className="space-y-3">
            <Link
              href="/pages/our-contact"
              className="block border border-white/60 px-4 py-3 text-center text-xs uppercase tracking-[0.3em] hover:bg-white/10"
            >
              Talk to a stone expert
            </Link>
            <Link
              href="/pages/our-contact"
              className="block border border-white/20 px-4 py-3 text-center text-xs uppercase tracking-[0.3em] hover:border-white"
            >
              View services
            </Link>
            {post.cta && (
              <Link
                href={post.cta.href}
                className="block border border-white/40 px-4 py-3 text-center text-xs uppercase tracking-[0.3em] hover:bg-white/10"
              >
                {post.cta.label}
              </Link>
            )}
          </div>
        </aside>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Keep exploring</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {blogPosts
              .filter((related) => related.slug !== post.slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/pages/blog/${related.slug}`}
                  className="group border border-white/10 bg-white/5 p-5 hover:border-white/40"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                    {related.categories.join(' • ')}
                  </p>
                  <h4 className="mt-2 text-lg font-light tracking-[0.1em] group-hover:text-white">
                    {related.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/70">{related.summary}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Script id={`article-schema-${post.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleSchema)}
      </Script>
      {faqSchema && (
        <Script id={`faq-schema-${post.slug}`} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      )}
    </main>
  );
}
