import { payload } from "@/lib/payload";
import RichText from "@/modules/cms/components/RichText";

export default async function TestPage() {
	const res = await payload.find({
		collection: "services",
		draft: false,
		depth: 2,
		limit: 100,
		pagination: false,
	});

	const { docs } = res;

	return (
		<div className="container max-w-7xl py-28">
			{/* <pre className="text-sm">{JSON.stringify(docs, null, 2)}</pre> */}

			{docs.map((doc) => (
				<div key={doc.id}>
					{/* <pre className="text-wrap">{JSON.stringify(doc, null, 2)}</pre> */}
					<RichText
						className="prose-headings:text-primary-900"
						data={doc.content}
						enableGutter={false}
					/>
				</div>
			))}
		</div>
	);
}
