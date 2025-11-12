"use client";

import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLabelAsterisk } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import { IconEmail } from "@/assets/icons/email";
import { IconPhone } from "@/assets/icons/phone";
import { IconUser } from "@/assets/icons/user";

import { LinkedInAuthButton } from "../auth/components/linkedin-button";
import { submitDeckDownload } from "./actions/submit-deck-download";
import { DeckType, deckSchema } from "./validators/deck-schema";

interface DeckFormProps {
  onSuccess?: () => void;
}

export const DeckForm = ({ onSuccess }: DeckFormProps = {}) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<DeckType>({
    resolver: zodResolver(deckSchema),
    mode: "onBlur",
  });

  function onSubmit(data: DeckType) {
    startTransition(async () => {
      try {
        const result = await submitDeckDownload(data);

        if (result.success) {
          // Trigger PDF download
          const link = document.createElement("a");
          link.href = "/pdf/intro-deck.pdf";
          link.download = "Sphere IT Global - Intro Deck.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          toast.success("Thank you! Your download has started.", {
            description: "We'll be in touch soon to discuss your needs.",
          });

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

        <Button className="relative" disabled={isPending} type="submit">
          {isPending ? "Submitting..." : "Download Deck"}
        </Button>
        <div className="flex items-center gap-3">
          <div className="-space-x-1 flex flex-1 items-center justify-center">
            <div className="h-0.5 w-full bg-gradient-to-r from-stone-200 to-primary-600" />
            <div className="size-1.5 rounded-full bg-primary-600" />
          </div>
          <span className="font-display text-muted-foreground">or continue with</span>
          <div className="-space-x-1 flex flex-1 items-center justify-center">
            <div className="size-1.5 rounded-full bg-primary-600" />
            <div className="h-0.5 w-full bg-gradient-to-l from-stone-200 to-primary-600" />
          </div>
        </div>
        <LinkedInAuthButton />
      </FieldGroup>
    </form>
  );
};
