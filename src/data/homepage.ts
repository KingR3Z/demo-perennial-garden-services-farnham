import { client } from "@/config/client";

export const heroData = {
  title: "Professional Garden\nMaintenance & Landscaping",
  subtitle: `LAWN CARE, HEDGE TRIMMING & LANDSCAPING IN ${client.basedIn.toUpperCase()}`,
  image: "/images/hero-bg-v2.jpg",
};

export const introData = {
  heading: `Keeping Gardens Beautiful Across ${client.basedIn}`,
  text: [
    `Based in ${client.region} and serving the whole of ${client.basedIn}, our experienced team delivers reliable garden maintenance, hedge trimming, lawn care and landscaping — all backed by five-star reviews and a perfect Google rating.`,
    "Explore a curated selection of our completed projects within our Portfolio.",
  ],
  cta: { label: "Get a Free Estimate", href: "/contact" },
  image: "/images/intro-circle-v2.jpg",
};

export const servicesData = {
  tabs: [
    {
      label: "LAWN CARE & MOWING",
      title: "Lawn Care & Mowing",
      text: "Regular lawn mowing, edging, feeding and seasonal treatments to keep your lawn looking its best all year round. Whether it's a one-off tidy-up or a regular maintenance contract, we've got you covered.",
      tagline: "You grow it... we mow it.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-driveways-v2.jpg",
    },
    {
      label: "HEDGE TRIMMING & PRUNING",
      title: "Hedge Trimming & Pruning",
      text: "Expert hedge trimming, tree pruning and shrub shaping to keep your garden boundaries neat and tidy. We handle everything from small box hedges to large overgrown hedgerows.",
      tagline: "Neat, sharp and perfectly shaped — every time.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-patios-v2.jpg",
    },
    {
      label: "FENCING & BOUNDARIES",
      title: "Fencing & Boundaries",
      text: "Quality timber fencing including lap panels, close board and decorative styles. We remove old fencing and install new panels, posts and gates to give your property privacy and kerb appeal.",
      tagline: "Secure boundaries that look as good as they perform.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-fencing-v2.jpg",
    },
    {
      label: "GARDEN CLEARANCE & PLANTING",
      title: "Garden Clearance & Planting",
      text: "From jungle clearances to fresh planting schemes, we transform neglected outdoor spaces into beautiful gardens. We clear overgrown areas, lay new beds and plant seasonal flowers, shrubs and trees.",
      tagline: "Whether it's light maintenance or jungle clearance — we handle it.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-lawns-v2.jpg",
    },
  ],
};

export const whyChooseData = {
  title: `Why Choose ${client.name}?`,
  paragraphs: [
    `With five-star Google reviews and a perfect rating, our reputation speaks for itself. We're a trusted local team delivering quality garden maintenance across ${client.basedIn}.`,
    "Every job is approached with attention to detail, reliability and honest pricing. We turn up when we say we will and leave your garden looking immaculate.",
    `From the first visit through to the final sweep-up, we provide a fully hands-on service. No subcontractors, no shortcuts — just ${client.founderName} and the team doing what we do best.`,
    "One-off jobs or regular visits — we work around your schedule to keep your garden looking its best all year round.",
  ],
  image: "/images/why-choose-new-v2.jpg",
};

export const philosophyData = {
  title: "Our Approach",
  paragraphs: [
    "We take a practical, customer-first approach to every job. We listen to what you need, give honest advice, and deliver exactly what we promise.",
    "Every job starts with a free, no-obligation visit and estimate. We'll walk through your garden, discuss what needs doing, and give you a clear price with no hidden extras.",
    "We're proud of our work and we want you to be too. That's why we guarantee quality on every job and keep you updated throughout.",
  ],
  cta: { label: "See How We Work", href: "/about" },
  image: "/images/portfolio/project-05.jpg",
};

export const landscapingData = {
  title: "Complete Garden Maintenance Solutions",
  paragraphs: [
    "Whether it's regular lawn mowing, a one-off hedge trim, new fencing, a full garden clearance or seasonal planting — we handle everything from start to finish.",
    "Our experienced team works together on every job, ensuring consistent quality and a clean finish. We take pride in leaving every garden better than we found it.",
  ],
  cta: { label: "View Our Projects", href: "/portfolio" },
  image: "/images/landscaping-main-v2.jpg",
};

export const ctaData = {
  heading: "Ready To Transform Your Garden?",
  text: "Get in touch for a free, no-obligation estimate. We'll come to you, discuss what you need and give you an honest price.",
  subtext: `Call ${client.founderName} on ${client.phone} or fill in the form below and we'll get back to you within 24 hours.`,
};

export const projectsShowcase = [
  { title: "Hedge Trimming", location: client.basedIn, image: "/images/portfolio/project-50.jpg", slug: "hedge-trimming" },
  { title: "Garden Clearance", location: client.basedIn, image: "/images/portfolio/project-30.jpg", slug: "garden-clearance" },
  { title: "New Fencing", location: client.basedIn, image: "/images/portfolio/project-03.jpg", slug: "new-fencing" },
  { title: "Lawn Care & Mowing", location: client.basedIn, image: "/images/portfolio/project-20.jpg", slug: "lawn-care" },
  { title: "Patio & Planting", location: client.basedIn, image: "/images/portfolio/project-10.jpg", slug: "patio-planting" },
  { title: "Pruning & Shaping", location: client.basedIn, image: "/images/portfolio/project-40.jpg", slug: "pruning-shaping" },
  { title: "Garden Maintenance", location: client.basedIn, image: "/images/portfolio/project-55.jpg", slug: "garden-maintenance" },
  { title: "Fence Repair", location: client.basedIn, image: "/images/portfolio/project-04.jpg", slug: "fence-repair" },
  { title: "Overgrown Garden Rescue", location: client.basedIn, image: "/images/portfolio/project-35.jpg", slug: "garden-rescue" },
  { title: "Seasonal Planting", location: client.basedIn, image: "/images/portfolio/project-15.jpg", slug: "seasonal-planting" },
];
