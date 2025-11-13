import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadGenForm from "@/components/LeadGenForm";
import { fetchBlogPosts } from "@/lib/cms-client";
import { bengaluruHubs, indiaExportFocus, seoKeywords } from "@/lib/seo-keywords";

const faqs = [
  {
    question: "Which areas in Bengaluru does Stones Gallery service for granite and marble installs?",
    answer:
      "We operate out of Jigani Industrial Area and deliver to JP Nagar, Jayanagar, Banashankari, Indiranagar, Whitefield, Koramangala, Electronic City, Sarjapur Road, and Yelahanka with dedicated logistics.",
  },
  {
    question: "Do you export granite slabs, temple sculptures, and stone furniture outside Bengaluru?",
    answer:
      "Yes. Dish Impex LLP manages premium exports pan-India and overseas, including documentation, fumigation, and container loading for marble idols, granite countertops, and custom stone furniture.",
  },
  {
    question: "Can Stones Gallery fabricate temple sculptures or custom marble dining tables?",
    answer:
      "Our in-house artisans sculpt marble idols, mandir murtis, temple accessories, and bespoke dining tables with CNC precision and hand chiseling, ensuring vastu alignment and polished finishes.",
  },
  {
    question: "What makes your granite slabs ideal for builders and architects?",
    answer:
      "We supply calibrated slabs with moisture reports, edge profiling, and site-ready packaging—perfect for villa projects, hospitality builds, and commercial cladding in Bengaluru and across India.",
  },
];

export const metadata: Metadata = {
  title: "Blog & SEO Resource Hub | Stones Gallery (Dish Impex LLP)",
  description:
    "Granite buying guides, Italian marble lookbooks, temple sculpture walkthroughs, and export playbooks crafted for architects, builders, and premium homeowners searching StonesGallery.in.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/pages/blog",
  },
  openGraph: {
    title: "Stones Gallery Blog – Granite, Marble & Sculpture Insights",
    description:
      "Actionable SEO-rich guides on granite supply, marble sourcing, temple sculptures, and stone exports from Bengaluru's leading stone studio.",
    url: "https://stonesgallery.in/pages/blog",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  const categories = Array.from(new Set(posts.flatMap((post) => post.categories)));

  return (
    <main className="bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">Dish Impex LLP • SEO Vault</p>
          <h1 className="mt-5 text-4xl md:text-5xl font-light tracking-[0.2em]">
            Granite, Marble &amp; Sculpture intelligence for high-intent searches
          </h1>
          <p className="mt-6 text-base text-white/80">
            From granite supplier guides in Jigani to temple sculpture craftsmanship, every post is optimised around
            <strong className="font-normal"> StonesGallery.in </strong>
            focus keywords so your projects are discoverable across Bengaluru and India.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/60">
            {categories.map((category) => (
              <span key={category} className="border border-white/30 px-4 py-2">
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
            <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">WhatsApp &amp; hotline</p>
              <h2 className="text-2xl font-light tracking-[0.15em] text-white">Instant stone desk</h2>
              <p className="text-sm text-white/70">
                Need pricing for granite slabs in Jigani, Italian marble for Koramangala penthouses, or idol crafting slots?
                Share drawings or tap the WhatsApp line for real-time assistance.
              </p>
              <a
                href="https://wa.me/919448987711?text=Hi%20Stones%20Gallery%2C%20share%20granite%20or%20marble%20ideas%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-emerald-400 px-5 py-3 text-xs uppercase tracking-[0.3em] text-emerald-200 transition hover:bg-emerald-400/10"
              >
                Message on WhatsApp
              </a>
              <p className="text-[11px] text-white/50">Response window: 9 AM – 9 PM IST • 7 days a week</p>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="mx-auto max-w-6xl space-y-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="grid gap-8 border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr_1fr] md:p-10"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">{post.categories.join(" • ")}</p>
                <h2 className="text-3xl font-light tracking-[0.1em]">{post.title}</h2>
                <p className="text-white/80">{post.summary}</p>
                <div className="text-xs text-white/60 flex gap-4">
                  <span>{post.readTime}</span>
                  <span>{post.publishedOn}</span>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-white/80">
                  {post.sections.slice(0, 1).map((section) => (
                    <div key={section.title}>
                      <p className="text-white/60 uppercase text-[11px] tracking-[0.3em]">{section.title}</p>
                      {section.paragraphs.slice(0, 2).map((paragraph) => (
                        <p key={paragraph} className="mt-1 border-l border-white/20 pl-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  {post.keywords.map((keyword) => (
                    <span key={keyword} className="border border-white/20 px-3 py-1">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/pages/blog/${post.slug}`}
                    className="inline-flex border border-white/60 px-5 py-2 text-xs uppercase tracking-[0.3em] hover:bg-white/10"
                  >
                    Read full article
                  </Link>
                  {post.cta && (
                    <Link
                      href={post.cta.href}
                      className="inline-flex border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.3em] hover:border-white"
                    >
                      {post.cta.label}
                    </Link>
                  )}
                </div>
              </div>
              <div className="relative h-72 w-full overflow-hidden">
                <Image src={post.coverImage} alt={post.heroAlt} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0e0e0e] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Bengaluru Micro-Market Coverage</p>
            <h3 className="mt-4 text-2xl font-light tracking-[0.15em]">Where we install &amp; deliver daily</h3>
            <ul className="mt-6 grid gap-3 text-sm text-white/80">
              {bengaluruHubs.map((hub) => (
                <li key={hub} className="border border-white/10 px-4 py-2">
                  {hub}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Pan-India Export Desk</p>
            <h3 className="mt-4 text-2xl font-light tracking-[0.15em]">How we support national buyers</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {indiaExportFocus.map((point) => (
                <li key={point} className="pl-4 border-l border-white/20">
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/pages/contact-us"
              className="mt-6 inline-flex border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white/10"
            >
              Talk to export desk
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">FAQs &amp; Search intent</p>
          <h3 className="mt-4 text-3xl font-light tracking-[0.15em]">Questions buyers already ask online</h3>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-white/15 bg-white/5 p-5 open:bg-white/10 transition"
              >
                <summary className="cursor-pointer text-lg font-light tracking-[0.1em] text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-white/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-16 text-center md:px-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="text-2xl font-light tracking-[0.15em]">Need a granite, marble, or sculpture quote?</h3>
          <p className="text-white/80">
            Share drawings or BOQs for villa projects, hospitality builds, retail fitouts, or mandir installations. Our
            SEO desk routes every enquiry to the right product specialist within 12 working hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em]">
            <Link href="/pages/contact-us" className="border border-white/70 px-6 py-3 hover:bg-white/10">
              Contact us
            </Link>
            <Link href="/pages/our-services" className="border border-white/30 px-6 py-3 hover:border-white/60">
              View services
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
    </main>
  );
}
