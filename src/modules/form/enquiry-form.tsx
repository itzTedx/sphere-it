"use client";

import React from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLabelAsterisk,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";

import { IconEmail } from "@/assets/icons/email";
import { IconUser } from "@/assets/icons/user";

import { sendFullEnquiry } from "./actions/send-enquiry";
import { EnquireType, enquirySchema } from "./validators/enquiry-schema";

interface EnquiryFormProps {
	onSubmit?: (
		data: EnquireType
	) => void | Promise<void> | boolean | Promise<boolean>;
	submitButtonText?: string;
	isSubmitting?: boolean;
}

export const EnquiryForm = ({
	onSubmit: customOnSubmit,
	submitButtonText = "Send Message",
	isSubmitting = false,
}: EnquiryFormProps = {}) => {
	const [isPending, startTransition] = React.useTransition();
	const form = useForm<EnquireType>({
		resolver: zodResolver(enquirySchema),
		mode: "onBlur",
	});

	const isFormSubmitting = isSubmitting || isPending;

	async function onSubmit(data: EnquireType) {
		if (customOnSubmit) {
			const result = await customOnSubmit(data);
			// Reset form only if submission was successful (returns truthy value)
			if (result === true || result === undefined) {
				form.reset();
			}
		} else {
			startTransition(async () => {
				const result = await sendFullEnquiry(data);

				if (result.success) {
					toast.success("Enquiry submitted successfully!", {
						position: "bottom-center",
					});
					form.reset();
				} else {
					toast.error(result.message || "Failed to submit enquiry", {
						position: "bottom-center",
					});
				}
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
				<Controller
					control={form.control}
					name="subject"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Subject</FieldLabel>
							<Input
								placeholder="What is your message about?"
								{...field}
								aria-describedby={
									fieldState.invalid ? `${field.name}-error` : undefined
								}
								aria-invalid={fieldState.invalid}
								id={field.name}
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

				<Controller
					control={form.control}
					name="message"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>
								Message <FieldLabelAsterisk />
							</FieldLabel>

							<Textarea
								{...field}
								aria-describedby={
									fieldState.invalid ? `${field.name}-error` : undefined
								}
								aria-invalid={fieldState.invalid}
								className="min-h-[90px]"
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
				<FieldDescription className="hidden sm:block">
					By filling out this form you agree to the terms in our{" "}
					<Link className="underline" href="/legal/privacy" target="_blank">
						privacy policy.
					</Link>
				</FieldDescription>

				<Button className="relative" disabled={isFormSubmitting} type="submit">
					{submitButtonText}
				</Button>
			</FieldGroup>
		</form>
	);
};
