import { cache } from "react";

import { headers } from "next/headers";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

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
      scope: ["openid", "profile", "email"],
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          // console.log("new session triggered", user);

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
    // account: {
    //   create: {
    //     after: async (account) => {
    //       console.log("account: AccountFound", account);

    //       const vanityData = await fetch("https://api.linkedin.com/v2/me?projection=(id,vanityName)", {
    //         headers: {
    //           Authorization: `Bearer ${account?.accessToken}`,
    //         },
    //       }).then((res) => res.json());

    //       console.log("vanityData: ", vanityData);
    //     },
    //   },
    // },
  },
  // hooks: {
  //   after: createAuthMiddleware(async (ctx) => {
  //     if (ctx.path.startsWith("/sign-up")) {
  //       // const newSession = ctx.context.newSession;
  //       // if (newSession) {
  //       //   console.log("new session", newSession);
  //       // }
  //     }
  //   }),
  // },

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

export const getSession = cache(async () => auth.api.getSession({ headers: await headers() }));
export type AuthSession = Awaited<ReturnType<typeof getSession>>;
