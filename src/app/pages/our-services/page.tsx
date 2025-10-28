import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />
      <section className="mx-auto max-w-[900px] px-5 py-16 md:py-24 text-center">
        <h1 className="mb-6 text-2xl uppercase tracking-[0.25em] text-[#333]">Our Services</h1>
        <p className="mx-auto max-w-[720px] text-base leading-7">
          From bespoke furniture to full interior projects, our team crafts
          highly personalised experiences. Get in touch to explore product
          customisation, material palettes, and on-site project execution.
        </p>
      </section>
      <Footer />
    </main>
  );
}

