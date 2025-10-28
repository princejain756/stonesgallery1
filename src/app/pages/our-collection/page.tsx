import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import CollectionsGrid from '@/components/sections/collections-grid';

export default function OurCollectionPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />
      <section className="mx-auto max-w-[1200px] px-5 pt-10 md:pt-16">
        <h1 className="mb-8 text-center text-2xl uppercase tracking-[0.25em] text-[#333]">
          Our Collections
        </h1>
      </section>
      <CollectionsGrid />
      <Footer />
    </main>
  );
}

