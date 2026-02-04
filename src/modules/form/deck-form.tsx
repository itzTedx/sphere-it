"use client";

import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLabelAsterisk,
} from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { PhoneInput } from "@/components/ui/phone-input";

import { IconEmail } from "@/assets/icons/email";
import { IconUser } from "@/assets/icons/user";

import { LinkedInAuthButton } from "../auth/components/linkedin-button";
import { submitDeckDownload } from "./actions/submit-deck-download";
import { DeckType, deckSchema } from "./validators/deck-schema";

interface DeckFormProps {
	onSuccess?: () => void;
	onSubmit?: (
		data: DeckType
	) => Promise<{ success: boolean; error?: string; name?: string }>;
	buttonText?: string;
}

export const DeckForm = ({
	onSuccess,
	onSubmit,
	buttonText = "Download Deck",
}: DeckFormProps = {}) => {
	const [isPending, startTransition] = useTransition();

	const form = useForm<DeckType>({
		resolver: zodResolver(deckSchema),
		mode: "onBlur",
	});

	function handleSubmit(data: DeckType) {
		startTransition(async () => {
			try {
				const result = onSubmit
					? await onSubmit(data)
					: await submitDeckDownload(data);

				if (result.success) {
					// Only trigger PDF download if using default handler
					if (!onSubmit) {
						const link = document.createElement("a");
						link.href = "/pdf/sphere-it-introduction.pdf";
						link.download = "Sphere IT - Introduction.pdf";
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);

						toast.success(
							`Thank you ${result.name}! Your download has started.`,
							{
								description: "We'll be in touch soon to discuss your needs.",
							}
						);
					}

					// Reset form after successful submission
					form.reset();

					// Close dialog if callback provided
					onSuccess?.();
				} else {
					toast.error("Failed to submit form", {
						description: result.error || "Please try again later.",
					});
				}
			} catch (error) {
				console.error("Error submitting form:", error);
				toast.error("Something went wrong", {
					description: "Please try again later.",
				});
			}
		});
	}

	return (
		<form
			aria-labelledby="enquiry-form-heading"
			onSubmit={form.handleSubmit(handleSubmit)}
		>
			<FieldGroup>
				<Controller
					control={form.control}
					name="name"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel
								aria-invalid={fieldState.invalid}
								htmlFor={field.name}
							>
								Name <FieldLabelAsterisk />
							</FieldLabel>
							<InputGroup>
								<InputGroupInput
									placeholder="Your Name"
									{...field}
									aria-describedby={
										fieldState.invalid ? `${field.name}-error` : undefined
									}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								<InputGroupAddon>
									<IconUser />
								</InputGroupAddon>
							</InputGroup>
							{fieldState.invalid && (
								<FieldError
									errors={[fieldState.error]}
									id={`${field.name}-error`}
								/>
							)}
						</Field>
					)}
				/>

				<div className="grid gap-3 sm:grid-cols-2">
					<Controller
						control={form.control}
						name="email"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Email <FieldLabelAsterisk />
								</FieldLabel>
								<InputGroup>
									<InputGroupInput
										placeholder="We'll reply here"
										{...field}
										aria-describedby={
											fieldState.invalid ? `${field.name}-error` : undefined
										}
										aria-invalid={fieldState.invalid}
										id={field.name}
									/>
									<InputGroupAddon>
										<IconEmail />
									</InputGroupAddon>
								</InputGroup>
								{fieldState.invalid && (
									<FieldError
										errors={[fieldState.error]}
										id={`${field.name}-error`}
									/>
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="phone"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Phone</FieldLabel>
								<InputGroup>
									<PhoneInput
										id={field.name}
										onChange={field.onChange}
										value={field.value}
									/>
								</InputGroup>
								{fieldState.invalid && (
									<FieldError
										errors={[fieldState.error]}
										id={`${field.name}-error`}
									/>
								)}
							</Field>
						)}
					/>
				</div>

				<Button className="relative" disabled={isPending} type="submit">
					<LoadingSwap isLoading={isPending}>{buttonText}</LoadingSwap>
				</Button>

				<LinkedInAuthButton />
			</FieldGroup>
		</form>
	);
};
