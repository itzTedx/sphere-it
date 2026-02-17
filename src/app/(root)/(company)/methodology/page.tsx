import type { Metadata } from "next";
import Image from "next/image";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";

import {
	IconArrowRight,
	IconBullseye,
	IconRocket,
	IconSearch,
	IconShield,
} from "@/assets/icons";

import { BASE_URL } from "@/data/site-config";
import { getMethodologyPageGlobal } from "@/modules/global/methodology";
import { CMSLink } from "@/modules/cms/components/Link";

const AXIS_ICONS = {
	bullseye: IconBullseye,
	search: IconSearch,
	rocket: IconRocket,
	shield: IconShield,
} as const;

const defaultMeta = {
	title: "AXIS Methodology - IT Strategy & Predictable Delivery Framework",
	description:
		"Explore Sphere IT's AXIS methodology, a structured, data-driven IT consulting framework that delivers clarity, cost predictability, and scalable outcomes.",
};

export async function generateMetadata(): Promise<Metadata> {
	const data = await getMethodologyPageGlobal();
	const { seo } = data ?? {};

	const title = seo?.metaTitle ?? defaultMeta.title;
	const description = seo?.metaDescription ?? defaultMeta.description;
	const ogImage =
		typeof seo?.ogImage === "object" && seo.ogImage?.url
			? seo.ogImage.url
			: undefined;

	return {
		title,
		description,
		keywords: [
			"contact sphere global",
			"AI consulting contact",
			"technology solutions contact",
			"digital transformation consulting",
			"automation frameworks contact",
			"enterprise technology support",
			"AI platform consultation",
			"business automation contact",
		],
		openGraph: {
			title,
			description,
			url: `${BASE_URL}/methodology`,
			type: "website",
			...(ogImage && {
				images: [
					{
						url: ogImage,
						width: 1200,
						height: 630,
						alt: title,
					},
				],
			}),
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
		alternates: {
			canonical: `${BASE_URL}/methodology`,
		},
	};
}

export default async function MethodologyPage() {
	const pageData = await getMethodologyPageGlobal();
	const hero = pageData?.hero;
	const valueProposition = pageData?.valueProposition;
	const phaseItems = pageData?.phases?.items ?? [];

	const heroImageUrl =
		hero?.image && typeof hero.image === "object" && "url" in hero.image
			? (hero.image.url ?? "/images/services/assure-in-action.webp")
			: "/images/services/assure-in-action.webp";

	return (
		<main id="main-content">
			<header className="relative z-50 space-y-4 border-b bg-card py-9 sm:space-y-6 sm:py-12 md:py-16">
				<div className="container grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div>
						<h1 className="text-primary-900 text-title-4 md:text-title-3">
							{hero?.title ?? "A.X.I.S Methodology"}
						</h1>

						<p className="mb-6 text-lg sm:text-xl">
							{hero?.subtitle ??
								"Tested and proven Sphere methodology for excellence"}
						</p>

						{hero?.ctaLink?.label ? (
							<div className="space-x-4">
								<CMSLink
									appearance="secondary"
									label={hero.ctaLink.label}
									newTab={hero.ctaLink.newTab}
									reference={
										hero.ctaLink.type === "reference"
											? hero.ctaLink.reference
											: undefined
									}
									size="lg"
									type={
										hero.ctaLink.type === "reference" ? "reference" : "custom"
									}
									url={
										hero.ctaLink.type === "page"
											? hero.ctaLink.page ?? undefined
											: hero.ctaLink.type === "custom"
												? hero.ctaLink.url ?? undefined
												: undefined
									}
								>
									<span className="w-7">
										<IconArrowRight />
									</span>
								</CMSLink>
							</div>
						) : (
							<div className="space-x-4">
								<CMSLink
									appearance="secondary"
									label="Get Started"
									size="lg"
									type="custom"
									url="/services"
								>
									<span className="w-7">
										<IconArrowRight />
									</span>
								</CMSLink>
							</div>
						)}
					</div>
					<div className="relative order-first aspect-10/7 overflow-hidden rounded-xl lg:order-last">
						<Image
							alt=""
							className="object-cover"
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							src={heroImageUrl}
						/>
					</div>
				</div>
			</header>

			<section className="container max-w-7xl py-12 sm:py-16 md:py-20">
				<div>
					<Badge>{valueProposition?.badge ?? "Value Proposition"}</Badge>
					<h2 className="mt-1.5 text-primary-900 text-title-3 md:text-title-2">
						{valueProposition?.heading ??
							"Precision, Predictability, and Outcomes"}
					</h2>
					<p className="mt-2 text-lg text-muted-foreground">
						{valueProposition?.description ??
							"AXIS Methodology is a proven, structured, and data-driven framework designed to deliver clarity, predictability, and measurable outcomes for the clients. With precision and pragmatism at its core, AXIS enables faster decisions, predictable delivery, and strong business value."}
					</p>
				</div>
				<div className="mt-6 grid gap-6 sm:grid-cols-2">
					{phaseItems.length > 0 ? (
						phaseItems.map((phase) => {
							const IconComponent = AXIS_ICONS[phase.icon] ?? IconBullseye;
							return (
								<div
									className="rounded-2xl border bg-card p-6 shadow-sm"
									key={phase.id ?? phase.title}
								>
									<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
										<IconComponent className="size-6" />
									</div>
									<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
										{phase.title}
									</h3>
									<p className="text-lg">{phase.description}</p>
								</div>
							);
						})
					) : (
						<>
							<div className="rounded-2xl border bg-card p-6 shadow-sm">
								<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
									<IconBullseye className="size-6" />
								</div>
								<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
									Assess
								</h3>
								<p className="text-lg">
									In the Assess phase, it provides complete clarity and
									confidence by precisely defining the problem, scope, risks,
									success metrics and stakeholder expectations.
								</p>
							</div>
							<div className="rounded-2xl border bg-card p-6 shadow-sm">
								<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
									<IconSearch className="size-6" />
								</div>
								<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
									eXplore
								</h3>
								<p className="text-lg">
									In the eXplore phase, it delivers evidence backed feasibility,
									stress tested options, and early validation of what will work.
								</p>
							</div>
							<div className="rounded-2xl border bg-card p-6 shadow-sm">
								<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
									<IconRocket className="size-6" />
								</div>
								<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
									Implement
								</h3>
								<p className="text-lg">
									Faster time to value through disciplined execution, structured
									governance, and seamless integration across systems and teams.
								</p>
							</div>
							<div className="rounded-2xl border bg-card p-6 shadow-sm">
								<div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
									<IconShield className="size-6" />
								</div>
								<h3 className="mb-2 font-display font-semibold text-primary-900 text-title-4">
									Sustain
								</h3>
								<p className="text-lg">
									Long term reliability with continuous performance monitoring,
									data backed insights, and proactive enhancements.
								</p>
							</div>
						</>
					)}
				</div>
			</section>

			<Cta />
		</main>
	);
}
