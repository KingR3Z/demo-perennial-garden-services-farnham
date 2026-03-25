import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/our-gardens",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
