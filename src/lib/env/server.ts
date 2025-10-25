import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    DB_FILE_NAME: z.url(),
  },
  runtimeEnv: process.env,
});
