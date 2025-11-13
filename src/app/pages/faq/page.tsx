import { Metadata } from "next";
import Script from "next/script";
import { faqs, faqCategories, generateFAQSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ - Marble, Granite & Sculptures | Stones Gallery",
  description: "Get answers to frequently asked questions about Italian marble, granite, temple sculptures, pricing, installation, and delivery across India. Expert guidance from Stones Gallery.",
  keywords: "marble FAQ, granite questions, Italian marble price, temple idol cost, stone installation, marble maintenance, granite warranty, custom sculptures",
  alternates: {
    canonical: "/pages/faq"
  },
  openGraph: {
    title: "Frequently Asked Questions - Stones Gallery",
    description: "Everything you need to know about marble, granite, and temple sculptures. Pricing, installation, maintenance, and delivery FAQs.",
    url: "https://stonesgallery.in/pages/faq",
    type: "website"
  }
};

export default function FAQPage() {
  // Group FAQs by category
  const groupedFAQs = Object.entries(faqCategories).map(([key, label]) => ({
    category: key,
    label,
    questions: faqs.filter(faq => faq.category === key)
  }));

  return (
    <>
      {/* FAQ Schema for Rich Snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Section */}
        <section className="bg-stone-900 text-white py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                Everything you need to know about our premium marble, granite, temple sculptures, pricing, installation, and pan-India delivery services.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-white border-b border-stone-200 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
              {groupedFAQs.map(({ category, label }) => (
                <a
                  key={category}
                  href={`#${category}`}
                  className="whitespace-nowrap px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-800 hover:text-white transition-colors text-sm font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {groupedFAQs.map(({ category, label, questions }) => (
              <div key={category} id={category} className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-stone-900 mb-8 pb-4 border-b-2 border-stone-800">
                  {label}
                </h2>
                
                <div className="space-y-6">
                  {questions.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <summary className="cursor-pointer px-6 py-5 font-semibold text-lg text-stone-900 hover:bg-stone-50 transition-colors list-none flex justify-between items-center">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-stone-600 transform group-open:rotate-180 transition-transform flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 py-5 text-stone-700 leading-relaxed bg-stone-50 border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="bg-stone-900 text-white py-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-stone-300 mb-8">
              Our stone experts are here to help. Get personalized advice for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919448987711?text=Hi%20Stones%20Gallery%2C%20I%20have%20questions%20about%20marble%20and%20granite."
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                WhatsApp: +91 94489 87711
              </a>
              <a
                href="/pages/contact-us"
                className="inline-block bg-white hover:bg-stone-100 text-stone-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 text-stone-400 text-sm">
              Response time: Within 12 working hours | Available Mon-Sat, 9 AM - 7 PM IST
            </p>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Why Choose Stones Gallery for Your Stone Projects?
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                With over two decades of expertise in premium natural stones, Stones Gallery by Dish Impex LLP has become India's trusted partner for luxury marble, granite, and handcrafted temple sculptures. We serve architects, builders, homeowners, and temple trusts across Bangalore, Delhi NCR, Mumbai, Hyderabad, Chennai, Pune, Ahmedabad, Jaipur, Kolkata, and beyond.
              </p>
              <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
                Our Commitment to Excellence
              </h3>
              <ul className="list-disc list-inside space-y-2 text-stone-700">
                <li><strong>200+ Stone Varieties:</strong> Italian marble, Indian granite, quartzite, onyx, and semi-precious stones</li>
                <li><strong>Pan-India Delivery:</strong> Professional logistics to all metros and tier-2 cities within 7-30 days</li>
                <li><strong>Expert Installation:</strong> Certified installers with 10-year material and 2-year workmanship warranty</li>
                <li><strong>Custom Craftsmanship:</strong> Bespoke temple idols, sculptures, and stone furniture crafted by master artisans</li>
                <li><strong>Transparent Pricing:</strong> No hidden costs, bulk discounts, and builder-friendly credit terms</li>
                <li><strong>Factory-Direct:</strong> Facilities in Jaipur (Rajasthan) and Tamil Nadu with showroom access</li>
              </ul>
              <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
                Serving Premium Projects Since 2002
              </h3>
              <p className="text-stone-700 leading-relaxed">
                From Indiranagar penthouses to Jaipur heritage hotels, from Mumbai skyscrapers to Chennai temple installations—our stones grace India's most iconic spaces. Whether you're an architect specifying materials for a luxury villa, a builder sourcing granite for 500 apartments, or a homeowner creating a dream kitchen, we deliver quality, on time, every time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
