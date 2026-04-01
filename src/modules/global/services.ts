import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";
import type { Partner, Service } from "@/payload-types";
import type { Service as CardService, ServiceListItem } from "@/types/service";

export type ListingService = Omit<CardService, "Icon" | "lists"> & {
	lists: Array<Pick<ServiceListItem, "id" | "feature">>;
};

const REFERENCE_ROUTE_PREFIX: Record<string, string> = {
	services: "/services",
	blogs: "/resources/blogs",
	"case-studies": "/resources/case-studies",
	researchPapers: "/resources/research-papers",
};

const resolveProofLink = (
	proofLinkGroup: Service["homepage"]["proofLink"] | undefined
): string | undefined => {
	if (!proofLinkGroup) return undefined;

	if (proofLinkGroup.type === "page" && proofLinkGroup.page) {
		return proofLinkGroup.page;
	}

	if (proofLinkGroup.type === "custom" && proofLinkGroup.url) {
		return proofLinkGroup.url;
	}

	if (proofLinkGroup.type === "reference" && proofLinkGroup.reference) {
		const { relationTo, value } = proofLinkGroup.reference;
		const doc = typeof value === "object" && value !== null ? value : null;
		const slug = doc && "slug" in doc ? doc.slug : null;

		if (typeof slug === "string" && slug.length > 0) {
			const prefix = REFERENCE_ROUTE_PREFIX[relationTo] ?? `/${relationTo}`;
			return `${prefix}/${slug}`;
		}
	}

	return undefined;
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

		const proof = resolveProofLink(homepage?.proofLink);

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

export type ServicePageType = Pick<
	Service,
	| "id"
	| "service"
	| "heroImage"
	| "slug"
	| "subtitle"
	| "description"
	| "homepage"
>;

export const getServicesForPage = async (): Promise<ServicePageType[]> => {
	"use cache";
	cacheTag("services");
	cacheLife("max");

	const { docs } = await payload.find({
		collection: "services",
		limit: 50,
		sort: "_order",
		select: {
			service: true,
			heroImage: true,
			slug: true,
			subtitle: true,
			description: true,
			homepage: {
				tags: true,
				proofLink: true,
			},
		},
		depth: 2,
		where: {
			_status: { equals: "published" },
		},
	});
	return docs;
};
