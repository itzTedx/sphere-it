import { searchPlugin } from "@payloadcms/plugin-search";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { Plugin } from "payload";

import { Blog } from "@/payload-types";

import { beforeSyncWithSearch } from "../search/beforeSync";
import { searchFields } from "../search/fieldOverrides";
import { getServerSideURL } from "../utils/getURL";

const generateTitle: GenerateTitle<Blog> = ({ doc }) => {
	return doc?.title ? `${doc.title} | Sphere IT` : "Sphere IT";
};

const generateURL: GenerateURL<Blog> = ({ doc }) => {
	const url = getServerSideURL();

	return doc?.slug ? `${url}/${doc.slug}` : url;
};

const generateDescription: GenerateURL<Blog> = ({ doc }) => {
	return doc?.description ? doc.description : "Sphere IT";
};

export const plugins: Plugin[] = [
	seoPlugin({
		generateTitle,
		generateURL,
		generateDescription,
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
