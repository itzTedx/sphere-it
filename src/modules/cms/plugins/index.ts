import {
	betterAuthCollections,
	createBetterAuthPlugin,
	payloadAdapter,
} from "@delmaredigital/payload-better-auth";
import { seoPlugin } from "@payloadcms/plugin-seo";
import {
	GenerateDescription,
	GenerateImage,
	GenerateTitle,
	GenerateURL,
} from "@payloadcms/plugin-seo/types";
import { betterAuth } from "better-auth";
import { Plugin } from "payload";

import { betterAuthOptions } from "@/lib/auth/config";
import { env } from "@/lib/env/server";
import { Blog, Career, CaseStudy, Media } from "@/payload-types";

import { getServerSideURL } from "../utils/getURL";

const generateTitle: GenerateTitle<Blog | Career> = ({
	doc,
	collectionSlug,
}) => {
	if (collectionSlug && collectionSlug === "careers") {
		return doc?.title ? `${doc.title} - Careers at Sphere IT` : "Sphere IT";
	}
	return doc?.title ? `${doc.title} | Sphere IT` : "Sphere IT";
};

const generateURL: GenerateURL<Blog> = ({ doc }) => {
	const url = getServerSideURL();

	return doc?.slug ? `${url}/${doc.slug}` : url;
};

const generateDescription: GenerateDescription<Blog> = ({ doc }) => {
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
	betterAuthCollections({
		betterAuthOptions,
		skipCollections: ["user"], // We define Users ourselves
	}),
	// Initialize Better Auth with auto-injected endpoints and admin components
	createBetterAuthPlugin({
		createAuth: (payload) =>
			betterAuth({
				...betterAuthOptions,
				baseURL: env.BASE_URL,
				database: payloadAdapter({
					payloadClient: payload,
					adapterConfig: {
						enableDebugLogs: false,
						// enableDebugLogs: process.env.NODE_ENV === "development",
					},
				}),
				socialProviders: {
					linkedin: {
						clientId: env.LINKEDIN_CLIENT_ID,
						clientSecret: env.LINKEDIN_CLIENT_SECRET,
					},
				},
				// For Payload's default SERIAL IDs:
				advanced: {
					database: {
						generateId: "serial",
					},
				},
				secret: process.env.BETTER_AUTH_SECRET,
				trustedOrigins: [
					"http://localhost:3000",
					"https://localhost:3000",
					"https://sphereitglobal.com",
					env.BASE_URL,
				].filter(Boolean) as string[],
				// Ensure emailAndPassword config is preserved
				emailAndPassword: betterAuthOptions.emailAndPassword,
			}),
		admin: {
			betterAuthOptions, // Required for management UI auto-detection
			login: {
				title: "Sign in to Sphere IT",
				enablePasskey: true, // Enable passkey sign-in option
				afterLoginPath: "/admin", // Redirect to admin dashboard after login
				requiredRole: ["admin", "editor"],
				// enableSignUp: false,
			},
		},
	}),

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
