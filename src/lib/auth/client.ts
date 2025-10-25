import { createAuthClient } from "better-auth/react";

import { env } from "../env/client";

export const authClient = createAuthClient({
  /** The base URL of the server */
  baseURL: env.NEXT_PUBLIC_BASE_URL,
});

export const { signIn, signUp, useSession, signOut } = authClient;
