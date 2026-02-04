"use client";

import { useTransition } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLabelAsterisk,
	FieldLegend,
	FieldSet,
	FieldTitle,
} from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { PhoneInput } from "@/components/ui/phone-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconEmail } from "@/assets/icons/email";
import { IconLocation } from "@/assets/icons/location";
import { IconMessage } from "@/assets/icons/message";
import { IconUser } from "@/assets/icons/user";

import { cn } from "@/lib/utils";

import { submitJobApplication } from "./actions/submit-job-application";
import { FileUpload } from "./components/upload-input";
import {
	JobApplicationType,
	jobApplicationSchema,
	workMode,
} from "./validators/job-application-schema";

const department = [
	{
		id: "engineering",
		title: "Engineering",
	},
	{
		id: "tech",
		title: "Tech",
	},
	{
		id: "hr",
		title: "Human Resources",
	},
	{
		id: "sales",
		title: "Sales",
	},
	{
		id: "pmo",
		title: "PMO / Operations",
	},
] as const;

interface Props {
	initialData?: { department: string; workMode: z.infer<typeof workMode> };
}

export const JobApplicationForm = ({ initialData }: Props) => {
	const aot = department.find((a) => a.title === initialData?.department);
	const [isPending, startTransition] = useTransition();

	const form = useForm<JobApplicationType>({
		resolver: zodResolver(jobApplicationSchema),
		defaultValues: {
			department: aot?.id ?? undefined,
			preferredWorkMode: initialData?.workMode ?? undefined,
		},
		mode: "onBlur",
	});

	function onSubmit(data: JobApplicationType) {
		startTransition(async () => {
			const formData = new FormData();

			// Append all fields to FormData
			Object.entries(data).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					if (key === "resume" && value instanceof File) {
						formData.append(key, value);
					} else {
						formData.append(key, String(value));
					}
				}
			});

			const result = await submitJobApplication(formData);

			if (result.success) {
				toast.success("Application submitted successfully!", {
					description:
						"We've received your application and will get back to you soon.",
				});
				form.reset();
			} else {
				const description = result.rateLimited
					? "Please wait before submitting another application."
					: result.error || "Please try again later.";

				toast.error("Failed to submit application", {
					description,
				});
			}
		});
	}

	return (
		<form
			aria-labelledby="application-form-heading"
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<FieldGroup>
				<Controller
					control={form.control}
					name="name"
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel
									aria-invalid={fieldState.invalid}
									htmlFor={field.name}
								>
									Name <FieldLabelAsterisk />
								</FieldLabel>
								<InputGroup>
									<InputGroupInput
										aria-describedby={
											fieldState.invalid ? `${field.name}-error` : undefined
										}
										aria-invalid={fieldState.invalid}
										id={field.name}
										placeholder="Enter your name"
										{...field}
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
						);
					}}
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
									<InputGroupAddon align="inline-end">
										<Tooltip>
											<TooltipTrigger asChild>
												<InputGroupButton
													aria-label="Help"
													className="bg-transparent"
													size="icon-xs"
													variant="ghost"
												>
													<HelpCircle />
												</InputGroupButton>
											</TooltipTrigger>
											<TooltipContent>
												<p>We&apos;ll use this to send you notifications</p>
											</TooltipContent>
										</Tooltip>
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
					name="location"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Location / Country</FieldLabel>
							<InputGroup>
								<InputGroupInput
									placeholder="What country are you based in?"
									{...field}
									aria-describedby={
										fieldState.invalid ? `${field.name}-error` : undefined
									}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								<InputGroupAddon>
									<IconLocation className="size-3.5" />
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
					name="resume"
					render={({ field: { name, value, onChange }, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={name}>Resume</FieldLabel>

							<FileUpload
								className="w-full max-w-full"
								onChange={(file) => onChange(file)}
							/>

							{value instanceof File && (
								<FieldDescription>Selected file: {value.name}</FieldDescription>
							)}
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} id={`${name}-error`} />
							)}
						</Field>
					)}
				/>

				{!initialData?.department && (
					<Controller
						control={form.control}
						name="department"
						render={({ field, fieldState }) => (
							<FieldSet
								data-invalid={fieldState.invalid}
								disabled={!!initialData}
							>
								<FieldLegend>Area of Interest</FieldLegend>
								<RadioGroup
									aria-invalid={fieldState.invalid}
									defaultValue={initialData?.department}
									name={field.name}
									onValueChange={field.onChange}
									value={field.value}
								>
									{department.map((interest) => (
										<FieldLabel
											htmlFor={`job-areaOfInterest-${interest.id}`}
											key={interest.id}
										>
											<Field
												aria-invalid={fieldState.invalid}
												className="bg-input/30"
												orientation="horizontal"
											>
												<FieldContent>
													<FieldTitle>{interest.title}</FieldTitle>
												</FieldContent>
												<RadioGroupItem
													aria-invalid={fieldState.invalid}
													id={`job-areaOfInterest-${interest.id}`}
													value={interest.id}
												/>
											</Field>
										</FieldLabel>
									))}
								</RadioGroup>
								{fieldState.invalid && (
									<FieldError
										errors={[fieldState.error]}
										id={`${field.name}-error`}
									/>
								)}
							</FieldSet>
						)}
					/>
				)}

				{!initialData?.workMode && (
					<Controller
						control={form.control}
						name="preferredWorkMode"
						render={({ field, fieldState }) => (
							<FieldSet data-invalid={fieldState.invalid}>
								<FieldLegend>Preferred Work Mode </FieldLegend>

								<RadioGroup
									aria-invalid={fieldState.invalid}
									className="inline-flex w-fit gap-0 divide-x overflow-hidden rounded-lg border bg-stone-alpha-10 capitalize"
									defaultValue={initialData?.workMode}
									name={field.name}
									onValueChange={field.onChange}
									value={field.value}
								>
									{workMode.options.map((interest) => (
										<FieldLabel
											className="relative flex w-24 items-center justify-center py-3 text-muted-foreground has-data-[state=checked]:border-border has-data-[state=checked]:bg-transparent has-data-[state=checked]:text-primary-700"
											htmlFor={`job-areaOfInterest-${interest}`}
											key={interest}
										>
											<span className="relative z-10">{interest}</span>

											<RadioGroupItem
												aria-invalid={fieldState.invalid}
												className="sr-only"
												id={`job-areaOfInterest-${interest}`}
												value={interest}
											/>
											<AnimatePresence>
												{field.value === interest && (
													<motion.span
														animate={{
															opacity: 1,
															transition: { duration: 0.05 },
														}}
														className={cn(
															"absolute inset-0 z-0 block h-full w-full rounded-lg bg-card"
														)}
														exit={{
															opacity: 0,
															transition: { duration: 0.01, delay: 0.1 },
														}}
														initial={{ opacity: 0 }}
														layoutId="cardHoverEffect"
														transition={{ ease: ["backOut"] }}
													/>
												)}
											</AnimatePresence>
										</FieldLabel>
									))}
								</RadioGroup>
								{fieldState.invalid && (
									<FieldError
										errors={[fieldState.error]}
										id={`${field.name}-error`}
									/>
								)}
							</FieldSet>
						)}
					/>
				)}

				<Controller
					control={form.control}
					name="message"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Message</FieldLabel>
							<Textarea
								{...field}
								aria-describedby={
									fieldState.invalid ? `${field.name}-error` : undefined
								}
								aria-invalid={fieldState.invalid}
								className="min-h-[120px]"
								id={field.name}
								placeholder="Tell us why you’d like to work with us…"
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
				<FieldDescription>
					By filling out this form you agree to the terms in our{" "}
					<Link className="underline" href="/legal/privacy" target="_blank">
						privacy policy.
					</Link>
				</FieldDescription>

				<Button className="relative w-fit" disabled={isPending} type="submit">
					{isPending ? "Submitting..." : "Submit Application"} <IconMessage />
				</Button>
			</FieldGroup>
		</form>
	);
};
