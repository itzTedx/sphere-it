import { revalidatePath, revalidateTag } from "next/cache";

import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

import { Career } from "@/payload-types";

export const revalidateRoles: CollectionAfterChangeHook<Career> = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === "published") {
			const path = `/careers/${doc.id}`;

			payload.logger.info(`Revalidating career at path: ${path}`);

			revalidatePath(path);
			revalidateTag("careers-sitemap", "max");
		}

		// If the career was previously published, we need to revalidate the old path
		if (previousDoc._status === "published" && doc._status !== "published") {
			const oldPath = `/careers/${previousDoc.id}`;

			payload.logger.info(`Revalidating old career at path: ${oldPath}`);

			revalidatePath(oldPath);
			revalidateTag("careers-sitemap", "max");
		}
	}
	return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Career> = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = `/careers/${doc?.id}`;

		revalidatePath(path);
		revalidateTag("careers-sitemap", "max");
	}

	return doc;
};
