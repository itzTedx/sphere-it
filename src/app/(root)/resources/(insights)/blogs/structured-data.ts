import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import type { Blog } from "@/payload-types";

/** Fields returned by `listBlogs` (depth 1) — sufficient for listing JSON-LD. */
export type BlogForListingJsonLd = Pick<
	Blog,
	"title" | "description" | "slug" | "publishedAt" | "heroImage" | "blogCategories"
>;

function primaryArticleSection(blog: BlogForListingJsonLd): string {
	if (!blog.blogCategories?.length) return "Technology";
	const cat = blog.blogCategories[0];
	if (typeof cat === "number") return "Technology";
	return cat.category ?? "Technology";
}

function heroImageAbsoluteUrl(heroImage: Blog["heroImage"]): string | undefined {
	if (!heroImage || typeof heroImage === "number") return undefined;
	const url = heroImage.url;
	if (!url) return undefined;
	return url.startsWith("http") ? url : `${BASE_URL}${url}`;
}

function blogPostingFromListItem(blog: BlogForListingJsonLd) {
	const image = heroImageAbsoluteUrl(blog.heroImage);
	const posting: Record<string, unknown> = {
		"@type": "BlogPosting",
		headline: blog.title,
		description: blog.description,
		url: `${BASE_URL}/resources/blogs/${blog.slug}`,
		author: {
			"@type": "Organization",
			name: COMPANY_NAME,
		},
		publisher: {
			"@type": "Organization",
			name: COMPANY_NAME,
			url: BASE_URL,
		},
		articleSection: primaryArticleSection(blog),
	};
	if (image) posting.image = image;
	if (blog.publishedAt) posting.datePublished = blog.publishedAt;
	return posting;
}

const collectionPageStructuredData = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: "Blogs - Sphere IT",
	description:
		"Explore our collection of blog posts covering digital transformation, AI solutions, automation, and technology insights.",
	url: `${BASE_URL}/resources/blogs`,
	publisher: {
		"@type": "Organization",
		name: COMPANY_NAME,
		url: BASE_URL,
	},
};

const breadcrumbStructuredData = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: BASE_URL,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Resources",
			item: `${BASE_URL}/resources`,
		},
		{
			"@type": "ListItem",
			position: 3,
			name: "Blogs",
			item: `${BASE_URL}/resources/blogs`,
		},
	],
};

export function buildBlogsListingStructuredData(blogs: BlogForListingJsonLd[]) {
	return [
		{
			"@context": "https://schema.org",
			"@type": "Blog",
			name: "Sphere IT Blog",
			description:
				"Stay ahead with fresh perspectives, expert insights, and stories that inspire. Explore our latest articles on digital transformation, AI solutions, automation, and technology trends.",
			url: `${BASE_URL}/resources/blogs`,
			publisher: {
				"@type": "Organization",
				name: COMPANY_NAME,
				url: BASE_URL,
			},
			blogPost: blogs.map(blogPostingFromListItem),
		},
		collectionPageStructuredData,
		breadcrumbStructuredData,
	] as const;
}
