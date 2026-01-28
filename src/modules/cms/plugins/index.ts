import { seoPlugin } from "@payloadcms/plugin-seo";
import {
	GenerateImage,
	GenerateTitle,
	GenerateURL,
} from "@payloadcms/plugin-seo/types";
import { Plugin } from "payload";

import { Blog, CaseStudy, Media } from "@/payload-types";

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

const generateImage: GenerateImage<Blog | CaseStudy> = ({ doc }) => {
	return doc?.heroImage as Media;
};

export const plugins: Plugin[] = [
	seoPlugin({
		generateTitle,
		generateURL,
		generateDescription,
		generateImage,
	}),
	// s3Storage({
	// 	collections: {
	// 		media: true,
	// 	},
	// 	bucket: env.AWS_BUCKET_NAME,
	// 	config: {
	// 		credentials: {
	// 			accessKeyId: env.AWS_ACCESS_KEY_SPHERE,
	// 			secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
	// 		},
	// 		region: env.AWS_BUCKET_REGION,
	// 	},
	// }),

	// searchPlugin({
	// 	collections: ["blogs"],
	// 	beforeSync: beforeSyncWithSearch,
	// 	searchOverrides: {
	// 		fields: ({ defaultFields }) => {
	// 			return [...defaultFields, ...searchFields];
	// 		},
	// 	},
	// }),
];
