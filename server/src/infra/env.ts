import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),

  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_Access_Key_ID: z.string(),
  CLOUDFLARE_Secret_Access_Key: z.string(),
  CLOUDFLARE_BUCKET: z.string(),
  CLOUDFLARE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
