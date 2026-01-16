"use client";

import {
	parseAsArrayOf,
	parseAsBoolean,
	parseAsString,
	useQueryState,
} from "nuqs";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel, FieldTitle } from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Switch, SwitchThumb } from "@/components/ui/switch";

import { IconSearch } from "@/assets/icons/search";

export function SearchInput({ placeholder }: { placeholder?: string }) {
	const [search, setSearch] = useQueryState(
		"search",
		parseAsString.withDefault("").withOptions({ shallow: false, throttleMs: 300 })
	);

	return (
		<InputGroup>
			<InputGroupInput
				defaultValue={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder={placeholder}
			/>
			<InputGroupAddon align="inline-end">
				<IconSearch />
			</InputGroupAddon>
		</InputGroup>
	);
}

export function CategoryFilter({
	category,
	count,
	slug,
}: {
	category: string;
	slug: string;
	count: number;
}) {
	const [categories, setCategories] = useQueryState(
		"category",
		parseAsArrayOf(parseAsString)
			.withDefault([])
			.withOptions({ shallow: false })
	);

	const isChecked = categories.includes(slug);

	const handleCheckedChange = (checked: boolean) => {
		if (checked) {
			setCategories([...categories, slug]);
		} else {
			setCategories(categories.filter((c) => c !== slug));
		}
	};

	return (
		<div className="flex items-center justify-between">
			<FieldLabel
				className="w-fit! cursor-pointer overflow-hidden rounded-full! transition-colors hover:bg-muted"
				htmlFor={slug}
			>
				<Field
					className="gap-1.5 overflow-hidden px-3! py-1.5! transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:bg-card group-has-data-[state=checked]/field-label:px-2!"
					orientation="horizontal"
				>
					<Checkbox
						checked={isChecked}
						className="-ml-6 -translate-x-1 rounded-full transition-all duration-100 ease-linear data-[state=checked]:ml-0 data-[state=checked]:translate-x-0"
						id={slug}
						onCheckedChange={handleCheckedChange}
						value={slug}
					/>
					<FieldTitle>{category}</FieldTitle>
				</Field>
			</FieldLabel>
			<span className="font-mono text-badge text-muted-background">
				{count}
			</span>
		</div>
	);
}

export function FeaturedFilter({ count }: { count: number }) {
	const [isFeatured, setIsFeatured] = useQueryState(
		"featured",
		parseAsBoolean.withDefault(false).withOptions({ shallow: false })
	);

	return (
		<Label className="flex cursor-pointer items-center justify-between rounded-lg border bg-card p-3">
			<div className="flex items-center gap-x-2 font-display text-label text-stone-500">
				<Switch checked={isFeatured} onCheckedChange={setIsFeatured}>
					<SwitchThumb />
				</Switch>
				Featured
			</div>
			<span className="font-mono text-badge text-muted-background">
				{count}
			</span>
		</Label>
	);
}

export function Stats({
	total,
	filtered,
}: {
	total: number;
	filtered: number;
}) {
	if (total === filtered) {
		return (
			<p className="text-stone-500 text-subhead-xs">
				{total} {total === 1 ? "Result" : "Results"}
			</p>
		);
	}

	return (
		<p className="text-stone-500 text-subhead-xs">
			{filtered} out of {total} Results
		</p>
	);
}
