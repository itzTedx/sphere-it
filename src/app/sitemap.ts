import type { MetadataRoute } from "next";
import { cacheLife, cacheTag } from "next/cache";

import { BASE_URL } from "@/data/site-config";
import { payload } from "@/lib/payload";
import { listBlogs } from "@/modules/blogs/actions/query";
import { listCaseStudies } from "@/modules/case-studies/actions/query";
import { listResearchPapers } from "@/modules/research-papers/actions/index";
import { listServices } from "@/modules/services/actions/index";

// Helper function to fetch careers
async function listCareers() {
	"use cache";
	cacheTag("careers");
	cacheLife("max");

	const data = await payload.find({
		collection: "careers",
		draft: false,
		depth: 1,
		limit: 100,
		where: {
			_status: {
				equals: "published",
			},
		},
		select: {
			title: true,
			id: true,
			updatedAt: true,
		},
		sort: ["-createdAt"],
	});

	return data.docs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Fetch dynamic content
	const [blogs, caseStudies, researchPapers, careers, services] =
		await Promise.all([
			listBlogs({
				limit: 99999,
			}),
			listCaseStudies(99999),
			listResearchPapers(99999),
			listCareers(),
			Promise.resolve(listServices()),
		]);

	// Static pages with proper SEO fields
	const staticPages = [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1,
		},
		{
			url: `${BASE_URL}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/careers`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/methodology`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/testimonials`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/resources/faqs`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		},
		{
			url: `${BASE_URL}/resources/ai-maturity`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		},
		{
			url: `${BASE_URL}/resources/blogs`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/resources/case-studies`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/resources/research-papers`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/legal/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${BASE_URL}/legal/terms-of-services`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${BASE_URL}/legal/acceptable-use-policy`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${BASE_URL}/legal/data-protection`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
	];

	// Dynamic blog pages
	const blogPages = blogs.map((blog) => ({
		url: `${BASE_URL}/resources/blogs/${blog.slug}`,
		lastModified: blog.publishedAt ? new Date(blog.publishedAt) : new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	// Dynamic case study pages
	const caseStudyPages = caseStudies.map((caseStudy) => ({
		url: `${BASE_URL}/resources/case-studies/${caseStudy.slug}`,
		lastModified: caseStudy.publishedAt
			? new Date(caseStudy.publishedAt)
			: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// Dynamic research paper pages
	const researchPaperPages = researchPapers.map((paper) => ({
		url: `${BASE_URL}/resources/research-papers/${paper.slug}`,
		lastModified: paper.publishedAt ? new Date(paper.publishedAt) : new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	// Dynamic career pages
	const careerPages = careers.map((career) => ({
		url: `${BASE_URL}/careers/${career.id}`,
		lastModified: career.updatedAt ? new Date(career.updatedAt) : new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	// Dynamic service pages
	const servicePages = services.map((service) => ({
		url: `${BASE_URL}/services/${service.slug}`,
		lastModified: new Date(), // Services are static MDX files
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	return [
		...staticPages,
		...servicePages,
		...blogPages,
		...caseStudyPages,
		...researchPaperPages,
		...careerPages,
	];
}
