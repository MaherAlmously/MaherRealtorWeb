import {
  Calculator,
  ClipboardList,
  Handshake,
  Home,
  KeyRound,
  MapPin,
  MessageSquareText,
  Search,
  Tag,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export type ActionCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export type ProcessStep = { title: string; description: string };

export type WhyPoint = { icon: LucideIcon; title: string; description: string };

export const siteConfig = {
  name: "Maher Almously",
  brandLine: "Texas REALTOR® | DFW Real Estate",
  brandLineShort: "DFW REALTOR®",
  role: "Real Estate Agent",
  region: "DFW and North Texas",
  phoneDisplay: "(817) 501-0172",
  phoneHref: "tel:8175010172",
  smsHref: "sms:8175010172",
  email: "connect@maherealtor.com",
  emailHref: "mailto:connect@maherealtor.com",

  metadata: {
    title: "Buy, Sell, or Rent in DFW | Maher Almously, REALTOR®",
    description:
      "Buying, selling, or renting in Dallas-Fort Worth? Maher Almously helps you compare the real numbers, avoid overpaying, and move with a clear plan. Text or call (817) 501-0172.",
    keywords: [
      "DFW real estate agent",
      "Dallas Fort Worth REALTOR",
      "homes for sale DFW",
      "homes for rent DFW",
      "sell my home DFW",
      "North Texas real estate",
      "Maher Almously",
    ],
    siteUrl: "https://maherealtor.com",
  },

  nav: [
    { label: "Listing", href: "#listing" },
    { label: "Buy", href: "#buy" },
    { label: "Sell", href: "#sell" },
    { label: "Rent", href: "#rent" },
    { label: "Lease", href: "#lease" },
    { label: "Areas Served", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "DFW and North Texas real estate",
    headlineWords: ["Buy", "Sell", "Rent", "Lease"],
    headlineSuffix: "in DFW with the numbers in front of you.",
    support:
      "Buying, selling, or renting in North Texas moves fast. I help you compare the numbers, understand your options, and move with a clear plan.",
    ctaPrimary: { label: "Text Me", href: "sms:8175010172" },
    ctaSecondary: { label: "Call Me", href: "tel:8175010172" },
    ctaTertiary: { label: "Explore Renting", href: "#rent" },
    panel: {
      title: "Start here",
      rows: [
        {
          icon: Home,
          title: "Buying a home",
          description: "Get prepared, compare homes, and make strong offers.",
          href: "#buy",
        },
        {
          icon: Tag,
          title: "Selling a home",
          description: "Price it right, prep what matters, and negotiate well.",
          href: "#sell",
        },
        {
          icon: KeyRound,
          title: "Renting or leasing",
          description: "Find a rental or get your property leased to a qualified tenant.",
          href: "#rent",
        },
      ],
      textLabel: "Text or call me",
    },
  },

  quickActions: [
    {
      icon: Search,
      title: "Search Homes",
      description:
        "Tell me your price range, areas, and must haves. I set up a tailored MLS search so real matches come straight to you.",
      ctaLabel: "Start a search",
      href: "#contact",
    },
    {
      icon: Calculator,
      title: "Renting & Leasing",
      description:
        "Looking for a rental, or need your property leased? I work with both renters and landlords across DFW.",
      ctaLabel: "Explore renting",
      href: "#rent",
    },
    {
      icon: ClipboardList,
      title: "Selling Consultation",
      description:
        "Walk through timing, prep, pricing, and what your net could look like before you commit to anything.",
      ctaLabel: "Plan the sale",
      href: "#sell",
    },
    {
      icon: KeyRound,
      title: "First-Time Buyer Help",
      description:
        "From getting pre-approved to writing your first offer, get plain answers to the questions you feel you should already know.",
      ctaLabel: "Start the conversation",
      href: "#contact",
    },
  ] satisfies ActionCard[],

  listings: {
    eyebrow: "Listings",
    title: "Current Listings",
    lead: "Homes I represent right now. New listings appear here as they hit the market.",
    textLabel: "Text Me",
    callLabel: "Call Me",
    openSlot: {
      title: "Your house could be here",
      copy: "Get a pricing review and a marketing plan, and yours can be the next listing on this page.",
      ctaLabel: "Start the conversation",
      href: "#contact",
    },
    items: [
      {
        slug: "814-honey-hill",
        status: "For Lease",
        address: "814 Honey Hill Drive",
        cityStateZip: "Garland, TX 75040",
        price: "$3,495",
        priceSuffix: "/mo",
        availability: "Available September 1, 2026",
        photos: [
          { src: "/listings/814-honey-hill/00-front.jpeg", alt: "Front of the home at 814 Honey Hill Drive" },
          { src: "/listings/814-honey-hill/05.jpeg", alt: "Front entrance with stone archway" },
          { src: "/listings/814-honey-hill/08.jpeg", alt: "Covered patio with extended outdoor living area" },
          { src: "/listings/814-honey-hill/10.jpeg", alt: "Backyard with pergola and gardens" },
          { src: "/listings/814-honey-hill/09.jpeg", alt: "Backyard gardens and mature trees" },
          { src: "/listings/814-honey-hill/04.jpeg", alt: "Side view of the home and yard" },
        ],
        facts: [
          { label: "Beds", value: "6" },
          { label: "Baths", value: "3" },
          { label: "Sq Ft", value: "3,381" },
          { label: "Garage", value: "2 car" },
        ],
        description:
          "Spacious two story home on a corner lot with two living areas, two dining areas, an upstairs game room, and a downstairs bedroom with a full bath. The updated kitchen has granite countertops and a center island, and the covered patio overlooks the largest backyard in the neighborhood. Minutes from Firewheel Town Center and President George Bush Turnpike, in Garland ISD with school choice.",
        details: [
          { label: "Lease term", value: "12 months minimum" },
          { label: "School district", value: "Garland ISD" },
          { label: "Year built", value: "2005" },
          { label: "Pets", value: "Considered case by case" },
        ],
        externalLinks: [
          {
            label: "View on Realtor.com",
            href: "https://www.realtor.com/rentals/details/814-Honey-Hill-Dr_Garland_TX_75040_M76173-11566",
          },
          {
            label: "View on Zillow",
            href: "https://www.zillow.com/homedetails/814-Honey-Hill-Dr-Garland-TX-75040/69671623_zpid/",
          },
        ],
        ctaNote: "Showings by appointment. Text or call to schedule a tour.",
      },
    ],
  },

  about: {
    eyebrow: "About",
    title: "Meet Maher",
    paragraphs: [
      "I'm Maher Almously, a real estate agent working across Dallas-Fort Worth and North Texas. I work with buyers, sellers, and renters at every price point, and I run every decision through one filter: does this make sense for you, on paper and in real life?",
      "Before you commit to anything, you should understand the numbers behind it: pricing, closing costs, comparable sales. I lay that out in plain language and connect you with trusted lenders for financing.",
      "No pressure, no countdown clock. Just direct answers and practical advice, whether you're buying your first home, selling a longtime one, or renting.",
    ],
    facts: [
      { label: "Serves", value: "DFW and North Texas" },
      { label: "Works with", value: "Buyers, sellers, and renters" },
      { label: "Focus", value: "Clear numbers, practical advice" },
      { label: "Phone", value: "(817) 501-0172" },
    ],
    badges: ["Buyer representation", "Seller representation", "Renting & leasing"],
  },

  buying: {
    eyebrow: "For buyers",
    title: "Buying with Me",
    lead: "A purchase this size deserves a process, not guesswork. Here is how it runs.",
    steps: [
      {
        title: "Get prepared",
        description:
          "Start with a short conversation about your timeline, your budget, and what matters in the next home. No commitment, just clarity on where you stand.",
      },
      {
        title: "Get pre-approved",
        description:
          "Financing questions go to the pros. I connect you with trusted local lenders so you can get pre-approved, know your real range, and make offers sellers take seriously.",
      },
      {
        title: "Compare homes with real data",
        description:
          "Tour with purpose. I pull the comparable sales and flag condition issues, so you know what a fair price looks like on each home.",
      },
      {
        title: "Offer strategy",
        description:
          "Whether the market is competitive or quiet, I structure terms that protect you: price, option period, financing, and timing that fit the situation.",
      },
      {
        title: "Inspections and closing",
        description:
          "Use the inspection to negotiate repairs or credits where it is justified, then move through appraisal, final walkthrough, and closing on schedule.",
      },
    ] satisfies ProcessStep[],
    cta: {
      note: "Thinking about buying in the next year? The earlier we talk, the better your position.",
      textLabel: "Text Me",
      formLabel: "Or start with the form",
    },
  },

  selling: {
    eyebrow: "For sellers",
    title: "Selling with Me",
    lead: "The goal is simple: the strongest net, on your timeline, with no surprises.",
    steps: [
      {
        title: "Pricing review",
        description:
          "See what nearby homes actually sold for, not just what they listed at, and set a price that draws real buyers without leaving money behind.",
      },
      {
        title: "Home prep",
        description:
          "Focus only on the fixes and touch ups that change your net. Skip the projects that will not return their cost.",
      },
      {
        title: "Marketing plan",
        description:
          "Professional photos, an accurate and compelling listing, and exposure where DFW buyers are actually looking.",
      },
      {
        title: "Showing strategy",
        description:
          "Set a showing schedule that keeps momentum without turning your household upside down.",
      },
      {
        title: "Offer review and negotiation",
        description:
          "Compare offers side by side: price, financing strength, contingencies, and closing dates. I negotiate from the numbers.",
      },
      {
        title: "Closing plan",
        description:
          "Track every deadline from contract to closing table so nothing stalls, and know your estimated net before you sign.",
      },
    ] satisfies ProcessStep[],
  },

  renting: {
    eyebrow: "For renters",
    title: "Renting with Me",
    lead: "Looking for a place to rent? Here's how I help you find it.",
    steps: [
      {
        title: "Tell me what you need",
        description:
          "Share your budget, area, and must haves, and I'll know what to look for on your behalf.",
      },
      {
        title: "See real options",
        description:
          "I set up a tailored search so real available rentals that match your criteria come straight to you.",
      },
      {
        title: "Tour homes",
        description:
          "I schedule showings that fit your schedule and flag anything worth asking the landlord about.",
      },
      {
        title: "Put together your application",
        description:
          "I help you prepare a strong application so you stand out to landlords and property managers.",
      },
      {
        title: "Lease signing",
        description:
          "Review the lease terms together so you know exactly what you're agreeing to before you sign.",
      },
    ] satisfies ProcessStep[],
    panel: {
      title: "Ready to find a rental?",
      copy: "Tell me your budget, area, and must haves, and I'll start matching you with real available rentals.",
      textLabel: "Text (817) 501-0172",
      reviewLabel: "Start the conversation",
    },
  },

  leasing: {
    eyebrow: "For landlords",
    title: "Leasing with Me",
    lead: "Need your property leased? Here's how I get it rented to a qualified tenant.",
    steps: [
      {
        title: "Property review",
        description:
          "Share your property details, timeline, and rent goals so I know what we're working with.",
      },
      {
        title: "Pricing",
        description:
          "I run comps on comparable rentals so your property is priced to lease quickly without leaving money behind.",
      },
      {
        title: "Marketing",
        description:
          "Professional photos, an accurate listing, and exposure where qualified tenants are actually looking.",
      },
      {
        title: "Screening",
        description:
          "I screen applicants for income, rental history, and background so you get a tenant you can trust.",
      },
      {
        title: "Lease signing",
        description:
          "Finalize lease terms and get everything documented before your new tenant moves in.",
      },
    ] satisfies ProcessStep[],
    panel: {
      title: "Ready to lease your property?",
      copy: "Share your property details and timeline, and I'll get it priced, marketed, and leased to a qualified tenant.",
      textLabel: "Text (817) 501-0172",
      reviewLabel: "Start the conversation",
    },
  },

  areas: {
    eyebrow: "Service area",
    title: "Areas served",
    lead: "Based in the Dallas-Fort Worth area, I work with buyers and sellers across North Texas, including:",
    list: [
      "Dallas",
      "Fort Worth",
      "Plano",
      "Garland",
      "Arlington",
      "Irving",
      "Richardson",
      "Frisco",
      "McKinney",
      "Allen",
      "Denton",
      "Grapevine",
      "Mesquite",
      "Carrollton",
      "Lewisville",
      "Rockwall",
      "Southlake",
      "Flower Mound",
      "Euless",
      "Bedford",
      "Grand Prairie",
      "Prosper",
      "Wylie",
    ],
    closer:
      "Not on the list? Most North Texas communities are within range. Ask and you will get a straight answer.",
  },

  why: {
    eyebrow: "Why me",
    title: "Why work with me",
    points: [
      {
        icon: MessageSquareText,
        title: "Clear, direct communication",
        description:
          "You always know where things stand and what happens next, plus straight answers before any big decision.",
      },
      {
        icon: MapPin,
        title: "Local market focus",
        description:
          "DFW is not one market. Pricing and competition vary by city and neighborhood, and my strategy follows the local data.",
      },
      {
        icon: Handshake,
        title: "A coordinated team behind you",
        description:
          "I connect you with trusted lenders and stay coordinated with them so financing never stalls your deal.",
      },
    ] satisfies WhyPoint[],
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to Me",
    lead: "Questions about a home, your budget, or what yours would sell for? Text or call. It is the fastest way to get a real answer from me.",
    voicemailNote:
      "If the call goes to voicemail, leave your name and number and I'll get back to you.",
    form: {
      title: "Or send your details",
      subtitle: "This goes straight to me.",
      intents: [
        { value: "buy", label: "Buy a home" },
        { value: "sell", label: "Sell a home" },
        { value: "rent", label: "Rent a home" },
        { value: "lease", label: "Lease my property" },
        { value: "other", label: "Something else" },
      ],
      submitLabel: "Send message",
      submittingLabel: "Sending...",
      success: {
        title: "Message sent",
        subtitle: "I have it and will follow up soon. If it is urgent, text or call now.",
        callLabel: "Call Me",
        textLabel: "Text Me",
        resetLabel: "Send another message",
      },
    },
  },

  footer: {
    tagline: "Real estate for buyers, sellers, and renters across DFW and North Texas.",
    equalHousing: "Equal Housing Opportunity",
    credit: "Site built by Maxora.tech",
    brokerage: {
      name: "Metroplex Realty Brokerage Services LLC",
      line: "Brokered by Metroplex Realty Brokerage Services LLC",
    },
    // TREC requires both links on the homepage in a readily noticeable place.
    legal: [
      {
        label:
          "Texas Real Estate Commission Information About Brokerage Services",
        href: "/iabs-maher-almously.pdf",
      },
      {
        label: "Texas Real Estate Commission Consumer Protection Notice",
        href: "https://www.trec.texas.gov/forms/consumer-protection-notice",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
