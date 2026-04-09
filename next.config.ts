import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // Trailing slash for consistent canonical URLs
  trailingSlash: false,
};

export default nextConfig;
