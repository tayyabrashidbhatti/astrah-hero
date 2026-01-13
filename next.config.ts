import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify compatibility - don't use standalone for Netlify
  trailingSlash: false,
  reactStrictMode: true,
  // Ensure images work properly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
