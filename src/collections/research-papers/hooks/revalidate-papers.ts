import { revalidatePath, revalidateTag } from "next/cache";

import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

import { ResearchPaper } from "@/payload-types";

export const revalidatePaper: CollectionAfterChangeHook<ResearchPaper> = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === "published") {
			const path = `/resources/research-papers/${doc.slug}`;

			payload.logger.info(`Revalidating post at path: ${path}`);

			revalidatePath(path);
			revalidatePath("/resources/research-papers");
			revalidateTag("researchPapers", "max");
			revalidateTag(`research-paper:${doc.slug}`, "max");
		}

		// If the post was previously published, we need to revalidate the old path
		if (previousDoc._status === "published" && doc._status !== "published") {
			const oldPath = `/resources/research-papers/${previousDoc.slug}`;

			payload.logger.info(`Revalidating old post at path: ${oldPath}`);

			revalidatePath(oldPath);
			revalidatePath("/resources/research-papers");
			revalidateTag("researchPapers", "max");
			revalidateTag(`research-paper:${previousDoc.slug}`, "max");
		}
	}
	return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<ResearchPaper> = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = `/resources/research-papers/${doc?.slug}`;

		revalidatePath(path);
		revalidatePath("/resources/research-papers");
		revalidateTag("researchPapers", "max");
		if (doc?.slug) {
			revalidateTag(`research-paper:${doc.slug}`, "max");
		}
	}

	return doc;
};
