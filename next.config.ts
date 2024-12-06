import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 1080, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 128],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
