import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { slugify } from "@/lib/utils";

import { CaseStudy, CaseStudyMetadata } from "./types";

const root = (endpoint: string) =>
	path.join(process.cwd(), "src", "contents", endpoint);

export function listStudies() {
	const files = fs.readdirSync(root("case-studies"));

	const studies = files.map((file) => getServiceMetadata(file));

	return studies;
}

export async function getServiceBySlug(
	slug: string
): Promise<CaseStudy | null> {
	try {
		const filePath = path.join(root("case-studies"), `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
		const { data, content } = matter(fileContent);

		const metadata = data as CaseStudyMetadata;
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

export function getServiceMetadata(
	filepath: string
): CaseStudyMetadata & { slug: string } {
	const slug = slugify(filepath.replace(/\.mdx$/, ""));

	const filePath = path.join(root("case-studies"), filepath);

	const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
	const { data } = matter(fileContent);

	const metadata = data as CaseStudyMetadata;

	return { ...metadata, slug };
}
