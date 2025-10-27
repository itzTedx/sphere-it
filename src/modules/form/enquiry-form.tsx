"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLabelAsterisk } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";

import { IconEmail } from "@/assets/icons/email";
import { IconPhone } from "@/assets/icons/phone";
import { IconUser } from "@/assets/icons/user";

import { EnquireType, enquirySchema } from "./validators/enquiry-schema";

export const EnquiryForm = () => {
  const form = useForm<EnquireType>({
    resolver: zodResolver(enquirySchema),
  });

  function onSubmit(data: EnquireType) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <form aria-labelledby="enquiry-form-heading" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel aria-invalid={fieldState.invalid} htmlFor={field.name}>
                Name <FieldLabelAsterisk />
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  placeholder="Your Name"
                  {...field}
                  aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
                  aria-invalid={fieldState.invalid}
                  id={field.name}
                />
                <InputGroupAddon>
                  <IconUser />
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} id={`${field.name}-error`} />}
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
                    aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
                    aria-invalid={fieldState.invalid}
                    id={field.name}
                  />
                  <InputGroupAddon>
                    <IconEmail />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} id={`${field.name}-error`} />}
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
                    aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
                    aria-invalid={fieldState.invalid}
                    id={field.name}
                  />
                  <InputGroupAddon>
                    <IconPhone className="size-3.5" />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} id={`${field.name}-error`} />}
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
                aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
                aria-invalid={fieldState.invalid}
                id={field.name}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} id={`${field.name}-error`} />}
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
                aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
                aria-invalid={fieldState.invalid}
                className="min-h-[90px]"
                id={field.name}
                placeholder="Share your questions with our expert…"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} id={`${field.name}-error`} />}
            </Field>
          )}
        />
        <FieldDescription>
          By filling out this form you agree to the terms in our{" "}
          <Link className="underline" href="/legal/privacy" target="_blank">
            privacy policy.
          </Link>
        </FieldDescription>

        <Button className="relative" type="submit">
          Send Message
        </Button>
      </FieldGroup>
    </form>
  );
};
