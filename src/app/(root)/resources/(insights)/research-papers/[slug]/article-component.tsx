"use client";

import { useEffect, useState } from "react";

import RichText from "@/modules/cms/components/RichText";
import { QuickEnquiryForm } from "@/modules/form/quick-enquiry-form";
import type { ResearchPaper } from "@/payload-types";

interface ArticleProps {
	content: ResearchPaper["content"];
	isLoggedIn: boolean;
	title: string;
}

export function Article({ content, isLoggedIn, title }: ArticleProps) {
	const [hasAccess, setHasAccess] = useState(isLoggedIn);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Need to rerender when isLoggedIn changes
	useEffect(() => {
		// Check if user has been granted access via form submission
		const accessGranted =
			localStorage.getItem("research-paper-access") === "true";
		const accessTimestamp = localStorage.getItem(
			"research-paper-access-timestamp"
		);

		// Optional: Check if access is still valid (e.g., within 7 days)
		if (accessGranted && accessTimestamp) {
			const timestamp = Number.parseInt(accessTimestamp, 10);
			const now = Date.now();
			const sevenDays = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

			if (now - timestamp < sevenDays) {
				setHasAccess(true);
			} else {
				// Clear expired access
				localStorage.removeItem("research-paper-access");
				localStorage.removeItem("research-paper-access-timestamp");
			}
		}
	}, [isLoggedIn]);

	const handleFormSuccess = () => {
		setHasAccess(true);
		// Optional: Reload the page to ensure full content is rendered properly
		window.location.reload();
	};

	return (
		<div className="container relative max-w-7xl border-b">
			<article
				className="prose prose-stone prose-lg mx-auto max-w-4xl py-4 prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
				itemProp="articleBody"
			>
				{hasAccess ? (
					<RichText
						className="prose prose-stone prose-lg prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
						data={content}
						enableGutter={false}
					/>
				) : (
					<div className="space-y-6">
						<div className="max-h-96 overflow-hidden">
							<RichText
								className="prose prose-stone prose-lg prose-h1:font-medium prose-headings:text-primary-900 sm:py-6"
								data={content}
								enableGutter={false}
							/>
						</div>
						<div className="relative">
							<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
						</div>
					</div>
				)}
			</article>
			{!hasAccess && (
				<div className="relative pt-12 pb-24">
					<div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
						<div className="space-y-3 text-center">
							<h2 className="text-title-4">
								Get Access to Full Research Paper
							</h2>
							<p className="text-muted-foreground">
								Share your details to unlock the complete research paper and
								receive expert insights tailored to your needs.
							</p>
						</div>

						<div className="w-full max-w-md space-y-4">
							<QuickEnquiryForm
								onSuccess={handleFormSuccess}
								route={`${title} - Research Paper`}
								showEnquiryField={false}
								submitText="Get Access"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
