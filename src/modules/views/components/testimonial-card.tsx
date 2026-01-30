import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import RichText from "@/modules/cms/components/RichText";
import { EmployeeTestimonial } from "@/payload-types";

export function TestimonialCard({ data }: { data: EmployeeTestimonial }) {
	return (
		<Card
			aria-labelledby={`testimonial-${data.id}-name`}
			className="rounded-xl p-0 shadow-md"
			role="article"
		>
			<CardHeader className="border-b bg-muted p-3 xl:p-4">
				<CardTitle className="leading-none" id={`testimonial-${data.id}-name`}>
					{data.name}
				</CardTitle>
				<CardDescription>{data.jobRole}</CardDescription>
			</CardHeader>
			<CardContent>
				<blockquote className="text-sm text-stone-700 xl:text-base">
					<RichText
						className="prose prose-stone prose-lg prose-h1:font-medium prose-headings:text-primary-900"
						data={data.content}
						enableGutter={false}
					/>
				</blockquote>
				{/* <span aria-label={`Industry: ${data.industry}`} className="text-stone-400 text-xs xl:text-sm">
          {data.industry}
        </span> */}
			</CardContent>
		</Card>
	);
}
