import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "staging", "production"]),
  PORT: z.coerce.number(),

  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),

  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
});

export const env = envSchema.parse(process.env);