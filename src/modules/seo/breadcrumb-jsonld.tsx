import { Route } from "next";
import Script from "next/script";

interface BreadcrumbItem {
	name: string;
	item: Route;
}

interface BreadcrumbJsonLdProps {
	items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((breadcrumbItem, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: breadcrumbItem.name,
			item: breadcrumbItem.item,
		})),
	};

	return (
		<Script type="application/ld+json">
			{JSON.stringify(breadcrumbSchema)}
		</Script>
	);
}
