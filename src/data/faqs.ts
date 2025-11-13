// FAQ data for Stones Gallery - Optimized for FAQPage schema
// Covers all major customer queries for maximum SEO impact

export interface FAQ {
  question: string;
  answer: string;
  category: 'product' | 'pricing' | 'installation' | 'location' | 'custom' | 'delivery';
}

export const faqCategories = {
  product: 'Products & Materials',
  pricing: 'Pricing & Quotations',
  installation: 'Installation & Maintenance',
  location: 'Locations & Visits',
  custom: 'Custom Orders & Sculptures',
  delivery: 'Delivery & Logistics'
};

export const faqs: FAQ[] = [
  // PRODUCT QUERIES
  {
    category: 'product',
    question: 'What types of marble and granite do you supply?',
    answer: 'Stones Gallery supplies premium Italian marble (Calacatta, Statuario, Carrara), Indian marble (Makrana, Dholpur), imported granite (Nero Santiago, Azul Bahia), Indian granite (Dark Roast, Black Galaxy, Hassan Green), quartzite, onyx, and semi-precious stones. We stock 200+ varieties across our Jaipur and Tamil Nadu facilities.'
  },
  {
    category: 'product',
    question: 'Do you sell temple sculptures and marble idols?',
    answer: 'Yes, we specialize in handcrafted temple sculptures, marble murtis, Ganesha idols, deity statues, and custom mandir installations. Our artisans create pieces ranging from 6-inch tabletop idols to 10-foot temple installations using premium Makrana and Dungri marble.'
  },
  {
    category: 'product',
    question: 'What is the difference between Italian marble and Indian marble?',
    answer: 'Italian marble (like Calacatta, Statuario) features bold, dramatic veining, higher translucency, and premium pricing (₹400-2000/sq ft). Indian marble (Makrana, Dholpur) offers subtle patterns, excellent durability, and cost-effectiveness (₹80-300/sq ft). Both are suitable for luxury projects; choice depends on aesthetic preference and budget.'
  },
  {
    category: 'product',
    question: 'Which granite is best for kitchen countertops in Bangalore?',
    answer: 'For Bangalore kitchens, we recommend Dark Roast granite, Black Galaxy, Hassan Green, or imported options like Nero Santiago. These are heat-resistant, low-maintenance, non-porous, and ideal for Indian cooking. Prices range from ₹120/sq ft (Indian) to ₹350/sq ft (imported). All come with 10-year warranty on quality.'
  },
  {
    category: 'product',
    question: 'Do you provide stone samples before placing large orders?',
    answer: 'Yes! We provide physical samples (6x6 inch or 12x12 inch) for ₹500-1500 per sample (refundable on order ≥100 sq ft). We also offer virtual consultations with live slab videos via WhatsApp. Visit our Jigani showroom or Tamil Nadu facility to view full slabs in person.'
  },

  // PRICING QUERIES
  {
    category: 'pricing',
    question: 'What is the price range for Italian marble in India?',
    answer: 'Italian marble pricing: Statuario (₹800-2000/sq ft), Calacatta (₹600-1500/sq ft), Carrara (₹400-800/sq ft), Botticino (₹350-600/sq ft). Prices include material cost; installation, polishing, and GST are additional. Bulk orders (>500 sq ft) qualify for 10-15% discounts. Contact us for project-specific quotations.'
  },
  {
    category: 'pricing',
    question: 'How much does granite flooring cost per square foot?',
    answer: 'Granite flooring costs: Indian varieties (₹80-200/sq ft for material + ₹40-60/sq ft installation), imported granite (₹200-400/sq ft + ₹50-80/sq ft installation). Total installed cost: ₹120-480/sq ft. Factors affecting price: thickness (18mm vs 20mm), finish (polished/leather/honed), and project size.'
  },
  {
    category: 'pricing',
    question: 'Do you offer discounts for bulk orders or builders?',
    answer: 'Yes! Bulk pricing: 5-10% off for 500-1000 sq ft, 10-15% off for 1000-3000 sq ft, 15-20% off for >3000 sq ft. Builder/architect packages include dedicated account manager, priority delivery, 60-day credit terms, and free site visits. Register as trade partner for exclusive rates.'
  },
  {
    category: 'pricing',
    question: 'What is the cost of custom marble idols?',
    answer: 'Custom marble idol pricing: Small idols 6-12 inches (₹3,000-15,000), medium 2-4 feet (₹25,000-1,50,000), large 5-8 feet (₹2,00,000-10,00,000), temple installations >8 feet (₹15,00,000+). Cost depends on marble quality (Makrana premium/standard), intricacy, size, and finishing. 50% advance required; 8-12 weeks crafting time.'
  },

  // INSTALLATION QUERIES
  {
    category: 'installation',
    question: 'Do you provide installation services in Bangalore and other cities?',
    answer: 'Yes, we provide turnkey installation across Bangalore (Jigani, Whitefield, Indiranagar, JP Nagar, Koramangala) and pan-India (Delhi NCR, Mumbai, Hyderabad, Chennai, Pune, Ahmedabad, Jaipur, Kolkata). Our certified installers handle flooring, countertops, wall cladding, and sculptures. Installation cost: ₹40-100/sq ft depending on complexity.'
  },
  {
    category: 'installation',
    question: 'How long does marble or granite installation take?',
    answer: 'Installation timelines: Flooring (1000 sq ft): 7-10 days, Kitchen countertops: 2-3 days, Bathroom vanity: 1-2 days, Full villa (3000 sq ft flooring + countertops): 3-4 weeks. Includes surface preparation, cutting, polishing, and sealing. Rush installations available for 20% premium.'
  },
  {
    category: 'installation',
    question: 'How do I maintain Italian marble flooring?',
    answer: 'Italian marble maintenance: Daily - dry mop or vacuum, weekly - damp mop with pH-neutral cleaner, monthly - apply marble sealer, annually - professional re-polishing. Avoid acidic cleaners (vinegar, lemon), immediately wipe spills, use coasters under glasses, and place mats at entryways. Professional maintenance plans available at ₹5,000-15,000/year.'
  },
  {
    category: 'installation',
    question: 'What warranty do you provide on stones and installation?',
    answer: 'Material warranty: 10 years on structural integrity, color consistency, and manufacturing defects. Installation warranty: 2 years on workmanship (cracking, uneven joints, hollow sounds). Excludes damage from accidents, chemical spills, or improper maintenance. Extended warranties available. All claims processed within 48 hours with free site inspection.'
  },

  // LOCATION QUERIES
  {
    category: 'location',
    question: 'Where are your showrooms and factories located?',
    answer: 'North India: Jaipur, Rajasthan - Near Kurkure Factory, Mokhampura Choraha, Jaipur-Kishangarh-Ajmer NH (showroom + factory). South India: Tamil Nadu - Krishnagiri District, Pillaikothur Village, Konerpalli Post (processing facility). Bangalore: Virtual showroom at Jigani Industrial Area with samples. Book appointments via WhatsApp: +91 94489 87711.'
  },
  {
    category: 'location',
    question: 'Can I visit your factory to select stones personally?',
    answer: 'Absolutely! Factory visits welcome at both locations (Jaipur & Tamil Nadu) Monday-Saturday, 9 AM - 6 PM. See 5000+ slabs, live cutting demos, and artisan workshops. Complimentary consultation with stone expert. Book 24 hours in advance. We also arrange virtual tours via video call for outstation clients.'
  },
  {
    category: 'location',
    question: 'Do you deliver to cities like Delhi, Mumbai, Hyderabad, and Chennai?',
    answer: 'Yes! We deliver pan-India: Metro cities (Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Kochi, Jaipur) - 7-14 days. Tier-2 cities - 14-21 days. Remote areas - 21-30 days. Delivery includes professional packing, GPS tracking, insurance, and unloading assistance. Shipping: ₹20-50/sq ft depending on distance and order size.'
  },

  // CUSTOM ORDERS
  {
    category: 'custom',
    question: 'Can you create custom temple mandirs for homes?',
    answer: 'Yes! We design and install custom home mandirs in marble, granite, or wood-stone combinations. Services include: 3D design renders, personalized deity selection, LED lighting integration, traditional or contemporary styles, and full installation. Sizes from 3x3 ft wall-mounted to 8x6 ft freestanding temples. Pricing: ₹50,000-10,00,000. Turnaround: 6-10 weeks.'
  },
  {
    category: 'custom',
    question: 'Do you make customized stone furniture like dining tables?',
    answer: 'Yes, we craft bespoke stone furniture: Dining tables (4-seater to 12-seater), coffee tables, console tables, side tables, outdoor benches, and garden planters. Materials: Granite, marble, quartzite, or stone-wood hybrids. Custom sizes, edge profiles, and base designs. Pricing: ₹40,000-5,00,000. Portfolio available on request.'
  },
  {
    category: 'custom',
    question: 'How long does it take to create a custom marble sculpture?',
    answer: 'Custom sculpture timelines: Simple designs (Ganesha, Laxmi 2-3 ft): 4-6 weeks, intricate multi-deity pieces: 8-12 weeks, large temple installations (>8 ft): 12-20 weeks. Process: Design approval → clay maquette → client review → stone carving → polishing → installation. 50% advance, 25% on maquette approval, 25% on delivery.'
  },

  // DELIVERY & LOGISTICS
  {
    category: 'delivery',
    question: 'What is your delivery and shipping policy?',
    answer: 'Delivery timeline: Bangalore/local (50 km): 3-7 days, metro cities: 7-14 days, pan-India: 14-30 days. We use professional logistics partners with GPS tracking, insurance coverage, and dedicated unloading crew. Shipping charges: ₹20-50/sq ft (varies by distance and order size). Free delivery on orders >₹2,00,000 within 200 km radius.'
  },
  {
    category: 'delivery',
    question: 'Do you ship internationally for temple idols and sculptures?',
    answer: 'Yes! We export to USA, UK, Canada, UAE, Singapore, Australia, and 20+ countries. Services include: Export-quality packing (wooden crates, foam padding), customs documentation, door-to-door delivery, and installation support via partner networks. International shipping: $50-200 per crate. Lead time: 4-8 weeks. We handle all paperwork and compliance.'
  },
  {
    category: 'delivery',
    question: 'What if the stone arrives damaged?',
    answer: 'All shipments are fully insured and professionally packed. In rare damage cases: Report within 48 hours with photos → free replacement piece shipped within 7-14 days → we handle insurance claim. Quality checks at 3 stages (factory, packing, delivery) ensure <0.5% damage rate. Zero customer liability for transit damage.'
  },

  // ADDITIONAL HIGH-VALUE QUERIES
  {
    category: 'product',
    question: 'What is the difference between polished, honed, and leathered granite?',
    answer: 'Polished granite: High-gloss mirror finish, shows veining vividly, best for low-traffic areas, requires regular sealing. Honed granite: Matte/satin finish, hides scratches better, ideal for high-traffic floors, less slippery. Leathered granite: Textured finish, stain-resistant, perfect for countertops, modern aesthetic. Polished is most popular (60% orders), leathered is trending for kitchens.'
  },
  {
    category: 'installation',
    question: 'Can granite be used for outdoor applications?',
    answer: 'Yes! Granite is excellent for outdoor use: Patios, walkways, pool decks, garden paths, exterior wall cladding, and monuments. Benefits: Weather-resistant, frost-proof, UV-stable, non-slip (flamed/bush-hammered finish). Recommended: Hassan Green, Rajasthan Black, Tan Brown. Thickness: 20-30mm for flooring. Outdoor granite: ₹100-250/sq ft installed.'
  },
  {
    category: 'pricing',
    question: 'Are there hidden costs in marble and granite projects?',
    answer: 'Transparent pricing includes: Material cost, cutting/polishing, transportation, installation labor, and basic sealing. Additional costs (disclosed upfront): Complex edge profiles (+₹150-500/running ft), special finishes (+10-20%), underlayment/waterproofing (+₹20-40/sq ft), staircase nosing (+₹300-800/step), demolition/removal of old flooring (+₹30-60/sq ft). No hidden charges - guaranteed!'
  },
  {
    category: 'custom',
    question: 'Can you replicate a design from a photo or Pinterest?',
    answer: 'Absolutely! Send us photos, Pinterest boards, or sketches. Our design team creates 3D renders or physical mockups for approval before production. We replicate: Countertop designs, backsplash patterns, flooring layouts, idol poses, furniture styles, and architectural elements. Replication fee: ₹5,000-20,000 (included in order >₹2,00,000). Turnaround: 2-4 weeks for design + production.'
  }
];

// Generate FAQ schema for SEO
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
