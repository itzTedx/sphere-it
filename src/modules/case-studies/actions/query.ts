import { payload } from "@/lib/payload";

export const listCaseStudies = async () => {
	const data = await payload.find({
		collection: "case-studies",
		draft: false,
		depth: 2,
		limit: 100,
		select: {
			title: true,
			heroImage: true,
			publishedAt: true,
			slug: true,
			highlights: true,
		},

		sort: ["-createdAt"],
	});
	return data.docs;
};
