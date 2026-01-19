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

export const findCaseStduyBySlug = async (slug: string) => {
	const data = await payload.find({
		collection: "case-studies",
		draft: false,
		depth: 2,
		where: {
			slug: {
				equals: slug,
			},
		},
		limit: 1,
	});

	return data.docs?.[0] || null;
};
