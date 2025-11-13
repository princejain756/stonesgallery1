import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jaipur Location - Stones Gallery Factory | Rajasthan Stone Manufacturing",
  description: "Visit our Jaipur factory near Kurkure Factory, Mokhampura Choraha on NH. Premium marble, granite, temple sculptures manufacturing facility. Get directions, hours & contact info.",
  keywords: "stones gallery jaipur, marble supplier jaipur, granite jaipur, temple idols jaipur, makrana marble, kishangarh marble, jaipur factory",
  alternates: {
    canonical: "/pages/locations/jaipur"
  }
};

const jaipurSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://stonesgallery.in/pages/locations/jaipur",
  name: "Stones Gallery - Jaipur Factory",
  description: "Premium Italian marble, Indian granite, temple sculptures, and custom stone furniture manufacturing facility in Jaipur, Rajasthan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Kurkure Factory, Mokhampura Choraha",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302013",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.8467",
    longitude: "75.7794"
  },
  telephone: "+91-94489-87711",
  email: "dishimpex@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  priceRange: "₹₹₹",
  image: "https://stonesgallery.in/locations/jaipur-factory.jpg",
  url: "https://stonesgallery.in/pages/locations/jaipur",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "180"
  },
  areaServed: ["Jaipur", "Ajmer", "Kishangarh", "Udaipur", "Jodhpur", "Rajasthan", "North India"]
};

export default function JaipurLocationPage() {
  return (
    <>
      <Script
        id="jaipur-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jaipurSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] bg-stone-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/jaipurshowroom.jpeg')" }} />
          
          <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center max-w-6xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Jaipur, Rajasthan
            </h1>
            <p className="text-2xl text-stone-200 mb-6">
              North India Headquarters | Manufacturing Facility
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=26.8467,75.7794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-stone-100 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Get Directions
              </a>
              <a
                href="https://wa.me/919448987711?text=I'd like to visit your Jaipur facility"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Schedule Factory Tour
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-stone-200">
                <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Address</h3>
                <p className="text-stone-700 leading-relaxed">
                  Near Kurkure Factory<br />
                  Mokhampura Choraha<br />
                  Jaipur-Kishangarh-Ajmer NH<br />
                  Jaipur, Rajasthan 302013
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-stone-200">
                <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Business Hours</h3>
                <p className="text-stone-700 leading-relaxed">
                  <strong>Mon - Sat:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Sunday:</strong> Closed<br />
                  <span className="text-sm text-stone-600 mt-2 block">
                    Appointments recommended for factory tours
                  </span>
                </p>
              </div>

              {/* Contact */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-stone-200">
                <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Contact</h3>
                <p className="text-stone-700 leading-relaxed">
                  <strong>Phone:</strong><br />
                  <a href="tel:+919448987711" className="text-stone-900 hover:underline">+91 94489 87711</a><br />
                  <strong className="mt-2 block">Email:</strong><br />
                  <a href="mailto:dishimpex@gmail.com" className="text-stone-900 hover:underline">dishimpex@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
              What You'll Find at Our Jaipur Factory
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Premium Stone Collection</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Makrana Marble:</strong> White marble from Rajasthan's famous quarries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Kishangarh Marble:</strong> Direct sourcing from nearby marble hub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Italian Marble:</strong> Imported Calacatta, Statuario, Carrara</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Indian Granite:</strong> Dark Roast, Black Galaxy, Hassan Green</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Sandstone:</strong> Dholpur, Agra Red, Jaisalmer Yellow</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Temple Sculpture Workshop</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Master Artisans:</strong> 20+ experienced sculptors on-site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Custom Idols:</strong> Ganesha, Laxmi, Shiva, Krishna murtis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Temple Mandirs:</strong> Complete home temple installations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Live Demonstrations:</strong> Watch carving process during visits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Export Quality:</strong> International shipping to USA, UK, UAE</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Cutting & Fabrication</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>CNC Cutting:</strong> Precision cutting for complex shapes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Edge Profiling:</strong> Bullnose, ogee, beveled, waterfall edges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Polishing:</strong> Mirror, honed, leathered finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Custom Inlays:</strong> Brass, mother-of-pearl, semi-precious stones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Services in Jaipur</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Factory Tours:</strong> See 5000+ slabs and production process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Design Consultation:</strong> Free for projects &gt;₹2,00,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Sample Viewing:</strong> Physical samples with live slab scans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-900 mr-3">✓</span>
                    <span><strong>Trade Partner Hub:</strong> Builder/architect registration desk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Images */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
              Our Jaipur Factory
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/jaipurshowroom.jpeg"
                  alt="Jaipur Factory - Manufacturing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/jaipurshowroom2.jpg"
                  alt="Jaipur Factory - Stone Processing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/jaipurshowrrom3.jpg"
                  alt="Jaipur Factory - Finished Products"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973874395!2d75.57750555!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c000000001%3A0x0!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stones Gallery Jaipur Location"
              />
            </div>
            <p className="text-center text-stone-600 mt-6">
              <strong>Landmark:</strong> Near Kurkure Factory on Jaipur-Kishangarh-Ajmer National Highway (NH 8)
            </p>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
              Areas We Serve from Jaipur
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">Jaipur & Surroundings</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Jaipur City</li>
                  <li>• Kishangarh</li>
                  <li>• Makrana</li>
                  <li>• Ajmer</li>
                  <li>• Tonk</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">Rajasthan</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Udaipur</li>
                  <li>• Jodhpur</li>
                  <li>• Kota</li>
                  <li>• Bikaner</li>
                  <li>• Alwar</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">North India</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Delhi NCR</li>
                  <li>• Haryana</li>
                  <li>• Punjab</li>
                  <li>• Uttar Pradesh</li>
                  <li>• Madhya Pradesh</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-900 text-white py-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Jaipur Factory</h2>
            <p className="text-xl text-stone-300 mb-8">
              Experience our manufacturing process firsthand. Book your factory tour today!
            </p>
            <a
              href="https://wa.me/919448987711?text=I'd like to schedule a visit to your Jaipur factory"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Schedule Your Factory Tour on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
