import type { Metadata } from "next";

import { getServerSideURL } from "@/modules/cms/utils/getURL";

import type { Blog, CaseStudy, Config, Media } from "../payload-types";
import { mergeOpenGraph } from "./mergeOpenGraph";

const getImageURL = (image?: Media | Config["db"]["defaultIDType"] | null) => {
	const serverUrl = getServerSideURL();

	let url = `${serverUrl}/website-template-OG.webp`;

	if (image && typeof image === "object" && "url" in image) {
		const ogUrl = image.url;

		url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
	}

	return url;
};

export const generateMeta = async (args: {
	doc: Partial<Blog> | Partial<CaseStudy> | null;
}): Promise<Metadata> => {
	const { doc } = args;

	const ogImage = getImageURL(doc?.meta?.image);

	const title = doc?.meta?.title
		? `${doc?.meta?.title} | Sphere IT`
		: "Sphere IT";

	return {
		description: doc?.meta?.description,
		openGraph: mergeOpenGraph({
			description: doc?.meta?.description || "",
			images: ogImage
				? [
						{
							url: ogImage,
						},
					]
				: undefined,
			title,
			url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
		}),
		title,
	};
};
