import type { ReactElement } from "react";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";

import { env } from "../env/server";

const smtpPort = Number(env.SMTP_PORT);
const smtpSecure = smtpPort === 465;

const transporterAuth =
	env.SMTP_USER && env.SMTP_PASS
		? {
				auth: {
					user: env.SMTP_USER,
					pass: env.SMTP_PASS,
				},
			}
		: undefined;

export const transporter = nodemailer.createTransport({
	host: env.SMTP_HOST,
	port: smtpPort,
	secure: smtpSecure,
	requireTLS: !smtpSecure,
	tls: {
		servername: env.SMTP_HOST,
		minVersion: "TLSv1.2",
	},
	...(transporterAuth ?? {}),
	// debug: process.env.NODE_ENV === "development",
	// logger: process.env.NODE_ENV === "development",
});

type SendEmailOptions = (
	| {
			email?: string;
			subject: string;
			react: ReactElement;
			text?: string;
			receiver?: string;
	  }
	| {
			email?: string;
			subject: string;
			text: string;
			receiver?: string;
	  }
) & {
	attachments?: Array<{
		filename: string;
		content: Buffer | string;
		contentType?: string;
	}>;
};

export const sendEmail = async (options: SendEmailOptions) => {
	const { email, subject, text, attachments, receiver } = options;
	const react = "react" in options ? options.react : undefined;

	try {
		const result = await transporter.sendMail({
			from: env.SMTP_USER,
			to: receiver || env.RECEIVER_EMAIL,
			...(email ? { replyTo: email } : {}),
			subject,
			text,
			html: react ? await render(react) : undefined,
			attachments,
		});

		return result;
	} catch (error) {
		console.error("[DEBUG] Email send failed:", error);
		throw error;
	}
};
