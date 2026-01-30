import config from "@payload-config";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import { getPayload } from "payload";

import type {
	EmployeeTestimonial,
	TestimonialData,
	TestimonialQuery,
} from "./types";

/**
 * Get all published employee testimonials from PayloadCMS
 */
export async function getEmployeeTestimonials(query: TestimonialQuery = {}) {
	try {
		const payload = await getPayload({ config });

		const { limit = 50, offset = 0, published = true } = query;

		const whereClause = published
			? {
					_status: {
						equals: "published" as const,
					},
				}
			: undefined;

		const testimonials = await payload.find({
			collection: "employeeTestimonials",
			where: whereClause,
			sort: "-createdAt",
			limit,
			page: Math.floor(offset / limit) + 1,
		});

		return testimonials.docs;
	} catch (error) {
		console.error("Error fetching employee testimonials:", error);
		console.error("Query parameters:", query);

		// Return empty result with proper structure
		return [];
	}
}

/**
 * Transform PayloadCMS testimonial to component-compatible format
 */
export function transformTestimonialData(
	testimonial: EmployeeTestimonial
): TestimonialData {
	return {
		id: testimonial.id,
		name: testimonial.name,
		designation: testimonial.jobRole,
		content: testimonial.content,
		avatar: "/", // Default avatar path - can be enhanced if avatars are added to schema
		industry: "Technology Consulting", // Default industry - can be enhanced if industry field is added
	};
}

/**
 * Get testimonial by ID
 */
export async function getTestimonialById(
	id: number
): Promise<EmployeeTestimonial | null> {
	try {
		const payload = await getPayload({ config });

		const testimonial = await payload.findByID({
			collection: "employeeTestimonials",
			id,
		});

		if (!testimonial) {
			return null;
		}

		let plainTextContent = "";

		try {
			if (testimonial.content) {
				plainTextContent = convertLexicalToPlaintext({
					data: testimonial.content as SerializedEditorState,
				});
			}
		} catch (error) {
			console.error("Error converting testimonial content:", error);
			plainTextContent = "Content unavailable";
		}

		return {
			...testimonial,
			content: plainTextContent,
		};
	} catch (error) {
		console.error("Error fetching testimonial by ID:", error);
		console.error("Testimonial ID:", id);
		return null;
	}
}
