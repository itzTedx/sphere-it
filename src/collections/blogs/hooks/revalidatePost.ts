import { revalidatePath, revalidateTag } from "next/cache";

import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

import { Blog } from "@/payload-types";

export const revalidatePost: CollectionAfterChangeHook<Blog> = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === "published") {
			const path = `/resources/blogs/${doc.slug}`;

			payload.logger.info(`Revalidating post at path: ${path}`);

			revalidatePath(path);
			revalidatePath("/resources/blogs");
			revalidateTag("blogs", "max");
			revalidateTag("blogCategories", "max");
			revalidateTag(`blog:${doc.slug}`, "max");
		}

		// If the post was previously published, we need to revalidate the old path
		if (previousDoc._status === "published" && doc._status !== "published") {
			const oldPath = `/resources/blogs/${previousDoc.slug}`;

			payload.logger.info(`Revalidating old post at path: ${oldPath}`);

			revalidatePath(oldPath);
			revalidatePath("/resources/blogs");
			revalidateTag("blogs", "max");
			revalidateTag("blogCategories", "max");
			revalidateTag(`blog:${previousDoc.slug}`, "max");
		}
	}
	return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Blog> = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = `/resources/blogs/${doc?.slug}`;

		revalidatePath(path);
		revalidatePath("/resources/blogs");
		revalidateTag("blogs", "max");
		revalidateTag("blogCategories", "max");
		if (doc?.slug) {
			revalidateTag(`blog:${doc.slug}`, "max");
		}
	}

	return doc;
};
