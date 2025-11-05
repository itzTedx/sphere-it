import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Service, ServiceMetadata } from "./types";

const root = (endpoint: string) => path.join(process.cwd(), "src", "contents", endpoint);

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const filePath = path.join(root("services"), `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    const metadata = data as ServiceMetadata;
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

export function getServiceMetadata(filepath: string): ServiceMetadata & { slug: string } {
  const slug = filepath.replace(/\.mdx$/, "");

  const filePath = path.join(root("services"), filepath);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);

  const metadata = data as ServiceMetadata;

  return { ...metadata, slug };
}
