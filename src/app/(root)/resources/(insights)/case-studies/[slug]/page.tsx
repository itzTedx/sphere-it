import { ViewTransition } from "react";

import type { Metadata } from "next/dist/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import MDXContent from "@/components/markdown";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { slugify } from "@/lib/utils";
import { geStudyBySlug, listStudies } from "@/modules/case-studies/actions";
import { CaseStudy } from "@/modules/case-studies/actions/types";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";

import { CaseStudiesContent } from "../../components/case-studies-content";

interface Props {
	params: Promise<{ slug: string }>;
}

const structuredData = (study: CaseStudy | null) => ({
	"@context": "https://schema.org",
	"@type": "CaseStudy",
	headline: study?.metadata.title,
	image: `${BASE_URL}${study?.metadata.image}`,
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
		"@id": `${BASE_URL}/resources/case-studies/${study?.metadata.slug}`,
	},
	keywords: [
		"case study",
		"digital transformation",
		"technology",
		"IT consulting",
		COMPANY_NAME,
	],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const study = await geStudyBySlug(slug);

	if (!study) {
		return {
			title: "Case Study Not Found",
			description: "The requested case study could not be found.",
		};
	}

	const description = study.metadata.meta.description;
	const title = study.metadata.meta.title;

	return {
		title: `${title} | ${COMPANY_NAME} Case Study`,
		description,
		keywords: [
			"case study",
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
			url: `${BASE_URL}/resources/case-studies/${study.metadata.slug}`,
			siteName: COMPANY_NAME,
			locale: "en_US",
			images: [
				{
					url: `${BASE_URL}${study.metadata.image}`,
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
			images: [`${BASE_URL}${study.metadata.image}`],
			creator: "@sphereglobal",
			site: "@sphereglobal",
		},
		alternates: {
			canonical: `${BASE_URL}/resources/case-studies/${study.metadata.slug}`,
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
	const studies = listStudies();

	return studies.map((study) => ({
		slug: study.slug,
	}));
}

export default async function CaseStudyPage({ params }: Props) {
	const { slug } = await params;

	const study = await geStudyBySlug(slug);

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
					{ name: "Case Studies", item: `${BASE_URL}/resources/case-studies` },
					{
						name: study.metadata.title,
						item: `${BASE_URL}/resources/case-studies/${study.metadata.slug}`,
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
							<div className="flex flex-col justify-between gap-6 lg:col-span-7">
								<div className="space-y-4 py-4 sm:space-y-6 sm:py-6">
									<nav aria-label="Breadcrumb navigation">
										<Button
											aria-label="Go back to all case studies"
											asChild
											className="group max-sm:size-9"
											size="sm"
											variant="ghost"
										>
											<Link href="/resources/case-studies">
												<IconArrowLeft
													aria-hidden="true"
													className="group-hover:-translate-x-1 transition-transform"
												/>
												<span className="hidden sm:inline">
													All Case Studies
												</span>
											</Link>
										</Button>
									</nav>

									<ViewTransition name={`title-${study.metadata.slug}`}>
										<h1 className="text-primary-900 text-title-2 sm:text-title-3">
											{study.metadata.title}
										</h1>
									</ViewTransition>
								</div>
								<ul
									className="grid grid-cols-2 gap-3 sm:grid-cols-3"
									role="list"
								>
									{study.metadata.lists?.map((list) => (
										<li
											className="flex aspect-square flex-col justify-between rounded-lg bg-primary-500/16 p-4 text-primary-800 first:bg-foreground first:text-primary-100 sm:p-6"
											key={list.label}
										>
											<h2 className="text-title-5 sm:text-title-4">
												{list.value}
											</h2>
											<p className="text-subhead-sm sm:text-subhead-base">
												{list.label}
											</p>
										</li>
									))}
								</ul>
							</div>
							<ViewTransition name={`image-${study?.metadata.slug}`}>
								<div className="lg:col-span-5">
									<div className="rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] border bg-stone-alpha-10 p-2">
										<div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl shadow-lg sm:aspect-5/6">
											{study.metadata.client && (
												<Image
													alt={`${study?.metadata.title} - Featured image`}
													className="z-10 object-cover"
													height={60}
													priority
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
													src={study?.metadata.client.logo}
													width={120}
												/>
											)}

											<Image
												alt={`${study?.metadata.title} - Featured image`}
												className="object-cover"
												fill
												priority
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
												src={study?.metadata.image}
											/>
										</div>
									</div>
								</div>
							</ViewTransition>
						</div>
					</div>
				</header>
				<div className="container mb-24 max-w-7xl border-b">
					<CaseStudiesContent study={study.metadata}>
						<MDXContent
							components={{
								h1: (props) => <h1 id={slugify(props.children)} {...props} />,
								h2: (props) => <h2 id={slugify(props.children)} {...props} />,
								h3: (props) => <h3 id={slugify(props.children)} {...props} />,
								h4: (props) => <h4 id={slugify(props.children)} {...props} />,
								h5: (props) => <h5 id={slugify(props.children)} {...props} />,
								h6: (props) => <h6 id={slugify(props.children)} {...props} />,
							}}
							source={study?.content}
						/>
					</CaseStudiesContent>
				</div>
				<Cta showForm />
			</main>
		</>
	);
}
