import { cacheLife, cacheTag } from "next/cache";

import { payload } from "@/lib/payload";
import { Faq } from "@/payload-types";
import { FaqList } from "@/types/faq";

export const listFaqs = async (): Promise<FaqList[]> => {
	"use cache";
	cacheTag("faqs");
	cacheLife("max");

	const data = await payload.find({
		collection: "faqs",
		draft: false,
		depth: 2,
		limit: 100,
		select: {
			category: true,
			content: true,
			question: true,
			updatedAt: true,
			createdAt: true,
		},
		sort: ["category", "createdAt"],
	});

	const groupedFaqs: Record<string, Faq[]> = {};

	data.docs.forEach((faq) => {
		let categoryName = "General";
		const cat = faq.category;

		if (cat && typeof cat === "object" && "category" in cat) {
			categoryName = cat.category;
		}

		if (!groupedFaqs[categoryName]) {
			groupedFaqs[categoryName] = [];
		}
		groupedFaqs[categoryName].push(faq);
	});

	return Object.entries(groupedFaqs).map(([category, faqs]) => ({
		category,
		faqs,
	}));
};
