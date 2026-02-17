import { Route } from "next";
import Link from "next/link";

import { IconBox } from "@/components/icon-box";
import { Button } from "@/components/ui/button";

import { IconArrowRight } from "@/assets/icons";
import {
	IconAssure,
	IconAugment,
	IconAutomate,
	IconElevate,
	IconEvaluate,
} from "@/assets/icons/services";

import { Media } from "@/modules/cms/components/Media";
import RichText from "@/modules/cms/components/RichText";
import type { ServicePageType } from "@/modules/global/services";

const SERVICE_ICONS = {
	elevate: IconElevate,
	automate: IconAutomate,
	evaluate: IconEvaluate,
	assure: IconAssure,
	augment: IconAugment,
} as const;

export function ServiceCard({ service }: { service: ServicePageType }) {
	const Icon = SERVICE_ICONS[service.slug as keyof typeof SERVICE_ICONS];

	return (
		<li
			className="group card relative grid grid-cols-1 gap-4 rounded-2xl border border-transparent bg-card p-4 shadow-sm transition hover:border-primary-500 hover:shadow-md sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:rounded-4xl"
			key={service.id}
		>
			<Link
				className="absolute inset-0 z-10"
				href={`/services/${service.slug}`}
				title={service.service}
			/>
			<div className="relative aspect-[1.44/1] overflow-hidden rounded-xl sm:aspect-[1.2/1] sm:rounded-2xl md:aspect-[1.44/1] md:rounded-3xl group-even:md:order-2">
				<Media fill resource={service.heroImage} />
			</div>
			<div className="flex flex-col justify-between px-2 sm:px-4 md:px-6 group-even:md:order-1">
				<div className="space-y-3 py-2 sm:space-y-4 sm:py-3">
					<div className="flex items-center gap-2 sm:gap-3">
						<IconBox>
							<Icon className="text-stone-400 group-hover:text-primary-600" />
						</IconBox>
						<h2 className="font-semibold text-lg text-primary-800 leading-tight sm:text-xl md:text-title-4">
							{service.service}
						</h2>
					</div>
					<p className="font-display text-sm text-stone-700 sm:text-lg">
						<RichText data={service.description} enableGutter={false} />
					</p>
					<div className="flex items-center gap-2 md:gap-4">
						<Button asChild className="group">
							<Link href={`/services/${service.id}`}>
								Learn more{" "}
								<IconArrowRight className="hidden transition-transform duration-300 group-hover:translate-x-1 sm:block" />
							</Link>
						</Button>
						{service.homepage.proofLink && (
							<Button asChild className="group relative z-50" variant="outline">
								<Link href={service.homepage.proofLink as Route}>
									Proof of Impact
								</Link>
							</Button>
						)}
					</div>
				</div>
				{service.homepage.tags && (
					<ul className="flex flex-wrap gap-1.5 py-3 sm:gap-2">
						{service.homepage.tags.map((tag) => (
							<li
								className="rounded-md bg-stone-alpha-10 px-2 py-1.5 font-mono text-stone-600 text-xs uppercase sm:rounded-lg sm:px-3 sm:py-2 sm:text-badge"
								key={tag.id}
							>
								{tag.tag}
							</li>
						))}
					</ul>
				)}
			</div>
		</li>
	);
}
