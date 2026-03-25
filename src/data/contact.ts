import { client, phoneLink, emailLink } from "@/config/client";

export const contactHeroData = {
  overline: "GET IN TOUCH",
  heading:
    `Contact ${client.name} for a free, no-obligation estimate.`,
  text: "Whether you need regular garden maintenance, a one-off hedge trim, new fencing, or a full garden clearance — we're here to help. Call or text us to arrange a convenient time to visit.",
  image: "/images/garden-consultation-v2.jpg",
};

export const contactMethods = [
  {
    icon: "email",
    label: "Email Us",
    value: client.email,
    href: emailLink,
  },
  {
    icon: "phone",
    label: "Call Us",
    value: client.phone,
    href: phoneLink,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: client.whatsapp.display,
    href: client.whatsapp.link,
  },
];

export const locationData = {
  address: [
    client.name,
    ...client.address,
  ],
  image: "/images/office.jpg",
};

export const hoursData = {
  hours: client.hours,
};

export const socialLinks = client.socials;

export const exploreServices = [
  {
    title: "Lawn Care & Mowing",
    image: "/images/service-patios-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Hedge Trimming & Pruning",
    image: "/images/landscaping-main-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Garden Clearance & Planting",
    image: "/images/service-lawns-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Fencing & Boundaries",
    image: "/images/service-fencing-v2.jpg",
    href: "/garden-design",
  },
];
