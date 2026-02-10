"use client";

import React, { useMemo, useState } from "react";

import { useField } from "@payloadcms/ui";

import * as Icons from "@/assets/icons";

const iconEntries = Object.entries(Icons).filter(
	([, Component]) => typeof Component === "function"
) as [string, React.ComponentType<{ className?: string }>][];

export function IconPickerFieldComponent(props: {
	path?: string;
	field?: { name?: string; label?: string; admin?: { description?: string } };
	clientField?: {
		name?: string;
		label?: string;
		admin?: { description?: string };
	};
}) {
	const { path: pathFromProps, field, clientField } = props;
	const fieldConfig = clientField ?? field;
	const { value, setValue, showError, errorMessage } = useField<string>({
		path: pathFromProps,
		potentiallyStalePath: pathFromProps,
	});

	const [search, setSearch] = useState("");
	const filteredIcons = useMemo(() => {
		if (!search.trim()) return iconEntries;
		const q = search.toLowerCase();
		return iconEntries.filter(([name]) =>
			name.toLowerCase().replace(/^Icon/, "").includes(q)
		);
	}, [search]);

	const label = fieldConfig?.label ?? "Icon";
	const description = fieldConfig?.admin?.description;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 8,
			}}
		>
			<label
				style={{
					fontWeight: 500,
					fontSize: 13,
					color: "var(--theme-elevation-800)",
				}}
			>
				{label}
			</label>

			{description && (
				<p
					style={{
						fontSize: 12,
						color: "var(--theme-elevation-600)",
						margin: 0,
					}}
				>
					{description}
				</p>
			)}

			<input
				aria-label="Search icons"
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search icons..."
				style={{
					padding: "8px 12px",
					borderRadius: 4,
					border: "1px solid var(--theme-elevation-150)",
					fontSize: 13,
					backgroundColor: "var(--theme-elevation-0)",
				}}
				type="text"
				value={search}
			/>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
					gap: 8,
					maxHeight: 280,
					overflowY: "auto",
					padding: 4,
				}}
			>
				{filteredIcons.map(([name, IconComponent]) => {
					const isActive = value === name;
					return (
						<button
							key={name}
							onClick={() => setValue(isActive ? "" : name)}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								padding: 8,
								borderRadius: 8,
								border: `1px solid ${
									isActive
										? "var(--theme-success-500)"
										: "var(--theme-elevation-150)"
								}`,
								backgroundColor: isActive
									? "var(--theme-success-50)"
									: "var(--theme-elevation-50)",
								cursor: "pointer",
								minWidth: 64,
							}}
							title={name}
							type="button"
						>
							<div
								style={{
									width: 24,
									height: 24,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "var(--theme-elevation-800)",
								}}
							>
								<IconComponent className="size-6" />
							</div>
							<span
								style={{
									marginTop: 4,
									fontSize: 10,
									textAlign: "center",
									color: "var(--theme-elevation-600)",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
									maxWidth: "100%",
								}}
							>
								{name.replace(/^Icon/, "")}
							</span>
						</button>
					);
				})}
			</div>

			{filteredIcons.length === 0 && (
				<p
					style={{
						fontSize: 12,
						color: "var(--theme-elevation-600)",
						margin: 0,
					}}
				>
					No icons match your search.
				</p>
			)}

			{value && (
				<div
					style={{
						fontSize: 12,
						color: "var(--theme-elevation-600)",
					}}
				>
					Selected: <code>{value}</code>
				</div>
			)}

			{showError && errorMessage && (
				<p
					style={{
						fontSize: 12,
						color: "var(--theme-error, #e11d48)",
						margin: 0,
					}}
				>
					{errorMessage}
				</p>
			)}
		</div>
	);
}
