import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Stones Gallery - Data Protection & Security",
  description: "Stones Gallery privacy policy explains how we collect, use, and protect your personal information. GDPR compliant. Your privacy is our priority.",
  keywords: "privacy policy, data protection, GDPR, personal information, cookies, data security",
  alternates: {
    canonical: "/pages/privacy-policy"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-stone-300">
            Last updated: November 9, 2025
          </p>
          <p className="mt-4 text-stone-300">
            Stones Gallery (operated by Dish Impex LLP) is committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-stone prose-lg max-w-none">
            
            {/* 1. Information We Collect */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800">
              1. Information We Collect
            </h2>
            
            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              1.1 Personal Information
            </h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you interact with Stones Gallery, we may collect the following personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Contact Details:</strong> Name, email address, phone number, WhatsApp number, mailing address</li>
              <li><strong>Project Information:</strong> Property location, project type (residential/commercial), stone requirements, budget range</li>
              <li><strong>Business Information:</strong> Company name, GST number (for B2B clients), architect/builder credentials</li>
              <li><strong>Payment Information:</strong> Billing address, transaction details (processed securely through payment gateways)</li>
              <li><strong>Communication Records:</strong> Email correspondence, WhatsApp messages, phone call notes, site visit requests</li>
            </ul>

            <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">
              1.2 Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, time spent on site</li>
              <li><strong>Cookies & Tracking:</strong> Session cookies, analytics cookies (Google Analytics), marketing pixels</li>
              <li><strong>Location Data:</strong> Approximate location based on IP address (for localized content and shipping estimates)</li>
            </ul>

            {/* 2. How We Use Your Information */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              2. How We Use Your Information
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Order Processing:</strong> Fulfill stone orders, custom sculpture requests, and installation services</li>
              <li><strong>Communication:</strong> Respond to inquiries, provide quotations, send order updates, and project consultations</li>
              <li><strong>Service Improvement:</strong> Analyze site usage to enhance user experience and optimize our offerings</li>
              <li><strong>Marketing:</strong> Send promotional emails, WhatsApp updates, and newsletters (with your consent; opt-out anytime)</li>
              <li><strong>Legal Compliance:</strong> Meet tax, accounting, and regulatory requirements under Indian law</li>
              <li><strong>Security:</strong> Prevent fraud, unauthorized access, and protect our systems</li>
            </ul>

            {/* 3. Legal Basis for Processing (GDPR) */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              3. Legal Basis for Processing (GDPR Compliance)
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              For users in the European Economic Area (EEA), we process personal data based on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Contractual Necessity:</strong> To fulfill orders and provide services you've requested</li>
              <li><strong>Legitimate Interests:</strong> To improve our services, prevent fraud, and communicate about products</li>
              <li><strong>Consent:</strong> For marketing communications (which you can withdraw anytime)</li>
              <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and regulatory requirements</li>
            </ul>

            {/* 4. Data Sharing */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              4. How We Share Your Information
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              We do NOT sell or rent your personal information to third parties. We may share your data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Service Providers:</strong> Logistics partners (for delivery), payment gateways (Razorpay, PayU), installation contractors</li>
              <li><strong>Business Partners:</strong> Architects, interior designers (only with your explicit consent for project collaboration)</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our legal rights</li>
              <li><strong>Analytics Providers:</strong> Google Analytics (anonymized data for website performance insights)</li>
            </ul>
            <p className="text-stone-700 leading-relaxed">
              All third parties are contractually bound to protect your data and use it only for specified purposes.
            </p>

            {/* 5. Data Security */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              5. Data Security Measures
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission (HTTPS)</li>
              <li><strong>Secure Storage:</strong> Encrypted databases with restricted access controls</li>
              <li><strong>Payment Security:</strong> PCI-DSS compliant payment gateways (we do not store credit card details)</li>
              <li><strong>Access Controls:</strong> Role-based access, two-factor authentication for admin systems</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
            </ul>
            <p className="text-stone-700 leading-relaxed">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but take all reasonable precautions.
            </p>

            {/* 6. Data Retention */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              6. Data Retention Period
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Active Accounts:</strong> Duration of customer relationship + 3 years for warranty/service records</li>
              <li><strong>Transactional Data:</strong> 7 years (as required by Indian tax and accounting laws)</li>
              <li><strong>Marketing Communications:</strong> Until you unsubscribe or request deletion</li>
              <li><strong>Website Analytics:</strong> 26 months (Google Analytics default retention)</li>
            </ul>
            <p className="text-stone-700 leading-relaxed">
              After retention periods expire, we securely delete or anonymize your data.
            </p>

            {/* 7. Your Rights */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              7. Your Privacy Rights
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
              <li><strong>Erasure ("Right to be Forgotten"):</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests or for marketing purposes</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Withdraw Consent:</strong> Opt-out of marketing emails, WhatsApp messages, or other consented communications</li>
            </ul>
            <p className="text-stone-700 leading-relaxed">
              To exercise your rights, email us at <a href="mailto:privacy@stonesgallery.in" className="text-stone-900 underline font-semibold">privacy@stonesgallery.in</a> or WhatsApp +91 90356 64747. We will respond within 30 days.
            </p>

            {/* 8. Cookies Policy */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              8. Cookies & Tracking Technologies
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-6">
              <li><strong>Essential Cookies:</strong> Required for site functionality (cannot be disabled)</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand site usage and improve performance</li>
              <li><strong>Marketing Cookies:</strong> Facebook Pixel, Google Ads (for retargeting campaigns)</li>
              <li><strong>Preference Cookies:</strong> Remember your language, location, and display preferences</li>
            </ul>
            <p className="text-stone-700 leading-relaxed">
              You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect site functionality.
            </p>

            {/* 9. Children's Privacy */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              9. Children's Privacy
            </h2>
            
            <p className="text-stone-700 leading-relaxed">
              Our services are intended for adults (18+ years). We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal data, please contact us immediately, and we will delete it.
            </p>

            {/* 10. International Data Transfers */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              10. International Data Transfers
            </h2>
            
            <p className="text-stone-700 leading-relaxed">
              Your information is primarily stored on servers in India. For international clients (USA, UK, UAE, etc.), we may transfer data to facilitate services. We ensure adequate safeguards (Standard Contractual Clauses, Privacy Shield frameworks) are in place for such transfers.
            </p>

            {/* 11. Third-Party Links */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              11. Third-Party Websites
            </h2>
            
            <p className="text-stone-700 leading-relaxed">
              Our website may contain links to third-party websites (e.g., social media, payment gateways). We are not responsible for their privacy practices. Please review their privacy policies before providing personal information.
            </p>

            {/* 12. Changes to Policy */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              12. Changes to This Privacy Policy
            </h2>
            
            <p className="text-stone-700 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The "Last Updated" date at the top will indicate when the most recent changes were made. We encourage you to review this page regularly. Material changes will be notified via email or prominent site notice.
            </p>

            {/* 13. Contact Us */}
            <h2 className="text-3xl font-bold text-stone-900 mb-4 pb-2 border-b-2 border-stone-800 mt-12">
              13. Contact Information
            </h2>
            
            <p className="text-stone-700 leading-relaxed mb-4">
              For privacy-related questions, concerns, or to exercise your rights:
            </p>
            <div className="bg-stone-100 border-l-4 border-stone-800 p-6 mb-6">
              <p className="font-semibold text-stone-900 mb-2">Stones Gallery (Dish Impex LLP)</p>
              <p className="text-stone-700">
                <strong>Email:</strong> <a href="mailto:privacy@stonesgallery.in" className="text-stone-900 underline">privacy@stonesgallery.in</a>
              </p>
              <p className="text-stone-700">
                <strong>WhatsApp:</strong> +91 90356 64747
              </p>
              <p className="text-stone-700">
                <strong>Address (North India):</strong> Near Kurkure Factory, Mokhampura Choraha, Jaipur-Kishangarh-Ajmer NH, Jaipur, Rajasthan - 302013
              </p>
              <p className="text-stone-700">
                <strong>Address (South India):</strong> Pillaikothur Village, Konerpalli Post, Krishnagiri District, Tamil Nadu - 635115
              </p>
            </div>

            {/* GDPR Compliance Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                GDPR Compliance for EEA Users
              </h3>
              <p className="text-blue-800 leading-relaxed">
                If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR). You may lodge a complaint with your local data protection authority if you believe your rights have been violated. We are committed to resolving any concerns directly.
              </p>
            </div>

            {/* Indian Privacy Law Notice */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">
                Compliance with Indian Data Protection Laws
              </h3>
              <p className="text-orange-800 leading-relaxed">
                Stones Gallery complies with the Information Technology Act, 2000 (IT Act) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. We implement reasonable security practices to protect sensitive personal data.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-stone-300 mb-6">
            We're here to address your concerns and protect your data rights.
          </p>
          <a
            href="mailto:privacy@stonesgallery.in"
            className="inline-block bg-white hover:bg-stone-100 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Privacy Team
          </a>
        </div>
      </section>
    </main>
  );
}
