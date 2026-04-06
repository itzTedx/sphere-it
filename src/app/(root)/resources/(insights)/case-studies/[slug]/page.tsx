import { ViewTransition } from "react";

import type { Metadata } from "next/dist/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";
import { Button } from "@/components/ui/button";

import { IconArrowLeft } from "@/assets/icons";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import {
	findCaseStduyBySlug,
	listCaseStudies,
} from "@/modules/case-studies/actions/query";
import { Media } from "@/modules/cms/components/Media";
import RichText from "@/modules/cms/components/RichText";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { CaseStudy } from "@/payload-types";

interface Props {
	params: Promise<{ slug: string }>;
}

const structuredData = (study: CaseStudy) => {
	const image =
		study?.heroImage && typeof study.heroImage !== "number"
			? study.heroImage.url
			: "";

	return {
		"@context": "https://schema.org",
		"@type": "CaseStudy",
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
			"@id": `${BASE_URL}/resources/case-studies/${study?.slug}`,
		},
		keywords: [
			"case study",
			"digital transformation",
			"technology",
			"IT consulting",
			COMPANY_NAME,
		],
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const study = await findCaseStduyBySlug(slug);

	if (!study) {
		return {
			title: "Case Study Not Found",
			description: "The requested case study could not be found.",
		};
	}

	const description = study.meta?.description ?? study.title;
	const title = study.meta?.title ?? study.title;
	const image =
		study.heroImage && typeof study.heroImage !== "number"
			? study.heroImage.url
			: "";

	return {
		title,
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
			url: `${BASE_URL}/resources/case-studies/${study.slug}`,
			siteName: COMPANY_NAME,
			locale: "en_US",
			images: [
				{
					url: `${BASE_URL}${image}`,
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
			images: [`${BASE_URL}${image}`],
			creator: "@sphereglobal",
			site: "@sphereglobal",
		},
		alternates: {
			canonical: `${BASE_URL}/resources/case-studies/${study.slug}`,
		},
	};
}

export async function generateStaticParams() {
	const studies = await listCaseStudies();

	return studies.map((study) => ({
		slug: study.slug,
	}));
}

export default async function CaseStudyPage({ params }: Props) {
	const { slug } = await params;

	const study = await findCaseStduyBySlug(slug);

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
					{ name: "Case Studies", item: `${BASE_URL}/resources/case-studies` },
					{
						name: study.title,
						item: `${BASE_URL}/resources/case-studies/${study.slug}`,
					},
				]}
			/>
			<main>
				<header
					className="border-b bg-card py-6 sm:py-8 md:py-12"
					role="banner"
				>
					<div className="container max-w-7xl">
						<div className="grid gap-3 md:gap-6 lg:grid-cols-12 lg:gap-12">
							<div className="flex flex-col justify-between gap-3 md:gap-6 lg:col-span-7">
								<div className="space-y-3 pt-3 sm:space-y-4 sm:py-4 md:space-y-6 md:py-6">
									<nav aria-label="Breadcrumb navigation">
										<Button
											aria-label="Go back to all case studies"
											asChild
											className="group"
											size="sm"
											variant="ghost"
										>
											<Link href="/resources/case-studies">
												<IconArrowLeft
													aria-hidden="true"
													className="transition-transform group-hover:-translate-x-1"
												/>
												<span>All Case Studies</span>
											</Link>
										</Button>
									</nav>

									<ViewTransition name={`title-${study.slug}`}>
										<h1 className="text-primary-900 text-title-4 md:text-title-3">
											{study.title}
										</h1>
									</ViewTransition>
								</div>
								<ul
									className="grid grid-cols-2 gap-3 sm:grid-cols-3"
									role="list"
								>
									{study.highlights?.map((list) => (
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
							<ViewTransition name={`image-${study?.slug}`}>
								<div className="lg:col-span-5">
									<div className="rounded-[calc(var(--radius-xl)+--spacing(2))] border bg-stone-alpha-10 p-2">
										<div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl shadow-lg sm:aspect-5/6">
											{/* {study.client && (
												<Image
													alt={`${study?.title} - Featured image`}
													className="z-10 object-cover"
													height={60}
													priority
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
													src={study?.client.logo}
													width={120}
												/>
											)} */}
											{study.heroImage &&
												typeof study.heroImage !== "string" && (
													<Media
														fill
														imgClassName="object-cover"
														resource={study.heroImage}
														size="33vw"
													/>
												)}
											{/* <Image
												alt={`${study?.title} - Featured image`}
												className="object-cover"
												fill
												priority
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
												src={study?.metadata.image}
											/> */}
										</div>
									</div>
								</div>
							</ViewTransition>
						</div>
					</div>
				</header>
				<div className="container mb-24 max-w-7xl border-b">
					{/* <CaseStudiesContent study={study}> */}
					<article
						className="prose prose-stone prose-lg mx-auto max-w-none py-4 prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
						itemProp="articleBody"
					>
						<RichText
							className="prose prose-stone prose-lg prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
							data={study.content}
							enableGutter={false}
						/>
					</article>
					{/* <MDXContent
							components={{
								h1: (props) => <h1 id={slugify(props.children)} {...props} />,
								h2: (props) => <h2 id={slugify(props.children)} {...props} />,
								h3: (props) => <h3 id={slugify(props.children)} {...props} />,
								h4: (props) => <h4 id={slugify(props.children)} {...props} />,
								h5: (props) => <h5 id={slugify(props.children)} {...props} />,
								h6: (props) => <h6 id={slugify(props.children)} {...props} />,
							}}
							source={study?.content}
						/> */}
					{/* </CaseStudiesContent> */}
				</div>
				<Cta showForm />
			</main>
		</>
	);
}
