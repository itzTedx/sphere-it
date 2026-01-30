import { getEmployeeTestimonials } from "@/modules/employee-testimonials";

import { TestimonialsClient } from "./testimonials-client";

// Server component wrapper
export async function Testimonials() {
	try {
		const testimonials = await getEmployeeTestimonials({ published: true });

		// Don't render if no testimonials available
		if (!testimonials || testimonials.length === 0) {
			console.warn("No testimonials found for display");
			return null;
		}

		return <TestimonialsClient testimonials={testimonials} />;
	} catch (error) {
		console.error("Error fetching testimonials for display:", error);

		// Fallback: don't render anything if there's an error
		return null;
	}
}
