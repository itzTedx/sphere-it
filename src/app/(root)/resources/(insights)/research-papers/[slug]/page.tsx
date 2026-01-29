import { ViewTransition } from "react";

import type { Metadata } from "next/dist/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { LinkedInAuthButton } from "@/modules/auth/components/linkedin-button";
import { Media } from "@/modules/cms/components/Media";
import RichText from "@/modules/cms/components/RichText";
import {
	geResearchBySlug,
	listResearchPapers,
} from "@/modules/research-papers/actions";
import { PapersCard } from "@/modules/research-papers/components/paper-card";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { ResearchPaper } from "@/payload-types";

interface Props {
	params: Promise<{ slug: string }>;
}

const structuredData = (study: ResearchPaper | null) => {
	const image =
		study?.heroImage && typeof study.heroImage !== "number"
			? study.heroImage.url
			: "";

	return {
		"@context": "https://schema.org",
		"@type": "ResearchPaper",
		headline: study?.title,
		image: image ? `${BASE_URL}${image}` : undefined,
		author: {
			"@type": "Organization",
			name: COMPANY_NAME,
			url: BASE_URL,
		},
		publisher: {
			"@type": "Organization",
			name: COMPANY_NAME,
			url: BASE_URL,
			logo: {
				"@type": "ImageObject",
				url: `${BASE_URL}/logo.png`,
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${BASE_URL}/resources/research-papers/${study?.slug}`,
		},
		keywords: [
			"research paper",
			"digital transformation",
			"technology",
			"IT consulting",
			COMPANY_NAME,
		],
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const study = await geResearchBySlug(slug);

	if (!study) {
		return {
			title: "Research paper Not Found",
			description: "The requested research paper could not be found.",
		};
	}

	const description = study.meta?.description ?? study.title;
	const title = study.meta?.title ?? study.title;
	const image =
		study.heroImage && typeof study.heroImage !== "number"
			? study.heroImage.url
			: "";

	return {
		title: `${title} | ${COMPANY_NAME} Research paper`,
		description,
		keywords: [
			"research paper",
			"digital transformation",
			"technology solutions",
			"IT consulting",
			"enterprise solutions",
			COMPANY_NAME,
			"UAE technology",
			"GCC technology",
		],
		authors: [{ name: COMPANY_NAME }],
		publisher: COMPANY_NAME,
		openGraph: {
			title: title,
			description,
			type: "article",
			url: `${BASE_URL}/resources/research-papers/${study.slug}`,
			siteName: COMPANY_NAME,
			locale: "en_US",
			images: [
				{
					url: image ? `${BASE_URL}${image}` : `${BASE_URL}/logo.png`,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description,
			images: [image ? `${BASE_URL}${image}` : `${BASE_URL}/logo.png`],
			creator: "@sphereglobal",
			site: "@sphereglobal",
		},
		alternates: {
			canonical: `${BASE_URL}/resources/research-papers/${study.slug}`,
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
}

export async function generateStaticParams() {
	const studies = await listResearchPapers();

	return studies.map((study) => ({
		slug: study.slug,
	}));
}

export default async function ResearchPaperPage({ params }: Props) {
	const { slug } = await params;

	const study = await geResearchBySlug(slug);
	const otherPapers = await listResearchPapers(3);

	const jsonLd = structuredData(study);

	if (!study) return notFound();

	return (
		<>
			<Script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				id="case-study-structured-data"
				type="application/ld+json"
			/>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", item: BASE_URL },
					{ name: "Resources", item: `${BASE_URL}/resources` },
					{
						name: "Research papers",
						item: `${BASE_URL}/resources/research-papers`,
					},
					{
						name: study.title,
						item: `${BASE_URL}/resources/research-papers/${study.slug}`,
					},
				]}
			/>
			<main>
				<header
					className="border-b bg-card py-6 sm:py-8 md:py-12"
					role="banner"
				>
					<div className="container max-w-7xl">
						<div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
							<div className="space-y-4 py-4 sm:space-y-6 sm:py-6 lg:col-span-6">
								<nav aria-label="Breadcrumb navigation">
									<Button
										aria-label="Go back to all research papers"
										asChild
										className="group max-sm:size-9"
										size="sm"
										variant="ghost"
									>
										<Link href="/resources/research-papers">
											<IconArrowLeft
												aria-hidden="true"
												className="group-hover:-translate-x-1 transition-transform"
											/>
											<span className="hidden sm:inline">
												All Research papers
											</span>
										</Link>
									</Button>
								</nav>

								<ViewTransition name={`title-${study.slug}`}>
									<h1 className="text-primary-900 text-title-2 sm:text-title-3">
										{study.title}
									</h1>
								</ViewTransition>
							</div>

							<ViewTransition name={`image-${study?.slug}`}>
								<div className="lg:col-span-6">
									<div className="rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] border bg-stone-alpha-10 p-2">
										<div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl shadow-lg">
											{study.heroImage &&
												typeof study.heroImage !== "number" && (
													<Media
														fill
														imgClassName="object-cover"
														resource={study.heroImage}
														size="50vw"
													/>
												)}
										</div>
									</div>
								</div>
							</ViewTransition>
						</div>
					</div>
				</header>
				<Article content={study.content} />
				<section className="container max-w-7xl py-24">
					<div className="mb-6 flex items-center justify-between gap-4">
						<h2 className="text-title-3">
							More research papers from Sphere IT
						</h2>

						<Button asChild variant="outline">
							<Link href="/resources/research-papers">View more</Link>
						</Button>
					</div>
					<div className="grid grid-cols-3 gap-6">
						{otherPapers.map((study) => (
							<PapersCard data={study} key={study.slug} />
						))}
					</div>
				</section>
				<Cta showForm />
			</main>
		</>
	);
}

async function Article({ content }: { content: ResearchPaper["content"] }) {
	// const session = await auth.api.getSession({ headers: await headers() });

	const isLoggedIn = true;

	return (
		<div className="container relative max-w-7xl border-b">
			<article
				className="prose prose-stone prose-lg mx-auto max-w-4xl py-4 prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
				itemProp="articleBody"
			>
				<RichText
					className="prose prose-stone prose-lg prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
					data={content}
					enableGutter={false}
				/>
			</article>
			{!isLoggedIn && (
				<div className="relative pt-12 pb-24">
					<div className="-translate-y-full absolute inset-x-0 top-0 z-10 h-96 bg-linear-to-t from-20% from-background" />

					<div className="flex flex-col items-center gap-3">
						<h2 className="text-center text-title-4">
							Create an account to read the full paper.
						</h2>

						<p className="mb-3 text-center">
							Create a new account to read this research paper.
						</p>
						<LinkedInAuthButton />
					</div>
				</div>
			)}
		</div>
	);
}
