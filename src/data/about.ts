import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: `ABOUT ${client.name.toUpperCase()}`,
  heading: "Professional Garden Maintenance & Landscaping",
  paragraphs: [
    `${client.name} is a trusted garden maintenance company based in ${client.region}. We specialise in keeping gardens beautiful — from regular lawn mowing and hedge trimming to full garden clearances and planting schemes across ${client.basedIn} and the surrounding areas.`,
    "With hands-on experience and a passion for outdoor spaces, our team delivers reliable, quality work on every job — whether it's a one-off tidy-up or a regular maintenance contract.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Reliable & Trustworthy",
    description:
      "We turn up when we say we will and leave your garden looking immaculate. Every job is fully insured and we always clean up after ourselves.",
    icon: "shield",
  },
  {
    title: "Expert Knowledge",
    description:
      "Years of hands-on experience in garden maintenance means we know what works. We'll advise on the best approach for your garden and deliver results that last.",
    icon: "lightbulb",
  },
  {
    title: "Our Promise",
    description:
      "We are committed to delivering quality on every job. From a simple hedge trim to a full garden transformation, we maintain the highest standards of care and workmanship.",
    icon: "heart",
  },
];

export const directorData = {
  name: client.founderName,
  role: client.founderRole,
  image: "/images/director-portrait-v2.jpg",
  bio: [
    `${client.founderName} started ${client.name} in ${client.yearFounded} with a simple idea: reliable, quality garden maintenance at honest prices for homeowners across ${client.basedIn}.`,
    `With years of hands-on experience, ${client.founderName} takes a practical approach to every job. From hedge trimming and lawn care to full garden clearances and fencing, he ensures every garden is left looking its best.`,
    `${client.founderName} is passionate about transforming outdoor spaces. Every job starts with a free visit, an honest conversation about what needs doing, and a clear price with no hidden costs.`,
    `Under ${client.founderName}'s care, ${client.name} has built a strong reputation in ${client.region}, with consistently five-star reviews on Google.`,
    `When he's not on site, ${client.founderName} can be found spending time with his family or working on his own garden at home in ${client.basedIn}.`,
  ],
  cta: { label: `Contact ${client.founderName}`, href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    `At ${client.name}, our mission is to keep gardens across ${client.basedIn} looking beautiful. We believe every home deserves a well-maintained outdoor space — and we make that happen at a fair price.`,
    "We approach every job with the same attention to detail, whether it's a weekly lawn mow or a full garden rescue. Our team takes pride in reliable service, honest pricing, and leaving every garden better than we found it.",
    `As a local ${client.basedIn} business, we're committed to building lasting relationships with our customers. We treat every garden as if it were our own.`,
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};
