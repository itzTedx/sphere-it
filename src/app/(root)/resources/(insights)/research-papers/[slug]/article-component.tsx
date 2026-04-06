import RichText from "@/modules/cms/components/RichText";
import { QuickEnquiryForm } from "@/modules/form/quick-enquiry-form";
import type { ResearchPaper } from "@/payload-types";

interface ArticleProps {
	content: ResearchPaper["content"];
	isLoggedIn: boolean;
	title: string;
}

export function Article({ content, isLoggedIn, title }: ArticleProps) {
	const hasAccess = isLoggedIn;

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
