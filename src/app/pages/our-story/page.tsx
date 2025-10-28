import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />

      <section className="relative h-[70vh] w-full">
        <Image
          src="https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_story-41_1950x.jpg?v=1730018501"
          alt="Our Story Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h1 className="text-white tracking-[0.3em] text-2xl md:text-3xl uppercase">Our Story</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-14 md:py-20">
        <p className="mb-6 text-base leading-7">
          Stones Gallery is a design house where personalisation meets luxury. This
          clone page mirrors the layout and typographic feel of the original
          while using Tailwind for a clean, responsive structure.
        </p>
        <p className="text-base leading-7">
          Work with us to craft timeless spaces and bespoke furniture pieces.
          Explore our collections and projects to see the breadth of work.
        </p>
        <div className="mt-10">
          <Link
            href="/pages/our-collection"
            className="inline-block border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

