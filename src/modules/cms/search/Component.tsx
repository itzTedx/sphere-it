"use client";
import React, { useEffect, useState } from "react";

import { Route } from "next";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDebounce } from "../utils/useDebounce";

export const Search: React.FC = () => {
	const [value, setValue] = useState("");
	const router = useRouter();

	const debouncedValue = useDebounce(value);

	useEffect(() => {
		router.push(
			`/search${debouncedValue ? `?q=${debouncedValue}` : ""}` as Route
		);
	}, [debouncedValue, router]);

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<Label className="sr-only" htmlFor="search">
					Search
				</Label>
				<Input
					id="search"
					onChange={(event) => {
						setValue(event.target.value);
					}}
					placeholder="Search"
				/>
				<button className="sr-only" type="submit">
					submit
				</button>
			</form>
		</div>
	);
};
