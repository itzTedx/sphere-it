import { passkey } from "@better-auth/passkey";
import type { BetterAuthOptions } from "better-auth";

import { sendEmail } from "../emails";
import { env } from "../env/server";

export const betterAuthOptions: Partial<BetterAuthOptions> = {
	// Model names are SINGULAR - they get pluralized automatically
	// 'user' becomes 'users', 'session' becomes 'sessions', etc.
	user: {
		additionalFields: {
			role: { type: "string", defaultValue: "user" },
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 30, // 30 days
	},

	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
		sendResetPassword: async ({ user, token }) => {
			try {
				await sendEmail({
					email: user.email,
					subject: "Reset your password",
					text: `Click this link to reset your password: ${env.BASE_URL}/reset-password?token=${token}`,
				});
			} catch (error) {
				console.error("[DEBUG] Failed to send password reset email:", error);
				throw error;
			}
		},
	},
	plugins: [passkey()],
};
