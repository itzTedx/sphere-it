import type { Metadata } from "next/dist/types";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";

import { BASE_URL } from "@/data/site-config";
import RichText from "@/modules/cms/components/RichText";
import {
	getServicesForListing,
	getServicesPageGlobal,
} from "@/modules/global/services";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { WhyMatters } from "@/modules/views/why-matters";

import { ServiceCard } from "./components/service-card";
import { structuredData } from "./structured-data";

const defaultMeta = {
	title: "IT Services - AI, Automation & Digital Transformation | Sphere IT",
	description:
		"Transform your business with Sphere IT's comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation. Certified professionals delivering measurable outcomes.",
};

export async function generateMetadata(): Promise<Metadata> {
	const data = await getServicesPageGlobal();
	const { seo } = data ?? {};

	const title = seo?.metaTitle ?? defaultMeta.title;
	const description = seo?.metaDescription ?? defaultMeta.description;
	const ogImage =
		typeof seo?.ogImage === "object" && seo.ogImage?.url
			? seo.ogImage.url
			: "/images/services-og.jpg";

	return {
		title,
		description,
		keywords: [
			"IT services",
			"artificial intelligence",
			"process automation",
			"data analytics",
			"managed IT services",
			"digital transformation",
			"enterprise solutions",
			"BFSI technology",
			"AI implementation",
			"business automation",
		],
		openGraph: {
			title,
			description,
			type: "website",
			url: `${BASE_URL}/services`,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: "Sphere IT Services - AI, Automation & Digital Transformation",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
		alternates: {
			canonical: `${BASE_URL}/services`,
		},
	};
}

export default async function ServicesPage() {
	const [pageData, services] = await Promise.all([
		getServicesPageGlobal(),
		getServicesForListing(),
	]);
	const hero = pageData?.hero;

	return (
		<>
			{structuredData.map((data, index) => (
				<script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
					key={index}
					type="application/ld+json"
				/>
			))}
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", item: `${BASE_URL}` },
					{ name: "Services", item: `${BASE_URL}/services` },
				]}
			/>
			<main>
				<header className="border-b bg-card py-9 sm:py-12 md:py-16">
					<div className="container max-w-7xl">
						<Badge>{hero?.badge ?? "Services"}</Badge>
						<div className="mt-4 max-w-5xl space-y-4 sm:space-y-6">
							{hero?.title ? (
								<RichText
									className="prose-h1:text-primary-900 prose-h1:text-title-5 prose-strong:text-primary-600 sm:prose-h1:text-title-3 md:prose-h1:text-title-2 lg:prose-h1:text-title-1"
									data={hero.title}
									enableGutter={false}
									enableProse={false}
								/>
							) : (
								<h1 className="text-primary-900 text-title-5 sm:text-title-3 md:text-title-2 lg:text-title-1">
									Powering Business from{" "}
									<span className="text-primary-600">
										Automation to Augmentation
									</span>
								</h1>
							)}
							<div className="space-y-3">
								<h2 className="font-display text-subhead-base sm:text-subhead-lg">
									{hero?.subtitle ??
										"We deliver solutions that are precise, pragmatic, and outcome-driven."}
								</h2>
								<p className="text-balance text-base text-stone-700 sm:text-lg md:text-xl lg:text-lead">
									{hero?.description ??
										"Technology should deliver clarity, reliability, and measurable value. At Sphere IT, our services are designed to simplify complexity and accelerate outcomes. Guided by precision and pragmatism, we help organizations adopt AI, automate processes, harness data, secure platforms, and scale talent - without over-engineering."}
								</p>
							</div>
						</div>
					</div>
				</header>

				<section
					className="container relative z-50 mt-12 max-w-7xl"
					id="main-content"
				>
					<ul className="space-y-8 sm:space-y-12 md:space-y-16">
						{services.map((service) => (
							<ServiceCard
								id={service.id}
								image={service.image}
								key={service.id}
								overview={service.overview}
								proof={service.proof}
								serviceTitle={service.serviceTitle}
								tags={service.tags}
							/>
						))}
					</ul>
				</section>
				<WhyMatters data={pageData?.whyMatters} />
				<Cta />
			</main>
		</>
	);
}
