import { CollectionSlug, PayloadRequest } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
	blogs: "resources/blogs",
	"case-studies": "/resources/case-studies",
	researchPapers: "/resources/research-papers",
	careers: "/careers",
};

type Props = {
	collection: keyof typeof collectionPrefixMap;
	slug: string;
	req: PayloadRequest;
};

export const generatePreviewPath = ({ collection, slug }: Props) => {
	// Allow empty strings, e.g. for the homepage
	if (slug === undefined || slug === null) {
		return null;
	}

	// Encode to support slugs with special characters
	const encodedSlug = encodeURIComponent(slug);

	// const encodedParams = new URLSearchParams({
	// 	slug: encodedSlug,
	// 	collection,
	// 	path: `${collectionPrefixMap[collection]}/${encodedSlug}`,
	// 	previewSecret: process.env.PREVIEW_SECRET || "",
	// });

	const url = `${collectionPrefixMap[collection]}/${encodedSlug}`;

	return url;
};
