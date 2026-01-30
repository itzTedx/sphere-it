import { listFaqs } from "@/modules/faqs/actions/query";

interface FAQStructuredData {
	"@context": "https://schema.org";
	"@type": "FAQPage";
	mainEntity: Array<{
		"@type": "Question";
		name: string;
		acceptedAnswer: {
			"@type": "Answer";
			text: string;
		};
	}>;
}

export async function generateFAQStructuredData(
	category: string
): Promise<FAQStructuredData | null> {
	try {
		const faqLists = await listFaqs();
		const categoryFaqs = faqLists.find(
			(faqList) => faqList.category.toLowerCase() === category.toLowerCase()
		);

		if (!categoryFaqs || categoryFaqs.faqs.length === 0) {
			return null;
		}

		const structuredData: FAQStructuredData = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: categoryFaqs.faqs.map((faq) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.content,
				},
			})),
		};

		return structuredData;
	} catch (error) {
		console.error(
			`Error generating FAQ structured data for category "${category}":`,
			error
		);
		return null;
	}
}

export async function getFAQCategoryFromSlug(slug: string): Promise<string> {
	const faqLists = await listFaqs();

	const keywordMap: Record<string, string[]> = {
		home: ["general"],
		elevate: ["elevate", "ai-enablement", "ai enablement"],
		automate: ["automate", "process-engineering", "process engineering"],
		evaluate: [
			"evaluate",
			"data-management",
			"data management",
			"intelligence",
		],
		assure: [
			"assure",
			"managed-services",
			"managed services",
			"it-operations",
			"it operations",
		],
		augment: [
			"augment",
			"technology-talent-solutions",
			"technology talent solutions",
		],
		careers: ["careers", "sphere-it", "sphere it"],
	};

	const keywords = keywordMap[slug] || [slug];

	// Find category that contains any of the keywords
	for (const faqList of faqLists) {
		const categoryLower = faqList.category.toLowerCase();
		for (const keyword of keywords) {
			if (categoryLower.includes(keyword.toLowerCase())) {
				return faqList.category;
			}
		}
	}

	// Fallback to original slug if no match found
	return slug;
}
