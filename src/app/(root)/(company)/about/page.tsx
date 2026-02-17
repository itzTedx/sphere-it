import { Suspense } from "react";

import { Route } from "next";
import { Metadata } from "next/dist/types";
import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { PathsBackground } from "@/components/ui/motion/lines-path-background";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";

import { CheckmarkIconBox } from "@/assets/checkmark-iconbox";
import { IconArrowRight, IconCheckmark, IconPdf } from "@/assets/icons";
import { IconSocialLinkedin } from "@/assets/icons/social";
import { IconChip } from "@/assets/icons/technology";
import { LogoIcon } from "@/assets/logo";

import { BASE_URL } from "@/data/site-config";
import { DownloadDeck } from "@/modules/auth/components/download-deck";
import RichText from "@/modules/cms/components/RichText";
import { CMSLink } from "@/modules/cms/components/Link";
import { getAboutPageGlobal } from "@/modules/global/about";
import { getTeamsGlobal } from "@/modules/global/teams";
import { BreadcrumbJsonLd } from "@/modules/seo/breadcrumb-jsonld";
import { Clients } from "@/modules/views";
import { Partners } from "@/modules/views/partners";
import { Media } from "@/payload-types";

import { structuredData } from "./structured-data";

export async function generateMetadata(): Promise<Metadata> {
	const data = await getAboutPageGlobal();
	const { seo } = data;

	const ogImage =
		typeof seo?.ogImage === "object" && seo.ogImage?.url
			? seo.ogImage.url
			: "/images/banking.webp";

	return {
		title: seo?.metaTitle,
		description: seo?.metaDescription,
		keywords: [
			"Sphere IT Global",
			"IT solutions",
			"technology services",
			"digital transformation",
			"BFSI technology",
			"software development",
			"cloud solutions",
			"GCC technology",
			"precision engineering",
			"pragmatic solutions",
		],
		openGraph: {
			title: seo?.metaTitle,
			description: seo?.metaDescription,
			type: "website",
			url: `${BASE_URL}/about`,
			siteName: "Sphere IT Global",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: "Sphere IT Global - IT Solutions and Technology Services",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: seo?.metaTitle,
			description: seo?.metaDescription,
			images: [ogImage],
		},
		alternates: {
			canonical: `${BASE_URL}/about`,
		},
	};
}

export default async function AboutPage() {
	const [pageData, teamsData] = await Promise.all([
		getAboutPageGlobal(),
		getTeamsGlobal(),
	]);

	const { hero, story, values, team, hiring, cta } = pageData;
	const { leaderships, members } = teamsData;

	return (
		<>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				type="application/ld+json"
			/>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", item: `${BASE_URL}` },
					{ name: "About", item: `${BASE_URL}/about` },
				]}
			/>
			<main>
				<header
					className="relative z-50 h-[calc(100svh-9rem)] overflow-hidden border-b bg-card sm:h-[calc(100lvh-4rem)]"
					role="banner"
				>
					<div className="container flex h-full max-w-7xl flex-col justify-between py-9 sm:py-16 md:py-20 xl:py-32">
						<div className="max-w-2xl">
							<Badge variant="ghost">{hero?.badge}</Badge>
							{hero?.title && (
								<RichText
									className="prose-h1:text-primary-900 prose-h1:text-title-3 md:prose-h1:text-title-1"
									data={hero.title}
									enableGutter={false}
									enableProse={false}
								/>
							)}
						</div>
						<div className="max-w-xl space-y-6">
							<RichText
								className="prose-strong:font-semibold prose-p:text-lg prose-strong:text-primary-600 sm:prose-p:text-xl lg:prose-p:text-2xl"
								data={hero.description}
								enableGutter={false}
							/>

							<Suspense
								fallback={
									<Button
										className="bg-stone-200/50 text-stone-700"
										variant="ghost"
									>
										View Our Introduction
										<span
											aria-hidden="true"
											className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300/50"
										>
											<IconPdf aria-hidden="true" className="text-accent" />
										</span>
									</Button>
								}
							>
								<DownloadDeck />
							</Suspense>
						</div>
					</div>
					<Suspense>
						<PathsBackground
							className="h-[calc(100lvh-4rem)] w-full"
							position={-1}
						/>
					</Suspense>
				</header>

				<Clients />

				<section
					aria-labelledby="about-heading"
					className="relative my-12 overflow-hidden md:my-12"
					id="main-content"
				>
					<div className="container relative z-10 max-w-4xl py-12">
						<Badge showDashes>
							<LogoIcon /> {story?.badge}
						</Badge>
						<h2 className="sr-only" id="about-heading">
							{story?.badge}
						</h2>
						{story?.content && (
							<RichText
								className="mt-6 prose-strong:font-semibold prose-p:text-lg prose-strong:text-primary-600 sm:prose-p:text-xl lg:prose-p:text-2xl"
								data={story.content}
								enableGutter={false}
							/>
						)}
					</div>
					<FlickeringGrid
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 z-1 opacity-50"
						color="#D6D3D1"
						flickerChance={0.1}
						gridGap={4}
						height={1080}
						maxOpacity={0.5}
						squareSize={4}
						width={1920}
					/>
				</section>
				<Partners />

				<section
					aria-labelledby="values-heading"
					className="container max-w-7xl py-20"
				>
					<Badge showDashes>
						<IconChip className="text-accent" /> {values?.badge}
					</Badge>
					{values?.title && (
						<RichText
							className="mt-6 prose-h2:text-primary-900 prose-h2:text-title-2"
							data={values.title}
							enableGutter={false}
							enableProse={false}
						/>
					)}
					<p className="mt-4 max-w-4xl text-balance text-lg text-muted-foreground">
						{values?.description}
					</p>

					<div
						aria-label="Company core values"
						className="my-9 grid grid-cols-1 gap-6 sm:grid-cols-2"
						role="list"
					>
						{values?.items?.map((value, index) => {
							const image = value.image as Media;
							return (
								<article
									className="overflow-hidden rounded-2xl bg-card shadow-md"
									key={index}
									role="listitem"
								>
									<div className="relative flex aspect-[6/4.1] items-end bg-linear-to-b from-primary-950 to-foreground">
										{image?.url && (
											<Image
												alt={
													image.alt ||
													`Illustration representing ${value.title}`
												}
												className="object-cover"
												fill
												src={image.url}
											/>
										)}
										<div className="relative z-10 max-w-sm space-y-2 px-8 py-6">
											<h3 className="text-card text-title-3">{value.title}</h3>
											<p className="font-display text-primary-300">
												{value.description}
											</p>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</section>
				<section aria-labelledby="team-heading" id="team">
					<div className="container max-w-7xl space-y-6 rounded-4xl border bg-card py-12">
						<div>
							<Badge>{team?.badge}</Badge>

							<div className="max-w-4xl">
								{team?.title && (
									<RichText
										className="mt-6 prose-h2:text-primary-900 prose-h2:text-title-4 sm:prose-h2:text-title-3 md:prose-h2:text-title-2"
										data={team.title}
										enableGutter={false}
										enableProse={false}
									/>
								)}
								<p className="mt-3 text-balance text-lg text-stone-600">
									{team?.description}
								</p>
							</div>
						</div>

						<Item className="border-border" size="sm" variant="muted">
							<ItemMedia>
								<IconCheckmark
									aria-hidden="true"
									className="size-5 text-stone-600"
								/>
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="font-display text-subhead-base sm:text-subhead-lg">
									<h3 className="text-stone-600">{team?.leadershipLabel}</h3>
								</ItemTitle>
							</ItemContent>
						</Item>

						<div
							aria-label="Leadership team"
							className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
							role="list"
						>
							{leaderships?.map((member, i) => {
								const picture = member.picture as Media;
								return (
									<TeamCard
										data={{
											name: member.name,
											designation: member.position,
											image: picture?.url || "",
											linkedin: member.linkedinUrl || undefined,
										}}
										key={i}
									/>
								);
							})}
						</div>

						<Item className="border-border" size="sm" variant="muted">
							<ItemMedia>
								<IconCheckmark
									aria-hidden="true"
									className="size-5 text-stone-600"
								/>
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="font-display text-subhead-base sm:text-subhead-lg">
									<h3 className="text-stone-600">{team?.teamLabel}</h3>
								</ItemTitle>
							</ItemContent>
						</Item>

						<div
							aria-label="Expert team members"
							className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4"
							role="list"
						>
							{members?.map((member, i) => {
								const picture = member.picture as Media;
								return (
									<TeamCard
										data={{
											name: member.name,
											designation: member.position,
											image: picture?.url || "",
											linkedin: member.linkedinUrl || undefined,
										}}
										key={i}
									/>
								);
							})}
						</div>
					</div>
				</section>
				<section
					aria-labelledby="hiring-heading"
					className="container max-w-7xl py-12 md:py-20"
				>
					<Badge>{hiring?.badge}</Badge>
					<div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
						<div>
							{hiring?.title && (
								<RichText
									className="prose-h2:text-primary-900 prose-h2:text-title-4 sm:prose-h2:text-title-3 md:prose-h2:text-title-2"
									data={hiring.title}
									enableGutter={false}
									enableProse={false}
								/>
							)}
							<p className="mt-1 max-w-xl text-balance sm:mt-3 sm:text-lg">
								{hiring?.description}
							</p>
						</div>
						{hiring?.ctaLink && (
							<CMSLink
								appearance="ghost"
								className="justify-between md:justify-center"
								label={hiring.ctaLink.label || "Explore open Opportunities"}
								newTab={hiring.ctaLink.newTab}
								reference={
									hiring.ctaLink.type === "reference"
										? hiring.ctaLink.reference
										: undefined
								}
								size="default"
								type={
									hiring.ctaLink.type === "reference" ? "reference" : "custom"
								}
								url={
									hiring.ctaLink.type === "page"
										? hiring.ctaLink.page ?? undefined
										: hiring.ctaLink.type === "custom"
											? hiring.ctaLink.url ?? undefined
											: undefined
								}
							>
								<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-300">
									<IconArrowRight
										aria-hidden="true"
										className="text-stone-500"
									/>
								</span>
							</CMSLink>
						)}
					</div>
					<ul
						aria-label="Career benefits"
						className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
						role="list"
					>
						{hiring?.benefits?.map((benefit, i) => (
							<li
								className="flex items-center gap-2 rounded-2xl bg-card p-3 shadow-md"
								key={`${i}-${benefit.text}`}
								role="listitem"
							>
								<CheckmarkIconBox aria-hidden="true" className="size-11" />
								<p className="font-display font-medium text-primary-900 text-subhead-base">
									{benefit.text}
								</p>
							</li>
						))}
					</ul>
				</section>
				<Cta showForm={cta?.showForm ?? true} />
			</main>
		</>
	);
}

type TeamMember = {
	name: string;
	image: string;
	designation: string;
	linkedin?: string;
};

function TeamCard({ data }: { data: TeamMember }) {
	return (
		<article className="group sm:p-4" role="listitem">
			<div className="group relative flex aspect-square items-end justify-center overflow-hidden rounded-full bg-card p-4">
				{data.linkedin && (
					<>
						<Link
							aria-label="Connect with team member on LinkedIn"
							className="relative z-20 text-stone-700 transition-colors hover:text-primary-900 group-hover:text-stone-900"
							href={data.linkedin as Route}
							rel="noopener noreferrer"
							target="_blank"
						>
							<IconSocialLinkedin aria-hidden="true" />
						</Link>
						<div className="absolute inset-0 z-10 bg-linear-to-t from-card/25 group-hover:from-card/50" />
					</>
				)}
				{data.image && (
					<Image
						alt={`${data.name} - ${data.designation}`}
						className="object-cover transition-transform duration-500 group-hover:scale-105"
						fill
						src={data.image}
					/>
				)}
			</div>

			<div className="mt-4 space-y-1 px-4 text-center font-display">
				<h4 className="text-stone-900 text-subhead-base sm:text-subhead-lg">
					{data.name}
				</h4>
				<p className="text-stone-500 text-subhead-sm">{data.designation}</p>
			</div>
		</article>
	);
}
