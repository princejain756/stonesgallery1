import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />
      <section className="mx-auto max-w-[900px] px-5 py-16 md:py-24 text-center">
        <h1 className="mb-6 text-2xl uppercase tracking-[0.25em] text-[#333]">Our Services</h1>
        <p className="mx-auto max-w-[720px] text-base leading-7">
          We are creative and agile. We are responsive and committed to environmentally sustainable products. Stones Gallery offers customized solutions to satisfy customer's requirement and to make their stone dreams come alive. We have our production facility at stone city of Rajasthan – Jaipur and Makrana. Do visit our store to experience our range of stunning products.
        </p>
      </section>
      <Footer />
    </main>
  );
}

