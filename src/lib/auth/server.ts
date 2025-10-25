import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthMiddleware } from "better-auth/api";

import { db } from "@/server";

import { sendEmail } from "../emails";
import InquiryReact, { InquiryPlainText } from "../emails/templates/quick-enquiry";
import { env } from "../env/server";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  appName: "Sphere IT Global",
  socialProviders: {
    linkedin: {
      clientId: env.LINKEDIN_CLIENT_ID,
      clientSecret: env.LINKEDIN_CLIENT_SECRET,
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          const data = {
            name: user.name,
            email: user.email,
            message: `New Inquiry via LinkedIn - ${user.name} Just Reached Out`,
          };

          console.log("sending email...");
          sendEmail({
            email: user.email,
            subject: "New Enquiry Received - sphereitglobal.com",
            react: InquiryReact(data),
            text: InquiryPlainText(data),
          });
          console.log("Email send successful");
        },
      },
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path.startsWith("/sign-in")) {
        const session = ctx.context.session;
        console.log("new session triggered");
        console.log("session ", ctx.context);

        if (session) {
          const data = {
            name: session.user.name,
            email: session.user.email,
            message: `New Inquiry via LinkedIn - ${session.user.name} Just Reached Out`,
          };

          console.log("sending email...");
          sendEmail({
            email: session?.user.email,
            subject: "New Enquiry Received - sphereitglobal.com",
            react: InquiryReact(data),
            text: InquiryPlainText(data),
          });
          console.log("Email send successful");
        }
      }
    }),
  },
  advanced: {
    cookiePrefix: "sphere-it",
    database: {
      generateId: () => crypto.randomUUID(),
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
});
