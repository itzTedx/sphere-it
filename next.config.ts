import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    qualities: [80],
    minimumCacheTTL: 60,
  },

  typedRoutes: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "radix-ui"],
  },

  // Compression settings
  compress: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // SEO and performance optimizations
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
