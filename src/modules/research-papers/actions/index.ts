import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Research, ResearchMetadata } from "./types";

const root = (endpoint: string) =>
	path.join(process.cwd(), "src", "contents", endpoint);

export function listResearchPapers(limit?: number) {
	const files = fs.readdirSync(root("research-papers"));

	const researchPapers = files.map((file) => getResearchMetadata(file));

	if (limit) {
		return researchPapers.slice(0, limit);
	}

	return researchPapers;
}

export async function geResearchBySlug(slug: string): Promise<Research | null> {
	try {
		const filePath = path.join(root("research-papers"), `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
		const { data, content } = matter(fileContent);

		const metadata = data as ResearchMetadata;
		return {
			metadata: {
				...metadata,
				slug,
			},
			content,
		};
	} catch {
		return null;
	}
}

export function getResearchMetadata(
	filepath: string
): ResearchMetadata & { slug: string } {
	const slug = filepath.replace(/\.mdx$/, "");

	const filePath = path.join(root("research-papers"), filepath);

	const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
	const { data } = matter(fileContent);

	const metadata = data as ResearchMetadata;

	return { ...metadata, slug };
}
