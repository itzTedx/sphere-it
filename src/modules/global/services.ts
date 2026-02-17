import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";
import type { Partner } from "@/payload-types";
import type { Service as CardService, ServiceListItem } from "@/types/service";

export type ListingService = Omit<CardService, "Icon" | "lists"> & {
	lists: Array<Pick<ServiceListItem, "id" | "feature">>;
};

export const getServicesPageGlobal = async () => {
	"use cache";
	cacheTag("global:services-page");
	cacheLife("max");

	const res = await payload.findGlobal({
		slug: "services-page",
		depth: 1,
	});

	return res;
};

export const getServicesForListing = async (): Promise<ListingService[]> => {
	"use cache";
	cacheTag("services");
	cacheLife("max");

	const { docs } = await payload.find({
		collection: "services",
		limit: 50,
		sort: "_order",
		depth: 2,
		where: {
			_status: { equals: "published" },
		},
	});

	return docs.map((doc) => {
		const slug = doc.slug;
		const { homepage, heroImage } = doc;

		const serviceTitle = homepage?.title ?? doc.service;
		const description = homepage?.description ?? "";

		const tags: string[] = Array.isArray(homepage?.tags)
			? homepage.tags
					.map((tagItem) => tagItem?.tag)
					.filter((tag): tag is string => Boolean(tag))
			: [];

		const lists: ListingService["lists"] = Array.isArray(homepage?.features)
			? homepage.features
					.map((featureItem, index) =>
						featureItem?.feature
							? {
									id: index + 1,
									feature: featureItem.feature,
								}
							: null
					)
					.filter(
						(item): item is ListingService["lists"][number] => item !== null
					)
			: [];

		let proof: string | undefined;
		const proofLinkGroup = homepage?.proofLink;

		if (proofLinkGroup) {
			if (proofLinkGroup.type === "page" && proofLinkGroup.page) {
				proof = proofLinkGroup.page;
			} else if (proofLinkGroup.type === "custom" && proofLinkGroup.url) {
				proof = proofLinkGroup.url;
			}
		}

		const partners: string[] | undefined =
			Array.isArray(doc.partners) && doc.partners.length > 0
				? doc.partners
						.map((partner) => {
							const partnerDoc =
								typeof partner === "object" ? (partner as Partner) : null;

							if (
								partnerDoc &&
								partnerDoc.logo &&
								typeof partnerDoc.logo === "object" &&
								partnerDoc.logo.url
							) {
								return partnerDoc.logo.url;
							}

							return null;
						})
						.filter((item): item is string => item !== null)
				: undefined;

		const image =
			heroImage &&
			typeof heroImage === "object" &&
			"url" in heroImage &&
			heroImage.url
				? heroImage.url
				: "/images/services/default.webp";

		return {
			id: slug,
			serviceTitle,
			title: serviceTitle,
			description,
			overview: description,
			image,
			tags,
			lists,
			partners,
			proof,
		};
	});
};
