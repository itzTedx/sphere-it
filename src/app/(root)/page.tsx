import type { Metadata } from "next/dist/types";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";

import { BASE_URL } from "@/data/site-config";
import { getHomepageGlobal } from "@/modules/global/homepage";
import { generateFAQStructuredData } from "@/modules/seo/faq-jsonld";
import { Clients, Hero, Services, WhyUs } from "@/modules/views";
import { Industries } from "@/modules/views/industries";
import { Partners } from "@/modules/views/partners";

const meta = {
	title: "Sphere IT - Digital Transformation Partner in UAE & GCC",
	description:
		"Empowering forward-looking organizations with talent and technology that deliver measurable outcomes. ISO/IEC 42001 certified AI platforms, automation frameworks, and scalable solutions",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"digital transformation",
		"AI platforms",
		"automation frameworks",
		"UAE IT consulting",
		"GCC technology solutions",
		"ISO/IEC 42001",
		"enterprise AI",
		"process automation",
		"data analytics",
		"cloud solutions",
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

	alternates: {
		canonical: BASE_URL,
	},
};

export default async function Home() {
	const [faqStructuredData, homepage] = await Promise.all([
		generateFAQStructuredData("general"),
		getHomepageGlobal(),
	]);

	const cta = homepage?.cta;

	const ctaButtonLink =
		cta?.link?.type === "page" && cta.link.page
			? cta.link.page
			: cta?.link?.type === "custom" && cta.link.url
				? (cta.link.url as unknown as import("next").Route)
				: undefined;

	return (
		<>
			{faqStructuredData && (
				<Script type="application/ld+json">
					{JSON.stringify(faqStructuredData)}
				</Script>
			)}
			<main id="main-content">
				<Hero />
				<Services />
				<Clients />
				<Industries />
				<WhyUs />
				<Partners />
				{/* <Resources /> */}

				{cta && (
					<Cta
						badge={cta.badge ?? undefined}
						buttonLink={ctaButtonLink}
						buttonText={cta.link?.label ?? "Start the Conversation"}
						description={cta.description ?? undefined}
						showForm={cta.showForm ?? false}
						title={cta.title}
					/>
				)}
			</main>
		</>
	);
}
