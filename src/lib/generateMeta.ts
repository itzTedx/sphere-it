import type { Metadata } from "next";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { getServerSideURL } from "@/modules/cms/utils/getURL";

import type {
	Blog,
	CaseStudy,
	Config,
	LegalPage,
	Media,
} from "../payload-types";
import { mergeOpenGraph } from "./mergeOpenGraph";

type MetaDoc = Partial<Blog> | Partial<CaseStudy> | Partial<LegalPage>;

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
	doc: MetaDoc | null;
	/** Path starting with / for Open Graph URL and canonical (e.g. /legal/privacy). */
	canonicalPath?: string;
}): Promise<Metadata> => {
	const { doc, canonicalPath } = args;

	const ogImage = getImageURL(doc?.meta?.image);

	const titleBase = doc?.meta?.title ?? doc?.title;
	const title = titleBase ? titleBase : "Sphere IT";

	const description = doc?.meta?.description ?? undefined;

	const ogUrl =
		canonicalPath ?? (Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/");

	return {
		metadataBase: new URL(BASE_URL),
		alternates: canonicalPath ? { canonical: canonicalPath } : undefined,
		description,
		openGraph: mergeOpenGraph({
			description: description ?? "",
			images: ogImage
				? [
						{
							url: ogImage,
						},
					]
				: undefined,
			locale: "en_US",
			siteName: COMPANY_NAME,
			title,
			url: ogUrl,
		}),
		title,
		twitter: {
			card: "summary_large_image",
			creator: "@sphereglobal",
			description: description ?? "",
			images: ogImage ? [ogImage] : undefined,
			site: "@sphereglobal",
			title,
		},
	};
};
