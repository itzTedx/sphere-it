"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLabelAsterisk } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { LoadingSwap } from "@/components/ui/loading-swap";

import { IconBuilding } from "@/assets/icons/building";
import { IconEmail } from "@/assets/icons/email";
import { IconPhone } from "@/assets/icons/phone";
import { IconUser } from "@/assets/icons/user";

import type { AiMaturityUserInfoType } from "@/modules/form/validators/ai-maturity-schema";

interface UserInfoFormProps {
  onSubmit: () => void;
  isSubmitting?: boolean;
  children?: React.ReactNode;
}

export function UserInfoForm({ onSubmit, isSubmitting = false, children }: UserInfoFormProps) {
  const { control, handleSubmit } = useFormContext<AiMaturityUserInfoType>();

  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-2 p-4">
        <CardTitle className="text-lg text-primary-700 xl:text-title-5">Get Your Results</CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter your details to receive your AI maturity assessment results and detailed report.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel aria-invalid={fieldState.invalid} htmlFor={field.name}>
                    Name <FieldLabelAsterisk />
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      placeholder="Your full name"
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

            <div className="grid gap-6 md:grid-cols-2">
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel aria-invalid={fieldState.invalid} htmlFor={field.name}>
                      Email <FieldLabelAsterisk />
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="your.email@company.com"
                        type="email"
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
                control={control}
                name="phone"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        placeholder="+971 56 789 4321"
                        type="tel"
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
              control={control}
              name="company"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel aria-invalid={fieldState.invalid} htmlFor={field.name}>
                    Company Name <FieldLabelAsterisk />
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      placeholder="Your company name"
                      {...field}
                      aria-describedby={fieldState.invalid ? `${field.name}-error` : undefined}
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                    />
                    <InputGroupAddon>
                      <IconBuilding />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} id={`${field.name}-error`} />}
                </Field>
              )}
            />
            <div className="flex items-center gap-3">
              {children}

              <Button className="w-full flex-1" disabled={isSubmitting} type="submit">
                <LoadingSwap isLoading={isSubmitting}>View My Results</LoadingSwap>
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
