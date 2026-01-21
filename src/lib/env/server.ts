import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.url(),

		// LINKEDIN CREDENTIALS
		LINKEDIN_CLIENT_ID: z.string().min(1),
		LINKEDIN_CLIENT_SECRET: z.string().min(1),

		AWS_BUCKET_NAME: z.string(),
		AWS_BUCKET_REGION: z.string(),
		AWS_ACCESS_KEY_SPHERE: z.string(),
		AWS_SECRET_ACCESS_KEY: z.string(),

		// NODEMAILER CONNECTION
		SMTP_HOST: z.string().default("localhost"),
		SMTP_PORT: z.string().default("1025"),
		SMTP_USER: z.string().optional(),
		SMTP_PASS: z.string().optional(),
		SMTP_FROM: z.string(),
		RECEIVER_EMAIL: z.string(),
	},
	experimental__runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
