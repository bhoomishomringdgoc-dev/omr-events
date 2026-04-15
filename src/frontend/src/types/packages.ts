export type PackageTier = "starter" | "silver" | "gold" | "platinum" | "royal";

export interface Package {
  id: string;
  tier: PackageTier;
  name: string;
  tagline: string;
  price: string;
  priceLabel: string;
  features: string[];
  isPopular?: boolean;
  highlight?: string;
}

export interface SpecialPackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceRange: string;
  features: string[];
  image: string;
  href: string;
}

export const WEDDING_PACKAGES: Package[] = [
  {
    id: "starter",
    tier: "starter",
    name: "STARTER",
    tagline: "Essentials for a beautiful beginning.",
    price: "₹2.5L",
    priceLabel: "Starting from",
    features: [
      "Basic Decor (Stage & Entry)",
      "Professional Photography",
      "Standard Sound System",
      "Venue Sourcing & Booking",
      "Dedicated Event Manager",
      "Basic Floral Arrangements",
      "Invitation Card Design",
      "Guest Coordination (Up to 100)",
    ],
  },
  {
    id: "silver",
    tier: "silver",
    name: "SILVER",
    tagline: "Elegant touches for a memorable event.",
    price: "₹5L",
    priceLabel: "Starting from",
    features: [
      "Themed Decor (Stage & Floral)",
      "Professional Photo & Video",
      "Cinematic Videography",
      "Superior Sound & DJ",
      "Guest Management (Up to 200)",
      "Entertainment Coordination",
      "Catering Support",
      "Transport Arrangement",
      "Bridal Makeup Coordination",
    ],
  },
  {
    id: "gold",
    tier: "gold",
    name: "GOLD",
    tagline: "The exquisite choice for grand celebrations.",
    price: "₹8L",
    priceLabel: "Starting from",
    isPopular: true,
    highlight: "Most Popular",
    features: [
      "Premium Themed Decor (Extensive Florals)",
      "Cinematic Videography (2 cameras)",
      "Premium Photography (3 sessions)",
      "Advanced Sound & Lighting",
      "Guest Management (Up to 400)",
      "MC / Anchor",
      "Catering (Full Menu)",
      "Pandal & Stage Setup",
      "Mehendi & Sangeet Planning",
      "Dedicated Coordination Team",
    ],
  },
  {
    id: "platinum",
    tier: "platinum",
    name: "PLATINUM",
    tagline: "Luxurious details and seamless execution.",
    price: "₹15L",
    priceLabel: "Starting from",
    features: [
      "Bespoke Stage Design",
      "Full Event Branding",
      "High-end Audiovisual",
      "Celebrity Emcee",
      "Advanced LED Lighting",
      "Guest Management (Up to 600)",
      "Pre-Event Services",
      "Luxury Transport Fleet",
      "Multi-Cuisine Catering",
      "Live Music & Performers",
      "Complete Venue Styling",
    ],
  },
  {
    id: "royal",
    tier: "royal",
    name: "ROYAL",
    tagline: "Ultimate grandeur and unparalleled luxury.",
    price: "₹25L",
    priceLabel: "Starting from",
    features: [
      "Complete Bespoke Decor",
      "International Performers",
      "Multi-cam Live Streaming",
      "Exclusive Venue Decor",
      "Premium Gilting & Gold Accents",
      "Full-scale Concierge Service",
      "Elite Vendor Access",
      "Personal Stylist Coordination",
      "Royal Procession Setup",
      "5-Star Catering Experience",
      "Drone Videography",
      "Unlimited Guest Management",
    ],
  },
];

export const SPECIAL_PACKAGES: SpecialPackage[] = [
  {
    id: "christian",
    title: "CHRISTIAN WEDDING",
    subtitle: "Elegance & Sacred Traditions",
    description:
      "Graceful church ceremonies with floral arches, aisle styling, and seamless church-to-reception coordination. We honour every tradition with reverence.",
    priceRange: "Starting ₹3L",
    features: [
      "Church Ceremony Coordination",
      "Floral Arch & Aisle Decor",
      "Bridal Party Styling",
      "Reception Hall Decor",
      "Photography & Videography",
      "Catering & Cake",
    ],
    image: "/assets/generated/hero-wedding.dim_1200x600.jpg",
    href: "/packages",
  },
  {
    id: "corporate",
    title: "CORPORATE EVENTS",
    subtitle: "Conferences, Gala Dinners & More",
    description:
      "Professional event setups for product launches, award nights, team celebrations, conferences, and exhibitions that leave a lasting impression.",
    priceRange: "₹1.5L – ₹5L",
    features: [
      "Stage & AV Setup",
      "Branding & Signage",
      "Catering for All Scales",
      "Corporate Photography",
      "Registration Desk",
      "Entertainment Options",
    ],
    image: "/assets/generated/hero-wedding.dim_1200x600.jpg",
    href: "/packages",
  },
  {
    id: "birthday",
    title: "BIRTHDAY & ANNIVERSARY",
    subtitle: "Themes, Fun & Memorable Moments",
    description:
      "Personalised birthday parties and anniversary celebrations with creative themes, decor, entertainment, and catering for all age groups.",
    priceRange: "₹75K – ₹2.5L",
    features: [
      "Theme Concept & Decor",
      "Customised Cake",
      "Photography & Reels",
      "DJ & Entertainment",
      "Catering & Snacks",
      "Balloon & Floral Setup",
    ],
    image: "/assets/generated/hero-wedding.dim_1200x600.jpg",
    href: "/packages",
  },
  {
    id: "nikkah",
    title: "MUSLIM NIKKAH",
    subtitle: "Blessed Unions, Beautiful Settings",
    description:
      "Respectful and beautifully arranged Nikkah ceremonies and Walima receptions, crafted to honour Islamic traditions with elegant decor and seamless planning.",
    priceRange: "Starting ₹2L",
    features: [
      "Nikkah Ceremony Setup",
      "Mandap / Pavilion Decor",
      "Walima Reception Planning",
      "Halal Catering",
      "Photography & Video",
      "Guest Coordination",
    ],
    image: "/assets/generated/hero-wedding.dim_1200x600.jpg",
    href: "/packages",
  },
];
