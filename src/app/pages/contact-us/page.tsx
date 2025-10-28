import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />
      <section className="mx-auto max-w-[900px] px-5 py-16 md:py-24">
        <h1 className="mb-8 text-center text-2xl uppercase tracking-[0.25em] text-[#333]">
          Our Contact
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-[#333]">Studio</h2>
            <p className="text-sm leading-7">
              Stones Gallery, 123 Design Street, New Delhi, India
              <br />
              contact@stonesgallery.com
              <br />
              +91 00000 00000
            </p>
          </div>
          <form className="grid gap-4">
            <input
              className="border border-[#dcdcdc] bg-white px-3 py-3 text-sm outline-none focus:border-[#333]"
              placeholder="Name"
              aria-label="Name"
            />
            <input
              className="border border-[#dcdcdc] bg-white px-3 py-3 text-sm outline-none focus:border-[#333]"
              placeholder="Email"
              type="email"
              aria-label="Email"
            />
            <textarea
              className="border border-[#dcdcdc] bg-white px-3 py-3 text-sm outline-none focus:border-[#333]"
              placeholder="Message"
              rows={5}
              aria-label="Message"
            />
            <button className="border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

