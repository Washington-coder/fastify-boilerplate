import 'dotenv/config'
import { z } from 'zod'

const postgresUrl = /^postgres(ql)?:\/\/[^:/\s]+:[^@/\s]+@[^:/\s]+(:[0-9]{1,5})?\/[^/\s]+$/

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3333),
  DATABASE_URL: z.string().min(1).regex(postgresUrl, { message: 'Must be a valid PostgreSQL URL' }),
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
})

export function parseEnv(env: NodeJS.ProcessEnv = process.env) {
  return envSchema.safeParse(env)
}

const parsed = parseEnv()

if (!parsed.success) {
  console.error('❌ Variáveis de ambiente inválidas:', parsed.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = parsed.data
