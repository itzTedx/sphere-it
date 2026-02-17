"use server";

import { payload } from "@/lib/payload";

import type { NavService } from "./nav-types";

export async function getNavServices(): Promise<NavService[]> {
	const { docs } = await payload.find({
		collection: "services",
		limit: 50,
		sort: "_order",
		depth: 2,
		where: {
			_status: { equals: "published" },
		},
	});

	return docs.map((service) => {
		const heroImage = service.heroImage;

		const image =
			heroImage &&
			typeof heroImage === "object" &&
			"url" in heroImage &&
			heroImage.url
				? heroImage.url
				: "/images/services/default.webp";

		return {
			id: service.slug,
			title: service.title,
			description: service.subtitle ?? "",
			image,
		};
	});
}
