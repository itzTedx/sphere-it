import type { Metadata } from "next";
import "@/styles/globals.css";

import Link from "next/link";

import { BreakpointIndicator } from "@/components/dev/breakpoint-ind";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/layout/structured-data";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

import { inter, mono, sans } from "@/assets/fonts";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { cn } from "@/lib/utils";

const meta = {
	title: "Sphere IT - Digital Transformation Partner in UAE & GCC",
	description:
		"Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms, automation frameworks, and scalable solutions",
};

export const metadata: Metadata = {
	title: "Sphere It Global",
	metadataBase: new URL(BASE_URL),
	keywords: [
		"AI solutions",
		"technology consulting",
		"automation frameworks",
		"artificial intelligence",
		"enterprise technology",
		"digital transformation",
		"ISO 42001 certified",
		"Dubai technology",
		"India technology",
		"AI platforms",
		"data analytics",
		"business automation",
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: BASE_URL,
		siteName: COMPANY_NAME,
		title: meta.title,
		description: meta.description,
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: meta.title,
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: meta.title,
		description: meta.description,
		images: ["/og-image.jpg"],
		creator: "@sphereglobal",
	},

	authors: [{ name: COMPANY_NAME }],
	creator: COMPANY_NAME,
	publisher: COMPANY_NAME,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "m-5K5HjoaMa2O6Q9ayv7cvhXGB_nigawhKbLXyoKEhw",
		other: {
			"msvalidate.01": "A8C503B4FF428B289DA437C18B34BBE3",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={cn("scroll-smooth")} lang="en">
			<head>
				<StructuredData />
			</head>
			<body
				className={cn(
					inter.variable,
					sans.className,
					mono.variable,
					"antialiased"
				)}
			>
				<Providers>
					{/* Skip Navigation Links */}
					<SkipToContent />

					<Navbar />
					{children}
					<Footer />
					<Toaster position="bottom-right" richColors />
				</Providers>
				<BreakpointIndicator />

				{/* Live region for screen reader announcements */}
				<div
					aria-atomic="true"
					aria-live="polite"
					className="sr-only"
					id="live-region"
				/>
			</body>
		</html>
	);
}

function SkipToContent() {
	return (
		<Link
			className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3.5 focus-visible:left-3 focus-visible:z-99999 focus-visible:inline-block focus-visible:rounded-md focus-visible:bg-muted focus-visible:px-3 focus-visible:py-2 focus-visible:font-display focus-visible:text-muted-foreground focus-visible:text-subhead-sm focus-visible:ring-primary-600"
			href="#main-content"
		>
			Skip to main content
		</Link>
	);
}
