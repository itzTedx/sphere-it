import { revalidatePath, revalidateTag } from "next/cache";

import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

import { Blog } from "@/payload-types";

export const revalidateRoles: CollectionAfterChangeHook<Blog> = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === "published") {
			const path = `/resourses/Roless/${doc.slug}`;

			payload.logger.info(`Revalidating Roles at path: ${path}`);

			revalidatePath(path);
			revalidateTag("Roless-sitemap", "max");
		}

		// If the Roles was previously published, we need to revalidate the old path
		if (previousDoc._status === "published" && doc._status !== "published") {
			const oldPath = `/Roless/${previousDoc.slug}`;

			payload.logger.info(`Revalidating old Roles at path: ${oldPath}`);

			revalidatePath(oldPath);
			revalidateTag("Roless-sitemap", "max");
		}
	}
	return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Blog> = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = `/Roless/${doc?.slug}`;

		revalidatePath(path);
		revalidateTag("Roless-sitemap", "max");
	}

	return doc;
};
