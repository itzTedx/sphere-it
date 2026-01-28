import "server-only";

import type { ReactElement } from "react";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";

import { env } from "../env/server";

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
	port: Number(env.SMTP_PORT),
	secure: env.SMTP_PORT === "465",
	...(transporterAuth ?? {}),
});

type SendEmailOptions = (
	| {
			email?: string;
			subject: string;
			react: ReactElement;
			text?: string;
	  }
	| {
			email?: string;
			subject: string;
			text: string;
	  }
) & {
	attachments?: Array<{
		filename: string;
		content: Buffer | string;
		contentType?: string;
	}>;
};

export const sendEmail = async (options: SendEmailOptions) => {
	const { email, subject, text, attachments } = options;
	const react = "react" in options ? options.react : undefined;

	return await transporter.sendMail({
		from: env.SMTP_FROM,
		to: env.RECEIVER_EMAIL,
		replyTo: email,
		subject,
		text,
		html: react ? await render(react) : undefined,
		attachments,
	});
};
