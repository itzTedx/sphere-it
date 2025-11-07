import z from "zod";

export const enquirySchema = z.object({
  name: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) return "Name is required";
        return "Name must be a valid string";
      },
    })
    .min(2, { error: "Name must be at least 2 characters" })
    .max(50, { error: "Name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { error: "Name can only contain letters and spaces" })
    .transform((val) => val.trim()) // Trim whitespace and normalize
    .refine((val) => val.length >= 2, { error: "Name must be at least 2 characters after trimming" }),
  email: z
    .email({
      error: "Please enter a valid email address",
      // Use Zod's default email regex which is more strict and Gmail-compatible
      pattern: z.regexes.email,
    })
    .min(2, { error: "Email is required" })
    .max(100, { error: "Email must be less than 100 characters" })
    .toLowerCase(), // Normalize email to lowercase
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,20}$/.test(val), { error: "Please enter a valid phone number" }),
  subject: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 3, { error: "Subject must be at least 3 characters if provided" })
    .refine((val) => !val || val.length <= 100, { error: "Subject must be less than 100 characters" }),
  message: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) return "Message is required";
        return "Message must be a valid string";
      },
    })
    .min(10, { error: "Message must be at least 10 characters" })
    .max(1000, { error: "Message must be less than 1000 characters" })
    .transform((val) => val.trim()) // Trim whitespace
    .refine((val) => val.length >= 10, { error: "Message must be at least 10 characters after trimming" }),
});

export type EnquireType = z.infer<typeof enquirySchema>;

export const quickEnquirySchema = z.object({
  name: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) return "Name is required";
        return "Name must be a valid string";
      },
    })
    .min(2, { error: "Name must be at least 2 characters" })
    .max(50, { error: "Name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { error: "Name can only contain letters and spaces" })
    .transform((val) => val.trim()) // Trim whitespace and normalize
    .refine((val) => val.length >= 2, { error: "Name must be at least 2 characters after trimming" }),
  email: z
    .email({
      error: "Please enter a valid email address",
      // Use Zod's default email regex which is more strict and Gmail-compatible
      pattern: z.regexes.email,
    })
    .min(2, { error: "Email is required" })
    .max(100, { error: "Email must be less than 100 characters" })
    .toLowerCase(), // Normalize email to lowercase
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,20}$/.test(val), { error: "Please enter a valid phone number" }),

  message: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) return "Message is required";
        return "Message must be a valid string";
      },
    })
    .min(10, { error: "Message must be at least 10 characters" })
    .max(1000, { error: "Message must be less than 1000 characters" })
    .transform((val) => val.trim()) // Trim whitespace
    .refine((val) => val.length >= 10, { error: "Message must be at least 10 characters after trimming" }),
});

export type QuickEnquireType = z.infer<typeof quickEnquirySchema>;
