import {
  Calculator,
  ClipboardList,
  Home,
  KeyRound,
  ListChecks,
  MapPin,
  MessageSquareText,
  Percent,
  Scale,
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
  role: "Real Estate Agent",
  region: "DFW and North Texas",
  phoneDisplay: "(817) 501-0172",
  phoneHref: "tel:8175010172",
  smsHref: "sms:8175010172",

  metadata: {
    title: "Maher Almously | Real Estate Agent in DFW and North Texas",
    description:
      "Maher Almously helps buyers and sellers across Dallas, Plano, Garland, Richardson, Frisco, McKinney, and Allen compare the numbers and move with a clear plan. Call or text (817) 501-0172.",
  },

  nav: [
    { label: "Buy", href: "#buy" },
    { label: "Sell", href: "#sell" },
    { label: "Home Value", href: "#home-value" },
    { label: "Areas Served", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "DFW and North Texas real estate",
    headline: "Buy or sell in DFW with the numbers in front of you.",
    support:
      "Buying or selling in North Texas moves fast. Maher helps you compare the numbers, understand your options, and move with a clear plan.",
    ctaPrimary: { label: "Call Maher", href: "tel:8175010172" },
    ctaSecondary: { label: "Request Home Value", href: "#home-value" },
    ctaTertiary: { label: "Buyer Consultation", href: "#contact" },
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
      callLabel: "Call or text Maher",
    },
  },

  quickActions: [
    {
      icon: Search,
      title: "Search Homes",
      description:
        "Tell Maher your price range, areas, and must haves. He sets up a tailored MLS search so real matches come straight to you.",
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
        "From loan options to your first offer, get plain answers to the questions you feel you should already know.",
      ctaLabel: "Start the conversation",
      href: "#contact",
    },
  ] satisfies ActionCard[],

  about: {
    eyebrow: "About",
    title: "Meet Maher",
    paragraphs: [
      "Maher Almously is a real estate agent working across Dallas-Fort Worth and the surrounding North Texas communities. He works with buyers and sellers at every price point, and he runs every decision through the same filter: does this make sense for you, on paper and in real life?",
      "His approach is simple. Before you commit to anything, you should understand the numbers behind it. Monthly payment, closing costs, what the comparable sales actually say. Maher lays those out in plain language so you can decide with a clear head.",
      "You will not get pressure or a countdown clock. You will get direct answers, honest tradeoffs, and practical advice, whether you are buying your first home in Garland or selling a longtime home in Plano.",
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
    title: "Buying with Maher",
    lead: "A purchase this size deserves a process, not guesswork. Here is how it runs.",
    steps: [
      {
        title: "Get prepared",
        description:
          "Start with a short conversation about your timeline, your budget, and what matters in the next home. No commitment, just clarity on where you stand.",
      },
      {
        title: "Understand budget and financing",
        description:
          "Compare loan options and see what different price points actually cost per month, taxes and insurance included, before you start touring.",
      },
      {
        title: "Compare homes with real data",
        description:
          "Tour with purpose. Maher pulls the comparable sales and flags condition issues, so you know what a fair price looks like on each home.",
      },
      {
        title: "Offer strategy",
        description:
          "Whether the market is competitive or quiet, structure terms that protect you: price, option period, financing, and timing that fit the situation.",
      },
      {
        title: "Inspections and closing",
        description:
          "Use the inspection to negotiate repairs or credits where it is justified, then move through appraisal, final walkthrough, and closing on schedule.",
      },
    ] satisfies ProcessStep[],
    cta: {
      note: "Thinking about buying in the next year? The earlier the conversation, the better your position.",
      callLabel: "Call Maher",
      formLabel: "Or start with the form",
    },
  },

  selling: {
    eyebrow: "For sellers",
    title: "Selling with Maher",
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
          "Compare offers side by side: price, financing strength, contingencies, and closing dates. Negotiate from the numbers.",
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
    copy: "Automated estimates miss remodels, upgrades, and how fast your street is moving. Request a review and get a number you can actually plan around.",
    callLabel: "Call (817) 501-0172",
    reviewLabel: "Request a review",
  },

  areas: {
    eyebrow: "Service area",
    title: "Areas served",
    lead: "Based in the Dallas-Fort Worth area, Maher works with buyers and sellers across North Texas, including:",
    list: ["Dallas", "Plano", "Garland", "Richardson", "Frisco", "McKinney", "Allen"],
    closer:
      "Not on the list? Most North Texas communities are within range. Ask and you will get a straight answer.",
  },

  listings: {
    eyebrow: "Listings",
    title: "Featured Listings",
    badge: "Coming soon",
    panelTitle: "Featured listings are on the way",
    copy: "What is available in DFW changes week to week, and strong homes often go under contract before they get much attention online. For what is on the market right now, or about to be, call Maher.",
    callLabel: "Call for current options",
    altLabel: "Send a message instead",
  },

  why: {
    eyebrow: "Why Maher",
    title: "Why work with Maher",
    points: [
      {
        icon: MessageSquareText,
        title: "Clear communication",
        description:
          "You always know where things stand, what happens next, and what it means for you.",
      },
      {
        icon: MapPin,
        title: "Local market focus",
        description:
          "DFW is not one market. Pricing and competition vary widely between cities and neighborhoods, and strategy here follows the local data.",
      },
      {
        icon: Percent,
        title: "Financing-aware guidance",
        description:
          "Rates, loan types, and monthly cost shape what a home really costs. Maher keeps the financing math in the conversation from day one.",
      },
      {
        icon: Scale,
        title: "Straight answers before big decisions",
        description:
          "If a house or an offer is a bad idea, you hear it plainly, with the reasons, before money is on the line.",
      },
      {
        icon: ListChecks,
        title: "Buyer and seller strategy",
        description:
          "Whether you are buying, selling, or doing both at once, you get a plan for sequence, timing, and negotiation.",
      },
    ] satisfies WhyPoint[],
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to Maher",
    lead: "Questions about a home, your budget, or what yours would sell for? Call or text. It is the fastest way to get a real answer.",
    voicemailNote:
      "If the call goes to voicemail, leave your name and number and Maher will get back to you.",
    form: {
      title: "Or send your details",
      subtitle:
        "Fill this out and send it as a text. Your info goes straight to Maher's phone, not a database.",
      intents: [
        { value: "buy", label: "Buy a home" },
        { value: "sell", label: "Sell a home" },
        { value: "home-value", label: "Get a home value review" },
        { value: "other", label: "Something else" },
      ],
      submitLabel: "Review and send",
      ready: {
        title: "Your message is ready",
        subtitle:
          "Sending opens your messaging app with everything filled in. Nothing goes out until you hit send there.",
        sendLabel: "Send as text",
        callLabel: "Call instead",
        editLabel: "Edit details",
      },
    },
  },

  footer: {
    tagline: "Real estate for buyers and sellers across DFW and North Texas.",
    serviceLine:
      "Dallas · Plano · Garland · Richardson · Frisco · McKinney · Allen · and nearby North Texas communities",
    equalHousing: "Equal Housing Opportunity",
    // Fill these in when ready; they render only when non-empty.
    // Texas advertising rules generally require the sponsoring broker's info.
    compliance: {
      brokerage: "",
      license: "",
    } as { brokerage: string; license: string },
  },
} as const;

export type SiteConfig = typeof siteConfig;
