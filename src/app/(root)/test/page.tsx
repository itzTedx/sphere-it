import { Fragment } from "react/jsx-runtime";

import { Badge } from "@/components/ui/badge";

import {
	IconAssure,
	IconAugment,
	IconAutomate,
	IconElevate,
	IconEvaluate,
} from "@/assets/icons";

import { payload } from "@/lib/payload";
import { Media } from "@/modules/cms/components/Media";
import RichText from "@/modules/cms/components/RichText";
import type { Partner } from "@/payload-types";

const ICONS = {
	elevate: IconElevate,
	automate: IconAutomate,
	evaluate: IconEvaluate,
	assure: IconAssure,
	augment: IconAugment,
} as const;

export default async function TestPage() {
	const res = await payload.find({
		collection: "services",
		draft: false,

		depth: 2,
		limit: 6,
		pagination: false,
	});

	const { docs } = res;

	return (
		<div>
			{/* <pre className="container max-w-7xl text-wrap text-sm">
				{JSON.stringify(docs, null, 2)}
			</pre> */}

			{docs.map((doc) => {
				// const Icon = ICONS[doc.slug as keyof typeof ICONS];
				const hasPartners = doc.partners && doc.partners?.length > 0;
				return (
					<div key={doc.id}>
						<header className="relative z-50 space-y-4 border-b bg-card py-9 sm:space-y-6 sm:py-12 md:py-16">
							<div className="container grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
								<div className="space-y-6">
									<Badge>
										{/* <Icon /> */} {doc.service}
									</Badge>
									<h1 className="font-semibold text-primary-900 text-title-5 sm:text-title-4 md:text-title-3">
										{doc.title}
									</h1>
									{doc.description && (
										<RichText
											className="prose-xl prose-li:before:-left-6 prose-li:relative prose-ul:list-none prose-li:before:absolute prose-li:before:top-[0.7rem] prose-li:before:h-4 prose-li:before:w-4 prose-li:before:bg-[url('/svg/checkbox.svg')] prose-li:before:bg-contain prose-li:before:bg-no-repeat prose-li:before:content-['']"
											data={doc.description}
											enableGutter={false}
										/>
									)}
								</div>

								<div>{doc.heroImage && <Media resource={doc.heroImage} />}</div>
							</div>
							{hasPartners && (
								<div className="container hidden max-w-7xl items-center justify-end gap-4 md:flex">
									<h2 className="font-display text-muted-foreground text-subhead-base">
										Partners:
									</h2>
									<ul className="flex items-center gap-4 pr-6">
										{doc.partners
											?.filter((p): p is Partner => typeof p === "object")
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
						{/* <pre className="container max-w-7xl text-wrap">
							{JSON.stringify(doc.description, null, 2)}
						</pre> */}
						<div className="container mt-6 max-w-7xl">
							<RichText
								className="pb-12 prose-h2:font-semibold prose-h2:text-title-4 prose-h3:text-title-5 prose-headings:text-primary-900 prose-li:prose-p:text-base prose-li:text-base prose-p:text-base prose-p:leading-normal prose-p:tracking-tight sm:prose-h2:text-title-3 sm:prose-h3:text-title-4 sm:prose-li:prose-p:text-lg sm:prose-li:text-lg sm:prose-p:text-lg lg:prose-h2:text-title-2 lg:prose-h3:text-title-3 lg:prose-p:text-xl"
								data={doc.content}
								enableGutter={false}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
