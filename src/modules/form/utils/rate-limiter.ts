import { headers } from "next/headers";

import { RateLimiterMemory } from "rate-limiter-flexible";

// Create separate rate limiters for different form types
export const formRateLimiters = {
	// Job applications: 5 submissions per 60 seconds per IP
	jobApplication: new RateLimiterMemory({
		points: 5,
		duration: 60,
	}),

	// Deck downloads: 3 submissions per 60 seconds per IP
	deckDownload: new RateLimiterMemory({
		points: 3,
		duration: 60,
	}),

	// General enquiries: 10 submissions per 60 seconds per IP
	enquiry: new RateLimiterMemory({
		points: 10,
		duration: 60,
	}),
};

export async function getClientIp(): Promise<string> {
	try {
		const headersList = await headers();
		const forwarded = headersList.get("x-forwarded-for");
		const realIp = headersList.get("x-real-ip");
		return forwarded ? forwarded.split(",")[0].trim() : realIp || "unknown";
	} catch {
		return "unknown";
	}
}

export async function checkRateLimit(
	limiterType: keyof typeof formRateLimiters
): Promise<{ success: boolean; error?: string; rateLimited?: boolean }> {
	try {
		const ip = await getClientIp();
		const limiter = formRateLimiters[limiterType];

		await limiter.consume(ip);
		return { success: true };
	} catch {
		return {
			success: false,
			error: "Too many form submissions. Please try again later.",
			rateLimited: true,
		};
	}
}
