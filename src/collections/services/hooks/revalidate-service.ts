import { revalidatePath, revalidateTag } from "next/cache";

import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

import { Blog } from "@/payload-types";

export const revalidateService: CollectionAfterChangeHook<Blog> = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === "published") {
			const path = `/services/${doc.slug}`;

			payload.logger.info(`Revalidating post at path: ${path}`);

			revalidatePath(path);
			revalidatePath("/services");
			revalidateTag("services", "max");
			if (doc?.slug) {
				revalidateTag(`service:${doc.slug}`, "max");
			}
		}

		// If the post was previously published, we need to revalidate the old path
		if (previousDoc._status === "published" && doc._status !== "published") {
			const oldPath = `/services/${previousDoc.slug}`;

			payload.logger.info(`Revalidating old post at path: ${oldPath}`);

			revalidatePath(oldPath);
			revalidatePath("/services");
			revalidateTag("services", "max");
			if (previousDoc?.slug) {
				revalidateTag(`service:${previousDoc.slug}`, "max");
			}
		}
	}
	return doc;
};

export const revalidateServiceDelete: CollectionAfterDeleteHook<Blog> = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = `/services/${doc?.slug}`;

		revalidatePath(path);
		revalidatePath("/services");
		revalidateTag("blogs", "max");
		revalidateTag("services", "max");
		if (doc?.slug) {
			revalidateTag(`service:${doc.slug}`, "max");
		}
	}

	return doc;
};
