import { ViewTransition } from "react";

import type { Metadata } from "next/dist/types";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { getServerSession } from "@delmaredigital/payload-better-auth";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { payload } from "@/lib/payload";
import { Media } from "@/modules/cms/components/Media";
import {
	geResearchBySlug,
	listResearchPapers,
} from "@/modules/research-papers/actions";
import { PapersCard } from "@/modules/research-papers/components/paper-card";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { ResearchPaper } from "@/payload-types";

import { Article } from "./article-component";

interface Props {
	params: Promise<{ slug: string }>;
}

function getPreviewContent(content: ResearchPaper["content"]): ResearchPaper["content"] {
	if (!content || typeof content !== "object") return content;
	const root =
		"root" in content && typeof content.root === "object" && content.root
			? content.root
			: null;
	if (!root || !Array.isArray(root.children)) return content;

	return {
		...content,
		root: {
			...root,
			children: root.children.slice(0, 4),
		},
	};
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
	try {
		const studies = await listResearchPapers();

		return studies.map((study) => ({
			slug: study.slug,
		}));
	} catch (error) {
		console.warn(
			"[generateStaticParams] Failed to fetch research papers during build, falling back to on-demand rendering.",
			error
		);
		return [];
	}
}

export default async function ResearchPaperPage({ params }: Props) {
	const { slug } = await params;
	const [session, cookieStore] = await Promise.all([
		getServerSession(payload, await headers()),
		cookies(),
	]);

	const hasEnquiryAccess =
		cookieStore.get("research-paper-access")?.value === "granted";
	const isLoggedIn = Boolean(session?.user) || hasEnquiryAccess;

	const study = await geResearchBySlug(slug);
	// const otherPapers = await listResearchPapers(3);

	const jsonLd = structuredData(study);

	if (!study) return notFound();

	return (
		<>
			<Script id="case-study-structured-data" type="application/ld+json">
				{JSON.stringify(jsonLd)}
			</Script>
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
			<main id="main-content">
				<header
					className="border-b bg-card py-6 sm:py-8 md:py-12"
					role="banner"
				>
					<div className="container max-w-7xl">
						<div className="grid gap-3 md:gap-6 lg:grid-cols-12 lg:gap-12">
							<div className="space-y-3 pt-3 sm:space-y-4 sm:py-4 md:space-y-6 md:py-6 lg:col-span-6">
								<nav aria-label="Breadcrumb navigation">
									<Button
										aria-label="Go back to all research papers"
										asChild
										className="group"
										size="sm"
										variant="ghost"
									>
										<Link href="/resources/research-papers">
											<IconArrowLeft
												aria-hidden="true"
												className="transition-transform group-hover:-translate-x-1"
											/>
											<span>All Research papers</span>
										</Link>
									</Button>
								</nav>

								<ViewTransition name={`title-${study.slug}`}>
									<h1 className="text-primary-900 text-title-4 md:text-title-3">
										{study.title}
									</h1>
								</ViewTransition>
							</div>

							<ViewTransition name={`image-${study?.slug}`}>
								<div className="lg:col-span-6">
									<div className="rounded-[calc(var(--radius-xl)+--spacing(2))] border bg-stone-alpha-10 p-2">
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
				<Article
					content={isLoggedIn ? study.content : getPreviewContent(study.content)}
					isLoggedIn={isLoggedIn}
					title={study.title}
				/>
				{study.relatedResearchPapers &&
					study.relatedResearchPapers?.filter(
						(item): item is ResearchPaper => typeof item !== "number"
					).length > 0 && (
						<section className="container max-w-7xl py-24">
							<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<h2 className="text-title-5 sm:text-title-4 md:text-title-3">
									More research papers from Sphere IT
								</h2>

								<Button asChild variant="outline">
									<Link href="/resources/research-papers">View more</Link>
								</Button>
							</div>
							<div className="grid gap-3 md:grid-cols-3 md:gap-6">
								{study.relatedResearchPapers
									.filter(
										(item): item is ResearchPaper => typeof item !== "number"
									)
									.map((paper) => (
										<PapersCard data={paper} key={paper.slug} />
									))}
							</div>
						</section>
					)}
				<Cta showForm={isLoggedIn} />
			</main>
		</>
	);
}
