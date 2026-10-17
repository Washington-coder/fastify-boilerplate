import 'dotenv/config'
import { z } from 'zod'

export const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3333),
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
