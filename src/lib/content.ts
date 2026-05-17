export type IconKey =
  | "users"
  | "megaphone"
  | "shield"
  | "mapPin"
  | "languages"
  | "brain"
  | "layers";

export const siteConfig = {
  name: "Wavey Media",
  tagline: "where brands come to be heard, not just seen.",
  description:
    "Wavey Media builds creator-led campaigns that make brands, founders and impact initiatives visible in the right way.",
  url: "https://www.waveymedia.in",
  email: "business@waveymedia.in",
  phone: "+91-93522 52077",
  location: "Bikaner, Rajasthan, India",
};

export const navLinks = [
  { label: "Offerings", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Story", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Good work means nothing if the right people don't notice it.",
  subtext:
    "Wavey Media builds creator-led campaigns that make brands, founders and impact initiatives visible in the right way, through the right creators, pages, journalists and communities.",
  ctaPrimary: "Start a campaign",
  ctaSecondary: "See what we do",
};

export const heroCards: {
  title: string;
  description: string;
  icon: IconKey;
}[] = [
  {
    title: "Creator-Led Campaigns",
    description: "Influence that actually moves audiences, not just metrics.",
    icon: "users",
  },
  {
    title: "Narrative & Perception Management",
    description:
      "Shaping how the market reads your brand before someone else writes the story for you.",
    icon: "megaphone",
  },
  {
    title: "Impact Storytelling",
    description:
      "The good your brand does deserves to be known. We make sure it is.",
    icon: "shield",
  },
];

export const trustedBy = {
  eyebrow: "Trusted By",
  headline: "Conglomerates, challengers, and a few names we can't print.",
  subtext:
    "The brands that hire us aren't looking for visibility on our website. They're looking for results in their market: sharper perception, stronger conversations, and reputation that holds up under pressure. We give them that, and we let them take the credit. Every time.",
  stats: [
    {
      value: "1,000+",
      label: "Creators, journalists, and community pages in our network",
    },
    {
      value: "200+",
      label: "Campaigns delivered across India",
    },
  ],
  closing:
    "Reputation is earned in private long before it's seen in public. The campaigns that move markets, shift perception, and build trust rarely come with a press release attached.",
};

export const servicesSection = {
  eyebrow: "WHAT WE ACTUALLY DO",
  title: "Our Offerings",
  intro:
    "We solve the three problems every modern brand runs into: getting heard, getting understood, and getting credit for the right things.",
};

export const services: {
  number: string;
  title: string;
  intro: string;
  bullets: string[];
  icon: IconKey;
}[] = [
  {
    number: "01",
    title: "Creator-Led Influence",
    intro: "The voices your audience already trusts.",
    icon: "users",
    bullets: [
      "Creator selection by audience fit, not follower count.",
      "Campaigns that read as culture, not commerce.",
      "Meme and micro-content built for organic pickup.",
      "Performance tracked to business outcomes.",
    ],
  },
  {
    number: "02",
    title: "Narrative & Perception",
    intro: "Own the story before the market writes it.",
    icon: "megaphone",
    bullets: [
      "Positioning that holds up in boardrooms and headlines.",
      "Strategic media placement and stakeholder messaging.",
      "Crisis architecture built before you need it.",
      "Real-time sentiment intelligence and response.",
    ],
  },
  {
    number: "03",
    title: "Impact Storytelling",
    intro: "The work you do, told the way it deserves.",
    icon: "shield",
    bullets: [
      "Ground-led storytelling from real communities.",
      "Distribution across earned, owned, and creator channels.",
      "Trust and reputation built through proof, not PR.",
      "Long-term brand equity, not campaign spikes.",
    ],
  },
];

export const whySection = {
  eyebrow: "WHY WAVEY MEDIA?",
  title: "We see India the way India actually lives.",
  subtext:
    "Most agencies operate out of two postcodes and assume the rest will follow. We don't. We work where your audience is, not where it's convenient to film.",
};

export const whyChoose: {
  title: string;
  description: string;
  icon: IconKey;
}[] = [
  {
    title: "Where Your Audience Actually Lives",
    description:
      "Your buyers aren't all sitting in Mumbai and Bangalore. A lot of them are in towns most agencies can't even pronounce. That's where we show up.",
    icon: "mapPin",
  },
  {
    title: "Fluent in India",
    description:
      "We run campaigns in eight languages with people who actually speak them. Your brand sounds local everywhere, without losing what makes it yours.",
    icon: "languages",
  },
  {
    title: "Half Science, Half Street Sense",
    description:
      "Data tells us who to pick. Years of being on the ground tell us why. Both matter. Neither works alone.",
    icon: "brain",
  },
  {
    title: "Single Point of Truth",
    description:
      "One brief, one team, one person to call. We handle strategy, creators, contracts, delivery, reporting, start to finish. You don't chase anyone.",
    icon: "layers",
  },
];

export const aboutSection = {
  eyebrow: "Our story",
  title: "We started with a frustration!",
  paragraphs: [
    "India had brilliant brands with stories worth telling. It had creators with audiences who genuinely cared. And somehow, the two kept missing each other, buried under bad briefs, broken processes, and influencer marketing that felt more like a transaction than a relationship.",
    "So we built the bridge.",
    "Today, we partner with ambitious brands across the country to do three things really well: connect them with the creators who actually move their audience, shape how the public sees them, and make sure the good they're doing in the world doesn't go unnoticed.",
  ],
};

export const footerLinks = [
  { label: "Offerings", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Story", href: "#about" },
  { label: "Contact", href: "#contact" },
];
