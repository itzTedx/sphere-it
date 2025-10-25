import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    DB_FILE_NAME: z.url(),

    // LINKEDIN CREDENTIALS
    LINKEDIN_CLIENT_ID: z.string().min(1),
    LINKEDIN_CLIENT_SECRET: z.string().min(1),

    // NODEMAILER CONNECTION
    SMTP_HOST: z.string(),
    SMTP_PORT: z.string(),
    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
    SMTP_FROM: z.string(),
    RECEIVER_EMAIL: z.string(),
  },
  runtimeEnv: process.env,
});
