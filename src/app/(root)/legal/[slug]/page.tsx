import type { Metadata } from "next/dist/types";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Cta } from "@/components/layout/cta";

import { BASE_URL, COMPANY_NAME } from "@/data/site-config";
import { generateMeta } from "@/lib/generateMeta";
import RichText from "@/modules/cms/components/RichText";
import {
	findLegalPageBySlug,
	listLegalPages,
} from "@/modules/legal-pages/actions/query";

import { Header } from "../components/header";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const pages = await listLegalPages();

	return pages.map((page) => ({
		slug: page.slug,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const page = await findLegalPageBySlug(slug);

	if (!page) {
		return {
			description: "The requested legal policy could not be found.",
			robots: { follow: false, index: false },
			title: "Policy Not Found",
		};
	}

	return generateMeta({
		canonicalPath: `/legal/${page.slug}`,
		doc: page,
	});
}

export default async function LegalPage({ params }: Props) {
	const { slug } = await params;

	const page = await findLegalPageBySlug(slug);

	if (!page) return notFound();

	const lastUpdated = page.updatedAt
		? new Date(page.updatedAt).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})
		: null;

	return (
		<>
			{/* Generic structured data for legal pages */}
			<Script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebPage",
					name: page.meta?.title ?? page.title,
					description: page.meta?.description ?? "",
					url: `${BASE_URL}/legal/${slug}`,
					isPartOf: {
						"@type": "WebSite",
						name: COMPANY_NAME,
						url: BASE_URL,
					},
				})}
			</Script>

			<main aria-label={page.title} role="main">
				<Header />
				<section className="mx-auto max-w-6xl">
					<article
						aria-label={`${page.title} Content`}
						className="prose prose-stone container max-w-4xl py-6 prose-a:text-primary-600 prose-a:transition-colors prose-a:hover:text-accent"
					>
						<RichText data={page.content} enableGutter={false} />
					</article>
				</section>
				<div className="col-span-full border-t p-6 text-center lg:p-12">
					{lastUpdated && (
						<p className="text-sm text-stone-500">
							Last Updated: {lastUpdated}
						</p>
					)}
				</div>
				<Cta />
			</main>
		</>
	);
}
