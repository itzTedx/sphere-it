export const INDUSTRY_OPTIONS = [
	{ label: "Retail Banking", value: "retail-banking" },
	{ label: "Corporate Banking", value: "corporate-banking" },
	{ label: "Wealth Management", value: "wealth-management" },
	{ label: "Insurance", value: "insurance" },
	{ label: "Conglomerates", value: "conglomerates" },
	{ label: "Government Entities", value: "government-entities" },
	{ label: "Telecommunications", value: "telecommunications" },
	{ label: "Energy & Utilities", value: "energy-utilities" },
] as const;

const slugToLabelMap = new Map<string, string>(
	INDUSTRY_OPTIONS.map((opt) => [opt.value, opt.label])
);

/**
 * Converts an industry slug (e.g. "retail-banking") to its display label (e.g. "Retail Banking").
 * Falls back to a title-cased version of the slug if the value is not in the known options.
 */
export function industrySlugToLabel(slug: string): string {
	return (
		slugToLabelMap.get(slug) ??
		slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
	);
}

