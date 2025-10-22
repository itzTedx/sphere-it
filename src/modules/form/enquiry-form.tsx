"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLabelAsterisk } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";

import { IconEmail } from "@/assets/icons/email";
import { IconUser } from "@/assets/icons/user";

import { EnquireType, enquirySchema } from "./validators/enquiry-schema";

export const EnquiryForm = () => {
  const form = useForm<EnquireType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(enquirySchema),
  });

  function onSubmit() {
    console.log("Hello");
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Name <FieldLabelAsterisk />
              </FieldLabel>
              <InputGroup>
                <InputGroupInput placeholder="Your Name" {...field} aria-invalid={fieldState.invalid} id={field.name} />
                <InputGroupAddon>
                  <IconUser />
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

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
                  placeholder="We’ll reply here"
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id={field.name}
                />
                <InputGroupAddon>
                  <IconEmail />
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  placeholder="+971 56 789 4321"
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id={field.name}
                />
                <InputGroupAddon>
                  <IconEmail />
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="subject"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  placeholder="What is your message about?"
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id={field.name}
                />
                <InputGroupAddon>
                  <IconEmail />
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="subject"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>

              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                className="min-h-[120px]"
                id="form-rhf-textarea-about"
                placeholder="I'm a software engineer..."
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button>Send Message</Button>
      </FieldGroup>
    </form>
  );
};
