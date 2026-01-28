import type { NextConfig } from "next";

import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
	typedRoutes: true,
	reactCompiler: true,

	// Docker standalone output
	output: "standalone",

	// Performance optimizations
	experimental: {
		optimizePackageImports: [
			"@radix-ui/react-tabs",
			"@radix-ui/react-navigation-menu",
			"lucide-react",
		],
		viewTransition: true,

		// Enable filesystem caching for `next dev`
		turbopackFileSystemCacheForDev: true,
		// Enable filesystem caching for `next build`
		turbopackFileSystemCacheForBuild: true,
	},

	allowedDevOrigins: ["http://localhost:3000", "http://localhost:3001"],
	// Image optimization
	images: {
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		qualities: [100, 75],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "sphere-it.vercel.app",
			},
			{
				protocol: "https",
				hostname: "zm-deals-local.s3.us-east-1.amazonaws.com",
			},
		],
	},

	// Compression
	compress: true,

	// Headers for performance
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
				],
			},
			{
				source: "/images/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/svg/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},

	// Redirects for SEO
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default withPayload(nextConfig);
