import { Suspense } from "react";

import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";

import { IconLoader } from "@/assets/icons/loader";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

import { AiMaturityAssessment } from "./components/assessment";

const meta = {
	title: `AI Maturity Assessment | ${COMPANY_NAME}`,
	description:
		"Assess your organization's AI readiness across strategy, data, technology, and governance. Get a comprehensive maturity score and actionable insights.",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"AI maturity assessment",
		"AI readiness",
		"artificial intelligence assessment",
		"AI strategy",
		"AI governance",
		"enterprise AI",
		"digital transformation",
		"AI adoption",
		COMPANY_NAME,
	],
	authors: [{ name: COMPANY_NAME }],
	creator: COMPANY_NAME,
	publisher: COMPANY_NAME,
	metadataBase: new URL(BASE_URL),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `${BASE_URL}/resources/ai-maturity`,
		siteName: COMPANY_NAME,
		title: meta.title,
		description: meta.description,
		images: [
			{
				url: "/images/og-image.jpg",
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
		images: ["/images/twitter-image.jpg"],
		creator: "@sphereglobal",
	},
	alternates: {
		canonical: `${BASE_URL}/resources/ai-maturity`,
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
};

export default function AiMaturityPage() {
	return (
		<main className="container mx-auto max-w-6xl py-6 md:py-9">
			<div className="mx-auto max-w-4xl space-y-8">
				{/* Header */}
				<div className="flex flex-col items-center text-center">
					<Badge className="text-sm" variant="secondary">
						AI Maturity Assessment
					</Badge>
					<h1 className="font-bold text-primary-900 text-title-5 leading-tight md:text-title-4 lg:text-title-3">
						Assess Your Organization's AI Readiness
					</h1>
					<p className="mx-auto max-w-2xl text-balance text-base text-stone-600 leading-relaxed">
						Complete this comprehensive assessment to understand your
						organization's AI maturity across strategy, data, technology, and
						governance.
					</p>
				</div>
				<Suspense
					fallback={
						<div className="flex items-center justify-center py-12">
							<IconLoader className="size-8 animate-spin text-primary-600" />
						</div>
					}
				>
					<AiMaturityAssessment />
				</Suspense>
			</div>
		</main>
	);
}
