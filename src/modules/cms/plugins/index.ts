import { searchPlugin } from "@payloadcms/plugin-search";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { Plugin } from "payload";

import { Blog } from "@/payload-types";

import { beforeSyncWithSearch } from "../search/beforeSync";
import { getServerSideURL } from "../utils/getURL";

const generateTitle: GenerateTitle<Blogs> = ({ doc }) => {
	return doc?.title
		? `${doc.title} | Payload Website Template`
		: "Payload Website Template";
};

const generateURL: GenerateURL<Blog> = ({ doc }) => {
	const url = getServerSideURL();

	return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
	seoPlugin({
		generateTitle,
		generateURL,
	}),

	searchPlugin({
		collections: ["blogs"],
		beforeSync: beforeSyncWithSearch,
		searchOverrides: {
			fields: ({ defaultFields }) => {
				return [...defaultFields, ...searchFields];
			},
		},
	}),
];
