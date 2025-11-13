export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  insight?: string;
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
  heroAlt: string;
  readTime: string;
  publishedOn: string;
  categories: string[];
  keywords: string[];
  sections: BlogSection[];
  stats?: { label: string; value: string }[];
  faqs?: BlogFAQ[];
  cta?: {
    label: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "luxury-marble-bangalore-lookbook",
    title: "Italian Marble & Luxury Stone Lookbook for Bengaluru Homes",
    summary:
      "Curated pairings of Italian marble, pistachio marble, onyx, and quartzite for penthouses from Indiranagar to Koramangala.",
    coverImage: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Luxury marble living room with pistachio marble accents",
    readTime: "5 min read",
    publishedOn: "Jan 2025",
    categories: ["Marble", "Design Inspiration"],
    keywords: [
      "italian marble bangalore",
      "luxury marble bangalore",
      "pistachio marble bangalore",
      "onyx stone bangalore",
      "designer marble india",
    ],
    sections: [
      {
        title: "Lobbies that glow in Indiranagar and Koramangala",
        paragraphs: [
          "Calacatta Monaco, Panda White, and Breccia Capraia remain the most requested foyer stones for Bengaluru duplexes. Pair them with bronzed mirrors, linear diffused lighting, and matte walnut paneling to let those bold veining patterns breathe.",
          "When homeowners want color, Pistachio marble and Red Jasper inserts deliver subtle drama without overwhelming the palette. We waterjet medallions off-site so installation windows stay short for occupied homes.",
        ],
        bullets: [
          "Use leather-finished Verde Alpi for stair underbellies",
          "Combine Portoro Gold with book-matched walnut veneer for cigar lounges",
          "Highlight display walls with 6000K track lights to amplify veining",
        ],
      },
      {
        title: "Kitchen and bath pairings that balance beauty with resilience",
        paragraphs: [
          "Quartzite slabs such as Taj Mahal, White Macaubas, and Perla Venata outperform soft marbles in humid Indian kitchens yet maintain the luxury aesthetic architects crave. For powder rooms, consider translucent onyx backed with LED panels—our installers pre-wire the panels for plug-and-play execution.",
          "Stone wash basins carved out of a single block remain a client favorite. We reinforce them with hidden stainless sleeves so they survive transport from Jigani to Whitefield or Sarjapur without hairline cracks.",
        ],
      },
      {
        title: "Furniture-grade craftsmanship for bespoke dining",
        paragraphs: [
          "Custom marble dining tables are trending across JP Nagar and Jayanagar, especially when paired with burnished brass inlays and sculpted stone pedestals. Each table is balanced with finite element analysis to prevent wobble and is sealed with nano coatings to resist wine or turmeric stains.",
          "Outdoor entertaining gets a facelift with granite bar counters, stone garden benches, and carved mural backdrops. We match cladding and furniture from the same quarry batch so the grains stay consistent under Bengaluru's daylight.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you help clients view slabs virtually?",
        answer: "Yes, Stones Gallery provides high-resolution scans, AR overlays, and live video walk-throughs for Italian marble lots so overseas clients can approve remotely.",
      },
      {
        question: "How do you protect polished marble during construction?",
        answer: "We offer breathable protective films and felt-lined crates plus post-install sealing to keep luxury stones spotless until handover.",
      },
    ],
    seo: {
      title: "Luxury Italian Marble Lookbook Bengaluru | Stones Gallery",
      description:
        "Discover pistachio marble, onyx, and quartzite pairings curated for Koramangala penthouses, Indiranagar duplexes, and resort villas across Bengaluru.",
      keywords: [
        "italian marble bangalore",
        "luxury marble bangalore",
        "pistachio marble bangalore",
        "onyx stone bangalore",
        "designer marble india",
      ],
    },
  },
  {
    slug: "temple-sculptures-jigani-workshop",
    title: "Inside Our Jigani Workshop: Temple Sculptures & Marble Idols",
    summary:
      "How master artisans craft mandir marble idols, deity murals, and sculpted temple accessories for projects in Bengaluru and overseas.",
    coverImage: "/showroomimage.webp",
    heroAlt: "Artisan chiseling a marble idol inside the Jigani workshop",
    readTime: "7 min read",
    publishedOn: "Dec 2024",
    categories: ["Sculptures", "Craftsmanship"],
    keywords: [
      "temple sculptures bangalore",
      "marble idols bangalore",
      "mandir marble murti bangalore",
      "custom stone carving bangalore",
      "bespoke stone sculpture india",
    ],
    sections: [
      {
        title: "From clay maquettes to CAD grading",
        paragraphs: [
          "Every idol begins with a clay or 3D-printed maquette that locks posture, drape, and mudra alignment. Clients review it over Zoom or in our Jigani studio before we touch natural stone.",
          "The approved model is translated into CAD slicing so our five-axis routers can rough-cut the marble block while preserving the artisan's overall proportions. This saves 20-30% carving time without compromising the hand-finished aura believers expect.",
        ],
      },
      {
        title: "Hand chiseling, inlay, and vastu compliance",
        paragraphs: [
          "Our master artisans take over once the routers finish. They carve facial expressions, jewelry, and garments using decades-old chisels. Each idol follows vastu and agama dimensions, which we document for temple committees.",
          "Gemstone, silver, or 24K gold leaf inlay is handled inside a dust-controlled bay so the final deity glows under sanctum lights. Even stone bells, balustrades, and temple murals are detailed to match the idol's motif.",
        ],
      },
      {
        title: "Packaging for export and pan-India installs",
        paragraphs: [
          "Once the idol clears qa, we cradle it inside marine-grade plywood boxes with vibration sensors. Install teams travel with the crate to homes in JP Nagar, Sarjapur Road villas, or overseas mandirs to ensure safe prana pratishta.",
          "For monumental projects, we provide 3D scanning and digital twins so future maintenance crews can recreate missing fragments with micron accuracy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we customise deity ornaments or throne motifs?",
        answer: "Absolutely. Send sketches or references and we will weave them into the CAD model before carving begins.",
      },
      {
        question: "Do you install temple sculptures outside India?",
        answer: "Yes, our team has executed mandirs in Singapore, the US, and the Middle East with complete documentation and insurance.",
      },
    ],
    seo: {
      title: "Temple Sculptures & Marble Idols Jigani Workshop",
      description:
        "Witness how Dish Impex LLP handcrafts marble idols, mandir sculptures, and temple accessories for Bengaluru homes and overseas shrines.",
      keywords: [
        "temple sculptures bangalore",
        "marble idols bangalore",
        "mandir marble murti bangalore",
        "custom stone carving bangalore",
        "temple sculpture manufacturer india",
      ],
    },
  },
  {
    slug: "exterior-stone-cladding-checklist",
    title: "Exterior Stone Cladding Checklist for Indian Villas",
    summary:
      "A practical checklist covering elevation tiles, parking-friendly granite, and weather protection for premium facades.",
    coverImage: "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Luxury villa exterior clad with natural stone tiles",
    readTime: "4 min read",
    publishedOn: "Nov 2024",
    categories: ["Architecture", "How-To"],
    keywords: [
      "exterior cladding stone bangalore",
      "stone elevation tiles bangalore",
      "parking tiles granite bangalore",
      "exterior stone cladding india",
    ],
    sections: [
      {
        title: "Designing for Bengaluru's climate swings",
        paragraphs: [
          "Switch between ventilated facades for humid zones like Yelahanka and bonded cladding for drier pockets. Always specify stainless or galvanised anchoring plus breathable waterproofing membranes to counter monsoon moisture.",
          "Parking tiles and driveway granites must be flame-textured to prevent skids during rains. Our Dark Roast and Kashmir White granites are bush-hammered with precise grit settings for maximum grip.",
        ],
      },
      {
        title: "Detailing that prevents callbacks",
        paragraphs: [
          "Expansion joints every 8-10 linear feet, weep holes at sill levels, and properly sealed miters keep facades pristine. Pre-seal all elevation tiles in the factory to avoid uneven blotches when site teams rush the job.",
          "We create shop drawings that align cladding patterns with window mullions and lighting points, ensuring zero awkward cuts around balconies or pergolas.",
        ],
        bullets: [
          "Label crates by elevation to speed up installation",
          "Use breathable epoxy grouts for high-movement façades",
          "Document cleaning manuals for facility teams",
        ],
      },
      {
        title: "Maintenance planning for long-term value",
        paragraphs: [
          "Offer clients a maintenance kit: PH-neutral cleaners, sealers, and inspection checklists. For projects outside Bengaluru, we partner with local applicators but ship the same products for consistency.",
          "Document expected patina evolution so homeowners appreciate how the stone will age. This transparency is a subtle yet powerful SEO signal because it builds trust and time-on-page.",
        ],
      },
    ],
    seo: {
      title: "Exterior Stone Cladding Checklist India",
      description:
        "Step-by-step guide for specifying facade stone, driveway granites, and weather protection for luxury villas across Bengaluru and India.",
      keywords: [
        "exterior cladding stone bangalore",
        "stone elevation tiles bangalore",
        "parking tiles granite bangalore",
        "exterior stone cladding india",
      ],
    },
  },
  {
    slug: "stone-furniture-trends-india",
    title: "Stone Furniture Trends Shaping Luxury Interiors in India",
    summary:
      "From custom marble dining tables to sculpted garden benches, discover how designers are specifying stone furniture in 2025.",
    coverImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Custom marble dining table with sculpted stone base",
    readTime: "5 min read",
    publishedOn: "Oct 2024",
    categories: ["Furniture", "Trend Report"],
    keywords: [
      "custom stone furniture india",
      "granite dining table bangalore",
      "stone wash basin bangalore",
      "garden stone bench bangalore",
      "luxury stone decor india",
    ],
    sections: [
      {
        title: "Dining tables that double as art",
        paragraphs: [
          "Free-form marble islands are now the social nucleus of JP Nagar and Sarjapur villas. We sculpt aerodynamic pedestals, embed brass or smoked mirrors, and finish the surfaces with nano sealers so turmeric, balsamic, or red wine stains never leave a trace.",
          "Extend the experience outdoors with granite dining tables anchored to concealed steel plates. They resist Bengaluru's heat and monsoons while keeping the silhouette impossibly slim.",
        ],
      },
      {
        title: "Spa-inspired wash basins and wellness suites",
        paragraphs: [
          "Stone wash basins carved from single blocks make bathrooms feel like boutique resorts. Pair them with matte-black fixtures, indirect lighting, and textured wall panels for a meditative experience.",
          "Quartzite shelves, stone bathtubs, and sculpted planters bring the same serenity into wellness suites and home gyms, reinforcing your brand as the go-to for luxury stone decor in India.",
        ],
      },
      {
        title: "Garden sculptures built for longevity",
        paragraphs: [
          "Garden benches, fountains, and murals face harsh UV exposure. We coat them with invisible nano-shields and engineer drainage channels to avoid moss buildup.",
          "Landscape architects love pairing stone murals with lighting scenes. Our team pre-installs conduits behind each mural so site electricians can plug-and-play without chiseling freshly installed art.",
        ],
      },
    ],
    seo: {
      title: "Stone Furniture Trends India 2025",
      description:
        "Custom marble dining tables, sculpted garden benches, and stone wash basins defining luxury interiors across Bengaluru and India.",
      keywords: [
        "custom stone furniture india",
        "granite dining table bangalore",
        "stone wash basin bangalore",
        "garden stone bench bangalore",
        "luxury stone decor india",
      ],
    },
  },
  {
    slug: "exporting-stone-from-india",
    title: "How Stones Gallery Powers Pan-India & Global Stone Exports",
    summary:
      "Our export desk supports architects, retailers, and developers with curated lots, documentation, and quality checks.",
    coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Stone slabs being loaded into a shipping container",
    readTime: "6 min read",
    publishedOn: "Sep 2024",
    categories: ["Exports", "Operations"],
    keywords: [
      "natural stone exporter india",
      "granite slabs exporter india",
      "stone exporter jigani",
      "premium granite slabs india",
      "stone gallery near me",
    ],
    sections: [
      {
        title: "Lot curation & quality assurance",
        paragraphs: [
          "We handpick blocks from trusted quarries, supervise gangsaw calibration, and audit polishing gloss units before a single slab is crated. Detailed moisture and thickness reports accompany every lot so overseas buyers know exactly what is arriving.",
          "Digital twins—high-resolution scans with measurement overlays—are shared over our export portal. This documentation reduces disputes and boosts buyer confidence, key signals for SEO trustworthiness.",
        ],
      },
      {
        title: "Documentation & compliance",
        paragraphs: [
          "Exports are only as strong as their paperwork. We package Form-A certificates, fumigation reports, HS codes, packing lists, insurance letters, and country-specific compliance notes inside a single dashboard.",
          "Clients in the Middle East, Europe, and North America lean on us for Bureau of Indian Standards (BIS) inspections, SGS testing, and third-party audits.",
        ],
      },
      {
        title: "Logistics & aftercare",
        paragraphs: [
          "Mixed-container shipments that combine marble, granite, temple idols, and furniture save freight costs. Our team supervises stuffing inside our Jigani warehouse, installs impact sensors, and shares live tracking till port delivery.",
          "Even after customs clearance, we stay on call to coordinate local installers or dispatch spare slabs. This concierge approach turns one-off exports into multi-year relationships.",
        ],
      },
    ],
    cta: {
      label: "Book an Export Consultation",
      href: "/pages/our-contact",
    },
    seo: {
      title: "Natural Stone Exporter India | Stones Gallery",
      description:
        "Learn how Dish Impex LLP consolidates premium marble, granite, idols, and furniture for global exports with airtight documentation and QA.",
      keywords: [
        "natural stone exporter india",
        "granite slabs exporter india",
        "stone exporter jigani",
        "premium granite slabs india",
        "stone gallery near me",
      ],
    },
  },
];

export const findBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
