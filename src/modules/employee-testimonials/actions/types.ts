import type { EmployeeTestimonial as PayloadEmployeeTestimonial } from "@/payload-types";

export interface TestimonialData {
	id: number;
	name: string;
	designation?: string | null;
	content: string;
	avatar?: string;
	industry?: string;
}

export interface EmployeeTestimonial
	extends Omit<PayloadEmployeeTestimonial, "content"> {
	content: string;
}

export interface TestimonialQuery {
	limit?: number;
	offset?: number;
	published?: boolean;
}

export interface TestimonialResponse {
	docs: EmployeeTestimonial[];
	totalDocs: number;
	limit: number;
	offset: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}
