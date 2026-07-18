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
  TrendingUp,
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
    title: "Buy or Sell in DFW | Maher Almously, REALTOR®",
    description:
      "Buying or selling in Dallas-Fort Worth? Maher Almously helps you compare the real numbers, avoid overpaying, and move with a clear plan. Text or call (817) 501-0172.",
    keywords: [
      "DFW real estate agent",
      "Dallas Fort Worth REALTOR",
      "homes for sale DFW",
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
    { label: "Home Value", href: "#home-value" },
    { label: "Areas Served", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "DFW and North Texas real estate",
    headlineWords: ["Buy", "Sell", "Rent", "Invest"],
    headlineSuffix: "in DFW with the numbers in front of you.",
    support:
      "Buying or selling in North Texas moves fast. I help you compare the numbers, understand your options, and move with a clear plan.",
    ctaPrimary: { label: "Text Me", href: "sms:8175010172" },
    ctaSecondary: { label: "Call Me", href: "tel:8175010172" },
    ctaTertiary: { label: "Request Home Value", href: "#home-value" },
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
          icon: TrendingUp,
          title: "What is my home worth?",
          description: "Get a straight pricing review built on recent sales.",
          href: "#home-value",
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
      title: "Request Home Value",
      description:
        "Get a pricing review based on the sales that actually compare to your home, not an automated estimate.",
      ctaLabel: "Request a review",
      href: "#home-value",
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
        listingUrl:
          "https://www.realtor.com/rentals/details/814-Honey-Hill-Dr_Garland_TX_75040_M76173-11566",
        listingUrlLabel: "View on Realtor.com",
        ctaNote: "Showings by appointment. Text or call to schedule a tour.",
      },
    ],
  },

  about: {
    eyebrow: "About",
    title: "Meet Maher",
    paragraphs: [
      "I'm Maher Almously, a real estate agent working across Dallas-Fort Worth and the surrounding North Texas communities. I work with buyers and sellers at every price point, and I run every decision through the same filter: does this make sense for you, on paper and in real life?",
      "My approach is simple. Before you commit to anything, you should understand the numbers behind it. Pricing, closing costs, and what the comparable sales actually say. I lay those out in plain language, and for financing I connect you with trusted lenders who can walk you through your options.",
      "You will not get pressure or a countdown clock from me. You will get direct answers, honest tradeoffs, and practical advice, whether you are buying your first home or selling a longtime one.",
    ],
    facts: [
      { label: "Serves", value: "DFW and North Texas" },
      { label: "Works with", value: "Buyers and sellers" },
      { label: "Focus", value: "Clear numbers, practical advice" },
      { label: "Phone", value: "(817) 501-0172" },
    ],
    badges: ["Buyer representation", "Seller representation", "Home value reviews"],
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

  homeValue: {
    title: "What is your home worth right now?",
    copy: "Automated estimates miss remodels, upgrades, and how fast your street is moving. Text me and I'll get you a number you can actually plan around.",
    textLabel: "Text (817) 501-0172",
    reviewLabel: "Request a review",
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
      subtitle: "This goes straight to me, whether you're on a phone or a computer.",
      intents: [
        { value: "buy", label: "Buy a home" },
        { value: "sell", label: "Sell a home" },
        { value: "home-value", label: "Get a home value review" },
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
    tagline: "Real estate for buyers and sellers across DFW and North Texas.",
    equalHousing: "Equal Housing Opportunity",
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
