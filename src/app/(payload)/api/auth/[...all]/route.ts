import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth/server";

// Better Auth handler - separate from PayloadCMS auth
export const { POST, GET } = toNextJsHandler(auth);
