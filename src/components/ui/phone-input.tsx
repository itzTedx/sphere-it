"use client";

import React, { useId } from "react";

import { ChevronDownIcon, PhoneIcon } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { List } from "react-window";

import { COUNTRY_DATA } from "@/lib/countries";
import { cn } from "@/lib/utils";

import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from "./command";
import { Input } from "./input";
import { InputGroupInput } from "./input-group";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export type PhoneInputProps = {
	value?: string;
	onChange: (value: string) => void;

	className?: string;
	id?: string;
	placeholder?: string;
	countrySelectProps?: Partial<CountrySelectProps>;
	disabled?: boolean;
};

export function PhoneInput({
	value,
	onChange,
	className = "",
	id,
	placeholder = "Enter phone number",
	countrySelectProps = {},
	disabled = false,
}: PhoneInputProps) {
	const autoId = useId();
	const inputId = id || autoId;

	// Handle mobile-specific input behavior
	React.useEffect(() => {
		// Only apply mobile-specific behavior on mobile devices
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			// Prevent zoom on input focus (common mobile issue)
			const viewport = document.querySelector('meta[name="viewport"]');
			if (viewport) {
				const originalContent = viewport.getAttribute("content") || "";
				viewport.setAttribute(
					"content",
					`${originalContent}, maximum-scale=1.0, user-scalable=no`
				);

				return () => {
					viewport.setAttribute("content", originalContent);
				};
			}
		}
	}, []);

	return (
		<RPNInput.default
			className={cn("flex border-0 bg-transparent", className)}
			countrySelectComponent={(props) => (
				<CountrySelect {...props} {...countrySelectProps} />
			)}
			disabled={disabled}
			flagComponent={FlagComponent}
			id={inputId}
			inputComponent={
				PlainInput as unknown as React.ComponentProps<
					typeof RPNInput.default
				>["inputComponent"]
			}
			inputProps={{
				autoComplete: "tel",
				inputMode: "tel",
				pattern: "[+]?[0-9]*",
				...(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				) && {
					// Prevent auto-correction and suggestions on mobile
					autoCorrect: "off",
					autoCapitalize: "off",
					spellCheck: false,
				}),
			}}
			international
			onChange={(v) => {
				onChange(v ?? "");
			}}
			placeholder={placeholder}
			// Mobile-specific props
			value={value}
		/>
	);
}
PhoneInput.displayName = "PhoneInput";

const PlainInput = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<typeof Input>
>(({ className, type, ...props }, ref) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const lastValueRef = React.useRef<string>("");

	React.useImperativeHandle(ref, () => inputRef.current!);

	// Handle cursor position on mobile to prevent shifting
	React.useEffect(() => {
		const input = inputRef.current;
		if (!input) return;

		const handleInput = (e: Event) => {
			const target = e.target as HTMLInputElement;
			const currentValue = target.value;
			const lastValue = lastValueRef.current;

			// Only handle cursor position on mobile devices
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				// Store current cursor position
				const cursorPos = target.selectionStart || 0;

				// Handle different scenarios
				if (currentValue.length > lastValue.length) {
					// Characters were added
					if (cursorPos === currentValue.length) {
						// Cursor is at the end, keep it there
						requestAnimationFrame(() => {
							target.setSelectionRange(
								currentValue.length,
								currentValue.length
							);
						});
					} else if (
						currentValue.startsWith("+") &&
						lastValue &&
						!lastValue.startsWith("+")
					) {
						// Country code was added, move cursor to end
						requestAnimationFrame(() => {
							target.setSelectionRange(
								currentValue.length,
								currentValue.length
							);
						});
					}
				} else if (currentValue.length < lastValue.length) {
					// Characters were removed
					if (cursorPos > currentValue.length) {
						// Adjust cursor if it's beyond the new string length
						requestAnimationFrame(() => {
							target.setSelectionRange(
								currentValue.length,
								currentValue.length
							);
						});
					}
				}
			}

			lastValueRef.current = currentValue;
		};

		// Also handle keyup for better mobile support
		const handleKeyUp = (e: KeyboardEvent) => {
			const target = e.target as HTMLInputElement;
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				// Ensure cursor is at the end after key release on mobile
				if (target.selectionStart !== target.value.length) {
					// Only force cursor to end if it makes sense (user is typing continuously)
					const currentValue = target.value;
					const lastValue = lastValueRef.current;
					if (currentValue.length >= lastValue.length) {
						requestAnimationFrame(() => {
							target.setSelectionRange(
								currentValue.length,
								currentValue.length
							);
						});
					}
				}
			}
		};

		// Handle focus events on mobile
		const handleFocus = () => {
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				// Small delay to ensure focus is complete
				setTimeout(() => {
					if (input && input.value) {
						const endPos = input.value.length;
						input.setSelectionRange(endPos, endPos);
					}
				}, 100);
			}
		};

		input.addEventListener("input", handleInput);
		input.addEventListener("keyup", handleKeyUp);
		input.addEventListener("focus", handleFocus);

		return () => {
			input.removeEventListener("input", handleInput);
			input.removeEventListener("keyup", handleKeyUp);
			input.removeEventListener("focus", handleFocus);
		};
	}, []);

	return (
		<InputGroupInput
			className={cn("-ms-px w-full", className)}
			data-slot="phone-input"
			ref={inputRef}
			{...props}
		/>
	);
});
PlainInput.displayName = "PlainInput";

/** Virtualized list (renders only visible rows) */
const CountryList = ({
	items,
	onSelect,
	search,
}: {
	items: typeof COUNTRY_DATA;
	onSelect: (code: string) => void;
	search: string;
}) => {
	// Filter items based on search
	const filteredItems = React.useMemo(() => {
		if (!search) return items;
		const searchLower = search.toLowerCase();
		return items.filter(
			(item) =>
				item.name.toLowerCase().includes(searchLower) ||
				item.callingCode.includes(search) ||
				item.code.toLowerCase().includes(searchLower)
		);
	}, [items, search]);

	return (
		<List
			rowComponent={({ index, style, ariaAttributes }) => {
				const item = filteredItems[index];
				if (!item) {
					return <div {...ariaAttributes} style={style} />;
				}
				return (
					<CommandItem
						className="flex items-center gap-2 px-3 py-2"
						key={`country-list-${item.code}-${item.name}-${index}-${item.callingCode}`}
						onSelect={() => {
							onSelect(item.code);
						}}
						style={style}
						value={item.name}
						{...ariaAttributes}
					>
						<FlagComponent
							aria-hidden="true"
							country={item.code}
							countryName={item.name}
						/>
						<span className="text-sm">{item.name}</span>
						<span className="ml-auto text-muted-foreground text-xs">
							+{item.callingCode}
						</span>
					</CommandItem>
				);
			}}
			rowCount={filteredItems.length}
			rowHeight={44}
			rowProps={{}}
			style={{ height: 300, width: "100%" }}
		/>
	);
};

type CountrySelectProps = {
	disabled?: boolean;
	value: RPNInput.Country;
	onChange: (value: RPNInput.Country) => void;
};

const CountrySelect = ({ disabled, value, onChange }: CountrySelectProps) => {
	const [open, setOpen] = React.useState(false);
	const [search, setSearch] = React.useState("");
	const deferredSearch = React.useDeferredValue(search);
	const selected = value;

	// Reset search when popover closes
	React.useEffect(() => {
		if (!open) {
			setSearch("");
		}
	}, [open]);

	return (
		<Popover onOpenChange={setOpen} open={open}>
			<PopoverTrigger asChild>
				<button
					className={cn(
						"relative inline-flex items-center self-stretch rounded-s-md border border-input-border bg-input/30 py-2 ps-3 pe-2 text-muted-foreground outline-none transition-[color,box-shadow] focus-within:z-10 focus-within:ring-[3px] hover:bg-muted hover:text-foreground hover:brightness-120 has-disabled:pointer-events-none has-disabled:opacity-50",
						disabled && "pointer-events-none opacity-50"
					)}
					disabled={disabled}
					type="button"
				>
					<span className="inline-flex items-center gap-1">
						<FlagComponent
							aria-hidden="true"
							country={selected}
							countryName={selected}
						/>

						<ChevronDownIcon aria-hidden="true" className="size-3" />
					</span>
				</button>
			</PopoverTrigger>
			<PopoverContent align="start" className="w-64 p-0">
				<Command shouldFilter={false}>
					<CommandInput
						onValueChange={setSearch}
						placeholder="Search country..."
						value={search}
					/>
					<CommandEmpty>No country found.</CommandEmpty>
					<CommandList className="max-h-60 overflow-hidden p-0">
						<CountryList
							items={COUNTRY_DATA}
							onSelect={(code) => {
								onChange(code as RPNInput.Country);
								setOpen(false);
							}}
							search={deferredSearch}
						/>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className="w-5 overflow-hidden rounded">
			{Flag ? (
				<Flag title={countryName} />
			) : (
				<PhoneIcon aria-hidden="true" size={16} />
			)}
		</span>
	);
};
