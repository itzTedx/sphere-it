import type { MetadataRoute } from "next";

import { BASE_URL } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/test/",
				"/api/",
				"/studio",
				"/studio/*",
				"/admin",
				"/dashboard",
				"/auth",
				"/docs",
				"/docs/*",
				"/auth/*",
			],
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	};
}
