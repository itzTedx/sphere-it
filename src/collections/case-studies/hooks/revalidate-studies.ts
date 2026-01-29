import { revalidatePath, revalidateTag } from "next/cache";

import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

import { CaseStudy } from "@/payload-types";

export const revalidateStudies: CollectionAfterChangeHook<CaseStudy> = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === "published") {
			const path = `/resources/case-studies/${doc.id}`;

			payload.logger.info(`Revalidating post at path: ${path}`);

			revalidatePath(path);
			revalidateTag("case-studies-sitemap", "max");
		}

		// If the post was previously published, we need to revalidate the old path
		if (previousDoc._status === "published" && doc._status !== "published") {
			const oldPath = `/resources/case-studies/${previousDoc.id}`;

			payload.logger.info(`Revalidating old post at path: ${oldPath}`);

			revalidatePath(oldPath);
			revalidateTag("case-studies-sitemap", "max");
		}
	}
	return doc;
};

export const revalidateDeleteStudies: CollectionAfterDeleteHook<CaseStudy> = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = `/resources/case-studies/${doc?.slug}`;

		revalidatePath(path);
		revalidateTag("case-studies-sitemap", "max");
	}

	return doc;
};
