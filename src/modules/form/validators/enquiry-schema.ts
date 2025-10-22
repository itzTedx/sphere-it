import z from "zod";

export const enquirySchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string(),
});

export type EnquireType = z.infer<typeof enquirySchema>;
