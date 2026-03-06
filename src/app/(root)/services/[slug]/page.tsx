import { Fragment, type ReactNode } from "react";
import type { Metadata } from "next/dist/types";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

import * as Icons from "@/assets/icons";
import {
	IconArrowRight,
	IconAssure,
	IconAugment,
	IconAutomate,
	IconElevate,
	IconEvaluate,
} from "@/assets/icons";

import { TECH_STACKS } from "@/data/constants";
import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { CMSLink } from "@/modules/cms/components/Link";
import { Media } from "@/modules/cms/components/Media";
import RichText from "@/modules/cms/components/RichText";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import {
	generateFAQStructuredData,
	getFAQCategoryFromSlug,
} from "@/modules/seo/faq-jsonld";
import {
	findServiceBySlug,
	listServices,
} from "@/modules/services/actions/query";
import type { Partner, Service as ServiceDoc } from "@/payload-types";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const services = await listServices();

	return services.map((service) => ({
		slug: service.slug,
	}));
}

export default async function ServicePage({ params }: Props) {
	const { slug } = await params;

	const service = await findServiceBySlug(slug);

	if (!service) return notFound();

	const ICONS = {
		elevate: IconElevate,
		automate: IconAutomate,
		evaluate: IconEvaluate,
		assure: IconAssure,
		augment: IconAugment,
	} as const;

	const Icon = ICONS[service.slug as keyof typeof ICONS] ?? IconElevate;

	const faqCategory = await getFAQCategoryFromSlug(service.slug);
	const faqStructuredData = await generateFAQStructuredData(faqCategory);

	const metaTitle = service.meta?.title ?? service.title;
	const metaDescription = service.meta?.description ?? service.homepage.title;

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: metaTitle,
		description: metaDescription,
		provider: {
			"@type": "Organization",
			name: COMPANY_NAME,
			url: BASE_URL,
		},
		serviceType: service.service,
		category: service.service,
		keywords: [service.service, service.title, metaDescription, COMPANY_NAME],
		areaServed: {
			"@type": "Country",
			name: "United Arab Emirates",
		},
		offers: {
			"@type": "Offer",
			description: metaDescription,
			category: service.service,
		},
	};

	return (
		<>
			{faqStructuredData && (
				<script
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqStructuredData),
					}}
					type="application/ld+json"
				/>
			)}
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				type="application/ld+json"
			/>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", item: `${BASE_URL}` },
					{ name: "Services", item: `${BASE_URL}/services` },
					{
						name: service.title,
						item: `${BASE_URL}/services/${service.slug}`,
					},
				]}
			/>
			<main>
				<header className="relative z-50 space-y-4 border-b bg-card py-9 sm:space-y-6 sm:py-12 md:py-16">
					<div className="container grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
						<div className="space-y-6">
							<Badge>
								<Icon />
								{service.service}
							</Badge>
							<h1 className="font-semibold text-primary-900 text-title-5 sm:text-title-4 md:text-title-3">
								{service.title}
							</h1>
							<RichText
								className="prose-xl prose-li:before:-left-6 prose-li:relative prose-ul:list-none prose-li:before:absolute prose-li:before:top-[0.7rem] prose-li:before:h-4 prose-li:before:w-4 prose-li:before:bg-[url('/svg/checkbox.svg')] prose-li:before:bg-contain prose-li:before:bg-no-repeat prose-li:before:content-['']"
								data={service.description}
								enableGutter={false}
							/>
							{service.partners && service.partners.length > 0 && (
								<div className="flex items-start gap-4 md:hidden">
									<h2 className="font-display text-muted-foreground text-subhead-base">
										Partners:
									</h2>
									<ul className="flex flex-wrap items-center gap-4">
										{service.partners
											?.filter(
												(partner): partner is Partner =>
													typeof partner === "object" && partner !== null
											)
											.map((partner) => (
												<Fragment key={partner.id}>
													<li>
														<Media resource={partner.logo} />
													</li>

													<li className="h-3 w-px bg-muted-background last:hidden" />
												</Fragment>
											))}
									</ul>
								</div>
							)}
							<div className="flex flex-wrap items-center gap-3">
								{service.ctaButtons &&
									service.ctaButtons.map((cta) => {
										const link = cta.link;

										if (!link?.label) return null;

										const isOutline = link.appearance === "outline";

										return (
											<CMSLink
												appearance={isOutline ? "outline" : "default"}
												className=""
												key={cta.id ?? link.label}
												label={link.label}
												newTab={link.newTab}
												reference={
													link.type === "reference" ? link.reference : undefined
												}
												size="lg"
												type={
													link.type === "reference" ? "reference" : "custom"
												}
												url={
													link.type === "page"
														? (link.page ?? undefined)
														: link.type === "custom"
															? (link.url ?? undefined)
															: undefined
												}
											>
												{!isOutline && (
													<span className="w-7">
														<IconArrowRight />
													</span>
												)}
											</CMSLink>
										);
									})}
								{/* <Button asChild size="lg">
									<Link href="/contact">
										Get Started
										<span className="w-7">
											<IconArrowRight />
										</span>
									</Link>
								</Button>
								<Button asChild size="lg" variant="ghost">
									{service.slug === "assure" ? (
										<Link href="/contact">Request a Assure</Link>
									) : service.slug === "augment" ? (
										<Link href="/careers#application">
											Explore Talent Models
										</Link>
									) : (
										<Link href="/contact">Request a Demo</Link>
									)}
								</Button> */}
							</div>
						</div>
						<div className="relative order-first aspect-10/7 lg:order-last">
							{service.heroImage && typeof service.heroImage !== "number" && (
								<Media
									className="object-contain"
									fill
									resource={service.heroImage}
									size="33vw"
								/>
							)}
						</div>
					</div>
					{service.partners && service.partners.length > 0 && (
						<div className="container hidden max-w-7xl items-center justify-end gap-4 md:flex">
							<h2 className="font-display text-muted-foreground text-subhead-base">
								Partners:
							</h2>
							<ul className="flex items-center gap-4 pr-6">
								{service.partners
									?.filter(
										(partner): partner is Partner =>
											typeof partner === "object" && partner !== null
									)
									.map((partner) => (
										<Fragment key={partner.id}>
											<li>
												<Media resource={partner.logo} />
											</li>

											<li className="h-3 w-px bg-muted-background last:hidden" />
										</Fragment>
									))}
							</ul>
						</div>
					)}
				</header>
				<article className="mt-12" id="main-content">
					<RichText
						className="prose prose-stone container prose-h2:mt-0 prose-h3:mt-4 prose-ol:mt-0 prose-table:mt-0 prose-table:prose-p:mt-0 prose-ul:mt-0 prose-h2:mb-6 prose-h3:mb-4 prose-headings:mb-4 max-w-7xl prose-h2:font-semibold prose-h2:text-title-4 prose-h3:text-title-5 prose-headings:text-primary-900 prose-li:prose-p:text-base prose-li:text-base prose-p:text-base prose-p:leading-normal prose-p:tracking-tight sm:prose-h2:text-title-3 sm:prose-h3:text-title-4 sm:prose-li:prose-p:text-lg sm:prose-li:text-lg sm:prose-p:text-lg lg:prose-h2:text-title-2 lg:prose-h3:text-title-3 lg:prose-p:text-xl"
						data={service.content}
						enableGutter={false}
					/>
				</article>

				<Cta
					buttonText={
						service.slug === "elevate" || service.slug === "evaluate"
							? "Speak With an Expert"
							: undefined
					}
					showForm
					title={
						service.slug === "elevate"
							? "Ready to Elevate Your Enterprise with AI That Works?"
							: service.slug === "evaluate"
								? "Empower Decisions with Data That Delivers."
								: undefined
					}
				/>
			</main>
		</>
	);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const service = (await findServiceBySlug(slug)) as ServiceDoc | null;

	if (!service) {
		return {
			title: "Service Not Found",
			description: "The requested service could not be found.",
		};
	}

	const description = service.meta?.description ?? service.homepage.description;
	const title = service.meta?.title ?? service.title;
	const image =
		service.meta?.image && typeof service.meta.image !== "number"
			? service.meta.image.url
			: "";

	return {
		title: `${title} | ${COMPANY_NAME} Services`,
		description,
		keywords: [
			"IT services",
			"digital transformation",
			"technology solutions",
			"enterprise solutions",
			service.service,
			service.title,
			COMPANY_NAME,
			"UAE technology",
			"GCC technology",
		],

		openGraph: {
			title,
			description,
			type: "article",
			url: `${BASE_URL}/services/${service.slug}`,
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
			title,
			description,
			images: [image ? `${BASE_URL}${image}` : `${BASE_URL}/logo.png`],
			creator: "@sphereitglobal",
			site: "@sphereitglobal",
		},
		alternates: {
			canonical: `${BASE_URL}/services/${service.slug}`,
		},
	};
}

type TechMarqueeProps = {
	children?: ReactNode;
};

export function TechMarquee({ children }: TechMarqueeProps) {
	const label = children ?? "300+ People & Quick rap up time";

	return (
		<div className="relative z-10 space-y-3 rounded-xl bg-stone-alpha-10 p-3">
			<span className="flex items-center gap-2 font-medium text-stone-500">
				<Icons.IconLayers />
				{label}
			</span>
			<div className="not-prose relative flex w-full overflow-hidden rounded-xl bg-card shadow-md">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-linear-to-r from-background to-transparent"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-linear-to-l from-background to-transparent"
				/>
				<Marquee
					className="w-full p-4 [--duration:40s] [--gap:3rem]"
					repeat={3}
				>
					{TECH_STACKS.map((review) => (
						<StackCard key={review.name} {...review} />
					))}
				</Marquee>
			</div>
		</div>
	);
}

function StackCard({ img, name }: (typeof TECH_STACKS)[number]) {
	return (
		<figure className="group/stack flex items-center justify-center gap-2.5">
			<div className="flex size-10 items-center justify-center rounded-lg bg-card shadow-sm transition-transform group-hover/stack:scale-110">
				<Image
					alt={`Tech-stack: ${name}`}
					className="object-contain"
					height={24}
					src={img}
					width={24}
				/>
			</div>
			<figcaption className="font-medium text-foreground">{name}</figcaption>
		</figure>
	);
}
