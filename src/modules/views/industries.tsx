import LogoLoop from "@/components/ui/base/logo-carousel";

import * as Icons from "@/assets/icons";

import RichText from "../cms/components/RichText";
import { getHomepageGlobal } from "../global/homepage";

type IconComponent = React.ComponentType<{ className?: string }>;

type IndustryItem = {
	id: number;
	icon?: string | null;
	title: string;
};

export const Industries = async () => {
	const homepageData = await getHomepageGlobal();
	const industriesSection = homepageData.industries as {
		title?: typeof homepageData.industries.title;
		description?: string | null;
		items?: (number | IndustryItem)[];
	};

	// Items can be either IDs (number) or populated Industry objects
	const industriesList = (industriesSection?.items ?? []).filter(
		(item): item is IndustryItem => typeof item === "object" && item !== null
	);

	const logos = industriesList.map((industry) => {
		const IconComponent = industry.icon
			? (Icons[industry.icon as keyof typeof Icons] as IconComponent)
			: null;

		return {
			node: IconComponent ? <IconComponent className="size-5" /> : null,
			title: industry.title,
		};
	});

	return (
		<section className="container max-w-7xl space-y-7 py-8 sm:py-12 lg:py-16">
			<div className="mx-auto max-w-2xl space-y-2 text-center">
				{industriesSection?.title && (
					<RichText
						className="prose-headings:text-primary-900 prose-headings:text-title-4"
						data={industriesSection.title}
						enableGutter={false}
					/>
				)}
				{industriesSection?.description && (
					<p className="text-balance text-base text-muted-foreground">
						{industriesSection.description}
					</p>
				)}
			</div>
			{logos.length > 0 && (
				<div className="relative">
					<LogoLoop
						ariaLabel="Industries we support"
						direction="left"
						fadeOut
						fadeOutColor="#FCFAF7"
						gap={24}
						logoHeight={48}
						logos={logos}
						pauseOnHover
						scaleOnHover
						speed={60}
					/>
				</div>
			)}
		</section>
	);
};
