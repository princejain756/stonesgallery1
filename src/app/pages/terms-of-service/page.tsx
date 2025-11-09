import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Stones Gallery - Terms & Conditions",
  description: "Terms and conditions for using Stones Gallery services. Learn about our policies for orders, delivery, returns, warranties, and legal terms.",
  keywords: "terms of service, terms and conditions, legal terms, warranty policy, return policy, stone delivery terms",
  alternates: {
    canonical: "/pages/terms-of-service"
  }
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-stone-300">
            Last updated: November 9, 2025
          </p>
          <p className="mt-4 text-stone-300">
            These terms govern your use of Stones Gallery services operated by Dish Impex LLP.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-stone prose-lg max-w-none">
            
            {/* 1. Acceptance of Terms */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800">
              1. Acceptance of Terms
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              By accessing or using Stones Gallery's website (stonesgallery.in), placing orders, or engaging our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.
            </p>

            {/* 2. Services Offered */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              2. Services Offered
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Stones Gallery (Dish Impex LLP) provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li>Supply of natural stones: Italian marble, Indian granite, quartzite, onyx, and semi-precious stones</li>
              <li>Custom temple sculptures, marble idols, and deity statues</li>
              <li>Stone cutting, polishing, and fabrication services</li>
              <li>Professional installation services across India</li>
              <li>Custom stone furniture (dining tables, countertops, benches)</li>
              <li>Consultation services for architects, builders, and homeowners</li>
            </ul>

            {/* 3. Orders & Quotations */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              3. Orders, Quotations & Pricing
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              3.1 Quotation Validity
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              All quotations are valid for 15 days from the date of issue. Prices are subject to change based on currency fluctuations (for imported stones), raw material costs, and GST rates. Finalized orders are locked at agreed pricing.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              3.2 Order Confirmation
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Orders are confirmed only after:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li>Written confirmation (email or signed quotation)</li>
              <li>Receipt of advance payment (typically 50% for custom orders, 30% for standard stones)</li>
              <li>Material availability verification (we notify if items are out of stock)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              3.3 Custom Orders
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Custom sculptures, idols, and bespoke furniture require client approval at multiple stages: Design mockup → Clay maquette → Final carving. Changes after material cutting begins may incur additional charges (15-30% of item cost). Custom orders are non-refundable once production starts.
            </p>

            {/* 4. Payment Terms */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              4. Payment Terms
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              4.1 Payment Schedule
            </h3>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Standard Stones:</strong> 30% advance, 70% before dispatch</li>
              <li><strong>Custom Orders:</strong> 50% advance, 25% on approval, 25% before delivery</li>
              <li><strong>Installation Projects:</strong> 30% advance, 40% on material delivery, 30% post-installation</li>
              <li><strong>Trade Clients:</strong> 60-day credit terms available for approved builders/architects (min. ₹5,00,000 annual turnover)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              4.2 Accepted Payment Methods
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Bank transfer (NEFT/RTGS), UPI, credit/debit cards (via payment gateway), cheques (for trade clients only). All prices are in INR and inclusive of GST unless stated otherwise.
            </p>

            {/* 5. Delivery & Shipping */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              5. Delivery & Shipping Policy
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              5.1 Delivery Timeline
            </h3>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Local (within 50 km):</strong> 3-7 business days</li>
              <li><strong>Metro Cities:</strong> 7-14 business days</li>
              <li><strong>Pan-India:</strong> 14-30 business days</li>
              <li><strong>Custom Orders:</strong> 4-20 weeks (depending on complexity)</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mb-6">
              Delays due to natural disasters, strikes, or force majeure events are beyond our control. We will notify you promptly of any delays.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              5.2 Shipping Charges
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Shipping costs are calculated based on distance, order weight, and delivery location. Estimated at ₹20-50/sq ft. Free delivery for orders above ₹2,00,000 within 200 km radius from our facilities.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              5.3 Delivery Inspection
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>CRITICAL:</strong> Inspect all materials upon delivery. Report any damage, breakage, or discrepancies within 48 hours with photographic evidence. Claims after 48 hours will not be entertained. Sign delivery receipt only after thorough inspection.
            </p>

            {/* 6. Returns & Cancellations */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              6. Returns, Cancellations & Refunds
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              6.1 Return Policy
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Due to the nature of natural stones, returns are accepted ONLY in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Manufacturing Defect:</strong> Cracks, chips, or structural flaws present before delivery</li>
              <li><strong>Wrong Item:</strong> Delivered item doesn't match order specification</li>
              <li><strong>Transit Damage:</strong> Reported within 48 hours with proof</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>NOT ELIGIBLE FOR RETURN:</strong> Color variations (natural stone characteristic), buyer's remorse, custom-cut pieces, custom sculptures/idols, installed materials.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              6.2 Cancellation Policy
            </h3>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Before Production:</strong> Full refund minus 10% processing fee</li>
              <li><strong>After Material Cutting:</strong> No refund; 50% restocking fee if item is resellable</li>
              <li><strong>Custom Orders:</strong> Non-cancellable once production starts</li>
            </ul>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              6.3 Refund Timeline
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Approved refunds are processed within 14 business days to the original payment method. Bank transfer refunds: 3-7 business days. Card refunds: 5-10 business days (depending on bank processing).
            </p>

            {/* 7. Warranties */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              7. Warranties & Guarantees
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              7.1 Material Warranty
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>10-Year Limited Warranty</strong> on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li>Structural integrity (no cracking or crumbling under normal use)</li>
              <li>Color consistency (excluding natural aging/patina)</li>
              <li>Manufacturing defects</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>Warranty Exclusions:</strong> Damage from accidents, chemical spills, improper maintenance, unauthorized modifications, natural disasters, or wear from commercial/industrial use.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              7.2 Installation Warranty
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong>2-Year Warranty</strong> on workmanship: Covers uneven joints, hollow sounds, cracking from poor installation technique. Does NOT cover damage from building settlement, moisture issues, or improper substrate preparation (if not done by us).
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              7.3 Warranty Claims
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              To claim warranty: Email <a href="mailto:warranty@stonesgallery.in" className="text-stone-900 underline">warranty@stonesgallery.in</a> with photos, order number, and issue description. We conduct a free site inspection within 7 business days. Valid claims are resolved via repair, replacement, or refund (our discretion).
            </p>

            {/* 8. Disclaimers */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              8. Disclaimers & Limitations of Liability
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              8.1 Natural Stone Variations
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Natural stones exhibit color, veining, and pattern variations. Photos on our website/samples are representative, not exact matches. Slight differences in shade, texture, or pattern are inherent characteristics, NOT defects. We recommend viewing physical slabs before finalizing large orders.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              8.2 Suitability for Use
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              While we provide general guidance, YOU are responsible for verifying that selected stones are suitable for your specific application. Consult with architects/engineers for structural or technical requirements. We are NOT liable for inappropriate stone selection.
            </p>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              8.3 Limitation of Liability
            </h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Our total liability for any claim shall NOT exceed the invoice value of the specific order. We are NOT liable for consequential damages, lost profits, project delays, or third-party claims. This limitation applies to the maximum extent permitted by Indian law.
            </p>

            {/* 9. Intellectual Property */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              9. Intellectual Property
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              All content on stonesgallery.in (text, images, logos, designs) is owned by Dish Impex LLP and protected by copyright and trademark laws. You may NOT reproduce, distribute, or commercially exploit our content without written permission. Custom sculpture designs remain our intellectual property unless explicitly transferred in writing.
            </p>

            {/* 10. Indemnification */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              10. Indemnification
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              You agree to indemnify and hold Stones Gallery (Dish Impex LLP) harmless from any claims, damages, or legal costs arising from: Your misuse of materials, violation of these terms, infringement of third-party rights, or providing false/misleading information.
            </p>

            {/* 11. Governing Law */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              11. Governing Law & Dispute Resolution
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              These terms are governed by the laws of India. Any disputes shall be resolved through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Step 1:</strong> Good-faith negotiation (14 days)</li>
              <li><strong>Step 2:</strong> Mediation via Indian Council of Arbitration (30 days)</li>
              <li><strong>Step 3:</strong> Binding arbitration in Jaipur, Rajasthan under the Arbitration and Conciliation Act, 1996</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mb-6">
              Jurisdiction for legal proceedings: Courts of Jaipur, Rajasthan only.
            </p>

            {/* 12. Force Majeure */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              12. Force Majeure
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              We are not liable for delays or failures caused by events beyond our reasonable control: Natural disasters, pandemics, government actions, strikes, transportation disruptions, supplier failures, or acts of war. We will notify you promptly and make reasonable efforts to minimize impact.
            </p>

            {/* 13. Modifications */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              13. Modifications to Terms
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes are effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance. Material changes will be notified via email to active customers.
            </p>

            {/* 14. Severability */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              14. Severability
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              If any provision of these terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect.
            </p>

            {/* 15. Contact */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              15. Contact Information
            </h2>
            <div className="bg-stone-100 border-l-4 border-stone-800 p-6 mb-6">
              <p className="font-semibold text-stone-900 mb-2">Stones Gallery (Dish Impex LLP)</p>
              <p className="text-stone-700">
                <strong>Email:</strong> <a href="mailto:legal@stonesgallery.in" className="text-stone-900 underline">legal@stonesgallery.in</a>
              </p>
              <p className="text-stone-700">
                <strong>WhatsApp:</strong> +91 90356 64747
              </p>
              <p className="text-stone-700">
                <strong>Registered Office:</strong> Near Kurkure Factory, Mokhampura Choraha, Jaipur-Kishangarh-Ajmer NH, Jaipur, Rajasthan - 302013
              </p>
              <p className="text-stone-700">
                <strong>GSTIN:</strong> [To be provided]
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="text-stone-300 mb-6">
            Our team is here to clarify any aspect of our terms and conditions.
          </p>
          <a
            href="mailto:legal@stonesgallery.in"
            className="inline-block bg-white hover:bg-stone-100 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Legal Team
          </a>
        </div>
      </section>
    </main>
  );
}
