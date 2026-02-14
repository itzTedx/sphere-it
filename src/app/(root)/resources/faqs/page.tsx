import type { Route } from "next";
import type { Metadata } from "next/dist/types";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/radix/accordion";

import { IconSupport } from "@/assets/icons";

import { BASE_URL } from "@/data/site-config";
import { listFaqs } from "@/modules/faqs/actions/query";
import { getFaqsPageGlobal } from "@/modules/global/faqs";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";

import { getStructuredData } from "./structured-data";

function resolveCtaHref(link: {
	type?: string | null;
	page?: string | null;
	url?: string | null;
}): Route {
	if (link?.type === "page" && link.page) return link.page as Route;
	if (link?.type === "custom" && link.url) return link.url as Route;
	return "/contact";
}

const meta = {
	title: "FAQs | Sphere IT - Services, Solutions & Support",
	description:
		"Find answers to common questions about Sphere IT's services, including AI enablement, process automation, data management, managed services, and talent augmentation. Get insights into our solutions and expertise.",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"FAQs",
		"frequently asked questions",
		"Sphere IT services",
		"AI platform questions",
		"automation FAQs",
		"data management questions",
		"managed services FAQs",
		"talent augmentation questions",
		"IT consulting FAQs",
		"digital transformation questions",
	],
	openGraph: {
		title: meta.title,
		description: meta.description,
		type: "website",
		url: `${BASE_URL}/resources/faqs`,
	},

	alternates: {
		canonical: `${BASE_URL}/resources/faqs`,
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

export default async function FaqsPage() {
	const [faqs, structuredData, pageData] = await Promise.all([
		listFaqs(),
		getStructuredData(),
		getFaqsPageGlobal(),
	]);
	const header = pageData?.header;
	const cta = pageData?.cta;

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
					{ name: "Resources", item: `${BASE_URL}/resources` },
					{ name: "FAQs", item: `${BASE_URL}/resources/faqs` },
				]}
			/>
			<main
				aria-label="Frequently Asked Questions"
				id="main-content"
				role="main"
			>
				<section
					aria-labelledby="faqs-heading"
					className="relative z-10 border-b bg-card py-6 sm:py-8 md:py-12 lg:py-16"
				>
					<header className="container max-w-7xl space-y-2 sm:space-y-3 md:space-y-4">
						<Badge className="capitalize" showDashes>
							<IconSupport aria-hidden="true" /> {header?.badge ?? "FAQs"}
						</Badge>
						<h1
							className="text-primary-900 text-title-5 sm:text-title-4 md:text-title-3 lg:text-title-2 xl:text-title-2"
							id="faqs-heading"
						>
							<span className="text-primary-600">
								{header?.titleHighlight ?? "Have Questions?"}
							</span>
							<br />
							{header?.titleSuffix ?? "Here's what we hear often"}
						</h1>
					</header>
				</section>
				<div
					aria-label="FAQ categories"
					className="mb-16 space-y-8 sm:mb-20 sm:space-y-10 md:mb-24 md:space-y-12 lg:mb-32"
					role="region"
				>
					{faqs.map((faq, categoryIndex) => {
						const categoryId = `faq-category-${categoryIndex}`;
						const categorySlug = faq.category
							?.toLowerCase()
							.replace(/\s+/g, "-");
						return (
							<section
								aria-labelledby={categoryId}
								className="gap-4 sm:gap-6"
								id={categorySlug}
								key={faq.category}
							>
								<div className="container grid max-w-7xl gap-4 py-4 sm:gap-6 sm:py-6 md:grid-cols-2 md:gap-8 md:py-8 lg:gap-10 lg:py-10">
									<h2
										className="text-primary-900 text-title-5 sm:text-title-4 md:text-title-4 lg:text-title-4"
										id={categoryId}
									>
										{faq.category}
									</h2>
									<Accordion
										aria-label={`${faq.category} questions and answers`}
										type="multiple"
									>
										{faq.faqs.map((item, itemIndex) => {
											const questionId = `question-${categoryIndex}-${itemIndex}`;
											const answerId = `answer-${categoryIndex}-${itemIndex}`;
											return (
												<AccordionItem
													className="rounded-lg data-[state='open']:bg-card"
													key={item.question}
													value={item.question}
												>
													<AccordionTrigger
														aria-controls={answerId}
														className="mx-1 cursor-pointer px-1 text-base hover:bg-muted hover:no-underline sm:mx-1.5 sm:px-1.5 sm:text-lg md:text-lg lg:text-lg"
														id={questionId}
													>
														{item.question}
													</AccordionTrigger>
													<AccordionContent
														aria-labelledby={questionId}
														className="px-2 text-base sm:px-3 sm:text-base md:text-lg lg:text-lg"
														id={answerId}
														role="region"
													>
														{item.content}
													</AccordionContent>
												</AccordionItem>
											);
										})}
									</Accordion>
								</div>
							</section>
						);
					})}
				</div>

				<Cta
					badge={cta?.badge ?? undefined}
					buttonLink={cta?.link ? resolveCtaHref(cta.link) : undefined}
					buttonText={cta?.buttonText ?? cta?.link?.label ?? undefined}
					description={cta?.description ?? undefined}
					showForm={cta?.showForm ?? true}
					title={cta?.title ?? undefined}
				/>
			</main>
		</>
	);
}
