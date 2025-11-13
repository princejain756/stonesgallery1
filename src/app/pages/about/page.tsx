import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Stones Gallery | Taruna Jain & Expert Stone Craftsmanship",
  description: "Meet Taruna Jain and our team of master stone artisans. 30+ years of excellence in premium marble, granite, and temple sculptures across India.",
  openGraph: {
    title: "About Stones Gallery - Premium Stone Specialists Since 1993",
    description: "Led by Taruna Jain, our team delivers exceptional craftsmanship in marble, granite, and temple sculptures with 30+ years experience.",
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Taruna Jain",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "Stones Gallery",
              url: "https://stonesgallery.in",
              description: "Premium marble, granite, and stone specialists"
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              addressCountry: "IN"
            },
            telephone: "+91-90356-64747",
            knowsAbout: [
              "Marble Craftsmanship",
              "Granite Selection",
              "Temple Architecture",
              "Stone Fabrication",
              "Interior Design",
              "Stone Conservation"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Crafting Excellence in Stone
            </h1>
            <p className="text-xl text-stone-300 mb-8">
              Led by visionary founder Taruna Jain, Stones Gallery has been transforming 
              spaces with premium marble and granite for over three decades.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-400">30+</div>
                <div className="text-stone-400">Years Experience</div>
              </div>
              <div className="w-px bg-stone-700"></div>
              <div>
                <div className="text-4xl font-bold text-amber-400">5000+</div>
                <div className="text-stone-400">Projects Completed</div>
              </div>
              <div className="w-px bg-stone-700"></div>
              <div>
                <div className="text-4xl font-bold text-amber-400">100+</div>
                <div className="text-stone-400">Expert Artisans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/20 to-transparent z-10"></div>
                {/* Placeholder for professional photo - replace with actual image */}
                <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍💼</div>
                    <p className="text-stone-600">[Professional Photo of Taruna Jain]</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  FOUNDER & CEO
                </div>
                <h2 className="text-4xl font-bold text-stone-900 mb-4">
                  Taruna Jain
                </h2>
                <p className="text-xl text-stone-700 mb-6">
                  Visionary leader transforming India's stone industry through innovation 
                  and uncompromising quality standards.
                </p>
                
                <div className="space-y-4 text-stone-700 mb-8">
                  <p>
                    With over 30 years of experience in the natural stone industry, 
                    Taruna Jain has built Stones Gallery into one of India's most trusted 
                    names in premium marble and granite.
                  </p>
                  <p>
                    Her expertise spans sourcing rare materials from Rajasthan's finest quarries, 
                    managing complex architectural projects, and preserving traditional stone 
                    carving techniques while embracing modern technology.
                  </p>
                  <p>
                    Under her leadership, Stones Gallery has completed prestigious projects 
                    including luxury residences, five-star hotels, corporate headquarters, 
                    and intricate temple sculptures across India.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                    <div className="text-2xl font-bold text-stone-900">30+</div>
                    <div className="text-sm text-stone-600">Years in Stone Industry</div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                    <div className="text-2xl font-bold text-stone-900">2</div>
                    <div className="text-sm text-stone-600">State-of-the-Art Facilities</div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                    <div className="text-2xl font-bold text-stone-900">5000+</div>
                    <div className="text-sm text-stone-600">Slabs in Inventory</div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                    <div className="text-2xl font-bold text-stone-900">100%</div>
                    <div className="text-sm text-stone-600">Customer Satisfaction</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919448987711?text=Hi%20Taruna%2C%20I'd%20like%20to%20discuss%20a%20project."
                  className="inline-block bg-stone-900 hover:bg-stone-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Connect with Taruna
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">1993 - The Beginning</h3>
                <p className="text-stone-700">
                  Founded in the heart of Jaipur, Rajasthan, Stones Gallery began as a 
                  family venture with a passion for natural stone. Starting with a modest 
                  showroom and deep connections with local marble quarries, we focused on 
                  bringing the finest Rajasthani marble to discerning clients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">2000s - Expansion & Innovation</h3>
                <p className="text-stone-700">
                  As demand grew, we expanded our operations to include granite, imported 
                  stones, and advanced CNC fabrication technology. Our commitment to quality 
                  and customer service earned us major contracts with architects, builders, 
                  and interior designers across North India.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">2010 - Temple Art Division</h3>
                <p className="text-stone-700">
                  Recognizing the cultural importance of preserving traditional stone 
                  carving, we established our Temple Sculptures division. Today, our 
                  workshop employs 20+ master artisans creating intricate Jain and Hindu 
                  temple elements using centuries-old techniques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">2018 - South India Facility</h3>
                <p className="text-stone-700">
                  To better serve pan-India clientele and access premium South Indian 
                  granite quarries, we opened our second facility in Tamil Nadu. This 
                  strategic expansion doubled our capacity and reduced delivery times for 
                  customers across southern and eastern India.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-stone-900">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Today - Industry Leaders</h3>
                <p className="text-stone-700">
                  With 30+ years of excellence, two state-of-the-art facilities, 5000+ 
                  slabs in inventory, and a team of 100+ experts, Stones Gallery continues 
                  to set industry standards. We blend traditional craftsmanship with modern 
                  technology, delivering exceptional results for residential, commercial, 
                  and spiritual projects nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Quality First</h3>
              <p className="text-stone-600">
                Every slab undergoes rigorous inspection. We only source from verified 
                quarries and maintain strict quality controls.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Customer Trust</h3>
              <p className="text-stone-600">
                Transparent pricing, honest advice, and lifetime support. Your satisfaction 
                is our success metric.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Craftsmanship</h3>
              <p className="text-stone-600">
                From CNC precision cutting to hand-carved temple art, we honor both modern 
                technology and ancient traditions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Sustainability</h3>
              <p className="text-stone-600">
                Responsible sourcing, minimal waste through precision cutting, and support 
                for ethical quarrying practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Expert Team Across India
            </h2>
            <p className="text-xl text-stone-700">
              Our success is built on the talent and dedication of over 100 professionals 
              spanning design consultants, master fabricators, installation specialists, 
              and traditional artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Fabrication Specialists
              </h3>
              <p className="text-stone-600 mb-4">
                30+ experts operating CNC machines, polishing equipment, and precision 
                cutting tools at our two facilities.
              </p>
              <div className="text-sm text-stone-500">
                Average 15+ years experience
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Master Artisans
              </h3>
              <p className="text-stone-600 mb-4">
                20+ traditional sculptors specializing in Jain and Hindu temple 
                architecture, trained in centuries-old techniques.
              </p>
              <div className="text-sm text-stone-500">
                Skills passed through generations
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Design Consultants
              </h3>
              <p className="text-stone-600 mb-4">
                Expert advisors helping architects and homeowners select perfect materials, 
                finishes, and layouts for every project.
              </p>
              <div className="text-sm text-stone-500">
                Free consultations available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Whether you're building a dream home, renovating a hotel, or creating a sacred 
            temple space, our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919448987711?text=Hi%20Stones%20Gallery%2C%20I'd%20like%20to%20discuss%20my%20project."
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              WhatsApp: +91 94489 87711
            </a>
            <Link
              href="/pages/our-collection"
              className="inline-block bg-white hover:bg-stone-100 text-stone-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
