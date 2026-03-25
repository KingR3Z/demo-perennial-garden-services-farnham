/* ============================================
   CLIENT CONFIGURATION
   ============================================ */

export const client = {
  name: "Perennial Garden Services, Farnham",
  shortName: "Perennial Garden",
  legalName: "Perennial Garden Services, Farnham",
  tagline: "LANDSCAPING | GARDENS | PATIOS | DRIVEWAYS",
  logoInitials: "P G S",
  founderName: "",
  founderRole: "Director",
  yearFounded: "",
  phone: "07713 791980",
  email: "",
  whatsapp: {
    display: "07713 791980",
    link: "https://wa.me/447713791980",
  },
  address: [
    "Farnham",
  ],
  region: "Farnham and surrounding areas",
  basedIn: "Farnham",
  hours: [
    { day: "Monday — Friday", time: "8:00 AM — 5:00 PM" },
    { day: "Saturday", time: "9:00 AM — 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  awards: [
    { title: "Google Reviews — 5.0 Stars", year: "2026", category: "REVIEWS" },
    { title: "0 Five-Star Reviews", year: "2026", category: "SERVICE" },
  ],
  partners: [
    { name: "Marshalls", logo: null },
    { name: "Bradstone", logo: null },
    { name: "Tobermore", logo: null },
    { name: "Tarmac", logo: null },
  ],
  metaTitle: "Perennial Garden Services, Farnham — Landscaper in Farnham",
  metaDescription:
    "Professional landscaper in Farnham. 5.0 stars on Google Reviews with 0 reviews. Quality workmanship guaranteed.",
};


// Derived helpers
export const phoneLink = `tel:${client.phone.replace(/\s/g, "")}`;
export const emailLink = `mailto:${client.email}`;
