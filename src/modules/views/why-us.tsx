import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { MiniCta } from "@/components/layout/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { FlickeringGrid } from "@/components/ui/primitives/animate/flicker-grid";

import { IconChevronRight } from "@/assets/icons";
import { IconLayers } from "@/assets/icons/layers";

import { TECH_STACKS } from "@/data/constants";
import { cn } from "@/lib/utils";

import RichText from "../cms/components/RichText";
import { getHomepageGlobal } from "../global/homepage";
import { AxisCardClient } from "./why-us-axis-card";

export const WhyUs = async () => {
	const data = await getHomepageGlobal();
	const { whyUs } = data;

	// Extract link URL for axis card
	const axisLearnMoreLink = whyUs?.axisCard?.learnMoreLink;
	const axisLinkUrl =
		axisLearnMoreLink?.type === "page"
			? axisLearnMoreLink.page
			: axisLearnMoreLink?.type === "custom"
				? axisLearnMoreLink.url
				: "/methodology";

	// Extract link URL for tech stack card
	const techStackLink = whyUs?.techStackCard?.ctaLink;
	const techStackLinkUrl =
		techStackLink?.type === "page"
			? techStackLink.page
			: techStackLink?.type === "custom"
				? techStackLink.url
				: "/resources/case-studies";

	return (
		<section aria-labelledby="why-us-heading" className="relative z-50">
			<div className="container mx-auto max-w-7xl space-y-4 lg:space-y-6">
				<header className="space-y-2 md:space-y-4">
					<div className="grid gap-2 md:grid-cols-3 md:gap-4">
						{whyUs?.title ? (
							<RichText
								className="prose-headings:text-primary-900 prose-headings:text-title-4 md:prose-headings:text-title-3 xl:prose-headings:text-title-2"
								data={whyUs.title}
								enableGutter={false}
							/>
						) : (
							<h2
								className="text-primary-900 text-title-4 md:text-title-3 xl:text-title-2"
								id="why-us-heading"
							>
								What sets{" "}
								<span className="text-primary-600">Sphere IT apart</span>
							</h2>
						)}
						<p className="text-justify text-base text-muted-foreground tracking-tighter md:col-span-2">
							{whyUs?.description ??
								"We believe technology should be both precisely engineered and practically applied. That's why forward-looking technology organizations across the Middle East trust us to deliver AI-driven platforms, intelligent automation, resilient infrastructure, and on-demand expertise that create measurable outcomes."}
						</p>
					</div>
				</header>

				<div className="grid gap-4 md:grid-cols-12 xl:gap-6">
					<GuidedByCard
						badge={whyUs?.guidedByCard?.badge ?? "Guided by"}
						className="md:col-span-5"
						description={
							whyUs?.guidedByCard?.description ??
							"Every solution is built with technical accuracy and business sense - ensuring innovation that actually delivers."
						}
						title={whyUs?.guidedByCard?.title ?? "Precision & Pragmatism"}
					/>
					<AxisCardClient
						className="md:col-span-7"
						learnMoreLabel={axisLearnMoreLink?.label ?? "Learn More"}
						learnMoreUrl={axisLinkUrl ?? "/methodology"}
						phases={
							whyUs?.axisCard?.phases?.map((phase) => ({
								letter: phase.letter,
								title: phase.title,
								description: phase.description,
							})) ?? []
						}
						title={whyUs?.axisCard?.title ?? "Sphere Methodology"}
					/>
					<TechStackCard
						badge={whyUs?.techStackCard?.badge ?? "Results-Driven Delivery"}
						className="md:col-span-6"
						ctaLabel={techStackLink?.label ?? "Read case studies"}
						ctaUrl={techStackLinkUrl ?? "/resources/case-studies"}
						title={
							whyUs?.techStackCard?.title ??
							"Driven by People, Powered by Technology."
						}
					/>
					<ReliabilityCard
						className="md:col-span-6"
						title={whyUs?.reliabilityCard?.title ?? "Reliability at the Core"}
					/>
					<div className="col-span-full">
						<MiniCta
							description={
								whyUs?.miniCta?.description ??
								"We make it work for your business, reducing complexity and accelerating value."
							}
							layout="horizontal"
							title={whyUs?.miniCta?.title ?? "What we say, What we do."}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

interface GuidedByCardProps {
	className?: string;
	badge: string;
	title: string;
	description: string;
}

function GuidedByCard({
	className,
	badge,
	title,
	description,
}: GuidedByCardProps) {
	return (
		<article
			className={cn(
				"flex flex-col justify-between rounded-2xl border bg-card",
				className
			)}
		>
			<div className="space-y-2 p-6 xl:space-y-4 xl:p-10">
				<header>
					<Badge variant="ghost">{badge}</Badge>
					<h3 className="text-primary-900 text-title-5 xl:text-title-3">
						{title}
					</h3>
				</header>
				<p className="text-base text-muted-foreground lg:text-sm xl:text-lg">
					{description}
				</p>
			</div>
		</article>
	);
}

interface TechStackCardProps {
	className?: string;
	badge: string;
	title: string;
	ctaUrl: string;
	ctaLabel: string;
}

function TechStackCard({
	className,
	badge,
	title,
	ctaUrl,
	ctaLabel,
}: TechStackCardProps) {
	return (
		<article
			className={cn(
				"relative grid overflow-hidden rounded-2xl border bg-card md:grid-cols-2",
				className
			)}
		>
			<div className="flex flex-col justify-between p-6 pr-0 sm:p-8 lg:flex-1">
				<header>
					<Badge variant="ghost">{badge}</Badge>
					<h3 className="text-primary-900 text-title-5 xl:text-title-4">
						{title}
					</h3>
				</header>
				<Button asChild className="w-fit" variant="outline">
					<Link href={ctaUrl as Route}>{ctaLabel}</Link>
				</Button>
			</div>
			<div className="relative">
				<div className="relative z-10 m-6 mb-0 space-y-3 rounded-t-xl bg-stone-alpha-10 p-3 pb-0 shadow-lg backdrop-blur-md">
					<span className="flex items-center gap-2 text-muted-background">
						<IconLayers /> Tech Stack
					</span>
					<div className="relative flex h-[240px] w-full overflow-hidden rounded-xl bg-card shadow-md">
						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/4 bg-linear-to-b from-card/80 to-transparent"
						/>
						<Marquee
							className="w-full p-4 [--duration:40s] [--gap:0.75rem]"
							repeat={3}
							vertical
						>
							{TECH_STACKS.map((review) => (
								<StackCard key={review.name} {...review} />
							))}
						</Marquee>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-card to-transparent"
				/>
			</div>
		</article>
	);
}

function StackCard({ img, name }: (typeof TECH_STACKS)[number]) {
	return (
		<figure className="group/stack flex w-full items-center justify-between gap-2.5">
			<div className="flex items-center gap-2.5">
				<div className="flex size-10 items-center justify-center rounded-lg bg-card shadow-sm transition-transform group-hover/stack:scale-110">
					<Image
						alt={`Tech-stack: ${name}`}
						className="object-contain"
						height={24}
						src={img}
						width={24}
					/>
				</div>
				<figcaption className="font-medium text-foreground text-sm">
					{name}
				</figcaption>
			</div>
			<div className="flex size-7 items-center justify-center rounded-full border">
				<IconChevronRight />
			</div>
		</figure>
	);
}

interface ReliabilityCardProps {
	className?: string;
	title: string;
}

function ReliabilityCard({ className, title }: ReliabilityCardProps) {
	return (
		<article
			className={cn(
				"grid grid-cols-5 overflow-hidden rounded-2xl border bg-card",
				className
			)}
		>
			<div className="col-span-3 p-6 sm:p-8 lg:px-10 lg:pt-10">
				<h3 className="text-balance text-primary-900 text-title-5 xl:text-title-3">
					{title}
				</h3>
			</div>

			<div className="relative col-span-2 h-full w-full xl:aspect-square">
				<Image
					alt="Reliability at the core of technology solutions - reducing complexity and accelerating business value"
					className="z-10 object-contain"
					fill
					loading="lazy"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					src="/svg/reliability.svg"
				/>
				<FlickeringGrid
					aria-hidden="true"
					className="mask-[radial-gradient(120px_circle_at_bottom,white,transparent)] absolute inset-0 z-1 opacity-50"
					color="#C3A5FA"
					flickerChance={0.1}
					gridGap={4}
					height={360}
					maxOpacity={0.5}
					squareSize={4}
					width={360}
				/>
			</div>
		</article>
	);
}
