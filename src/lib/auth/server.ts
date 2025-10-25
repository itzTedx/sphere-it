import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/server";

import { sendEmail } from "../emails";
import InquiryReact, { InquiryPlainText } from "../emails/templates/quick-enquiry";
import { env } from "../env/server";
import redis from "../redis";

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
          console.log("new session triggered");
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
  // hooks: {
  //   after: createAuthMiddleware(async (ctx) => {
  //     ctx.context.sco
  //     if (ctx.path.startsWith("/sign-in")) {
  //       console.log("after hook");
  //     }
  //   }),
  // },
  secondaryStorage: {
    get: async (key) => {
      const value = await redis.get(`session:${key}`);
      return value ?? null;
    },
    set: async (key, value, ttl) => {
      if (ttl) await redis.setex(`session:${key}`, ttl, value);
      else await redis.set(`session:${key}`, value);
    },
    delete: async (key) => {
      await redis.del(`session:${key}`);
    },
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
