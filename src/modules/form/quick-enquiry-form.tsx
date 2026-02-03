"use client";

import { usePathname } from "next/navigation";

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
import { Textarea } from "@/components/ui/textarea";

import { IconEmail } from "@/assets/icons/email";
import { IconPhone } from "@/assets/icons/phone";
import { IconUser } from "@/assets/icons/user";

import { env } from "@/lib/env/client";

import { LinkedInAuthButton } from "../auth/components/linkedin-button";
import { sendEnquiryEmail } from "./actions/send-enquiry";
import {
	QuickEnquireType,
	quickEnquirySchema,
} from "./validators/enquiry-schema";

export const QuickEnquiryForm = ({
	showEnquiryField = true,
	submitText = "Submit",
	onSuccess,
	route,
}: {
	showEnquiryField?: boolean;
	submitText?: string;
	onSuccess?: () => void;
	route: string;
}) => {
	const form = useForm<QuickEnquireType>({
		resolver: zodResolver(quickEnquirySchema),
		mode: "onBlur",
	});
	const pathname = usePathname();

	async function onSubmit(data: QuickEnquireType) {
		try {
			// Send email using server action
			const result = await sendEnquiryEmail(
				data,
				route === "CTA" ? `${env.NEXT_PUBLIC_BASE_URL}${pathname}` : route
			);

			if (!result.success) {
				throw new Error(result.error || "Failed to send enquiry");
			}

			// Store access granted flag in localStorage
			localStorage.setItem("research-paper-access", "true");
			localStorage.setItem(
				"research-paper-access-timestamp",
				Date.now().toString()
			);

			toast.success(
				"Access granted! You can now view the full research paper.",
				{
					description:
						"Thank you for your interest. The complete paper is now available.",
				}
			);

			// Call the success callback if provided
			if (onSuccess) {
				onSuccess();
			}
		} catch (error) {
			console.error("Error submitting enquiry:", error);
			toast.error("Failed to submit enquiry. Please try again.", {
				description:
					"There was an error sending your details. Please try again later.",
			});
		}
	}

	return (
		<form
			aria-labelledby="enquiry-form-heading"
			onSubmit={form.handleSubmit(onSubmit)}
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
									<InputGroupInput
										placeholder="+971 56 789 4321"
										{...field}
										aria-describedby={
											fieldState.invalid ? `${field.name}-error` : undefined
										}
										aria-invalid={fieldState.invalid}
										id={field.name}
									/>
									<InputGroupAddon>
										<IconPhone className="size-3.5" />
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
				</div>
				{showEnquiryField && (
					<Controller
						control={form.control}
						name="message"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Enquiry <FieldLabelAsterisk />
								</FieldLabel>

								<Textarea
									{...field}
									aria-describedby={
										fieldState.invalid ? `${field.name}-error` : undefined
									}
									aria-invalid={fieldState.invalid}
									className="field-sizing-fixed min-h-[96px]"
									id={field.name}
									placeholder="Share your questions with our expert…"
								/>

								{fieldState.invalid && (
									<FieldError
										errors={[fieldState.error]}
										id={`${field.name}-error`}
									/>
								)}
							</Field>
						)}
					/>
				)}

				<Button className="relative" type="submit">
					{submitText}
				</Button>

				<LinkedInAuthButton />
			</FieldGroup>
		</form>
	);
};
