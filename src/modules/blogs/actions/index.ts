import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { Blog, BlogMetadata } from "./types";

const root = (endpoint: string) =>
	path.join(process.cwd(), "src", "contents", endpoint);

export function listBlogs(): BlogMetadata[] {
	const dir = root("blogs");
	if (!fs.existsSync(dir)) return [];
	const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
	return files.map((file) => getBlogMetadata(file));
}

export function filterBlogs(
	blogs: BlogMetadata[],
	options?: {
		search?: string;
		categories?: string[];
		isFeatured?: boolean;
	}
): BlogMetadata[] {
	const { search, categories, isFeatured } = options ?? {};
	let result = [...blogs];

	if (search?.trim()) {
		const q = search.trim().toLowerCase();
		result = result.filter(
			(b) =>
				b.title.toLowerCase().includes(q) ||
				b.description.toLowerCase().includes(q)
		);
	}

	if (categories?.length) {
		const set = new Set(categories);
		result = result.filter((b) =>
			b.blogCategories?.some((c) => set.has(c.slug))
		);
	}

	if (isFeatured) {
		result = result.filter((b) => b.isFeatured === true);
	}

	// Sort to ensure featured blogs always appear first
	result.sort((a, b) => {
		if (a.isFeatured && !b.isFeatured) return -1;
		if (!a.isFeatured && b.isFeatured) return 1;
		return 0;
	});

	return result;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
	try {
		const filePath = path.join(root("blogs"), `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
		const { data, content } = matter(fileContent);

		const metadata = data as BlogMetadata;
		return {
			metadata: { ...metadata, slug },
			content,
		};
	} catch {
		return null;
	}
}

export function getBlogMetadata(filepath: string): BlogMetadata {
	const slug = filepath.replace(/\.mdx$/, "");
	const filePath = path.join(root("blogs"), filepath);
	const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
	const { data } = matter(fileContent);
	const metadata = data as BlogMetadata;
	return { ...metadata, slug };
}
