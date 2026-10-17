import fastify from 'fastify'
import { env } from './config/env'

const app = fastify({ logger: true })

app.get('/', async (_request, _reply) => {
  return {
    message: 'Template Fastify running...',
  }
})

const start = async () => {
  try {
    const address = await app.listen({ port: env.PORT, host: '0.0.0.0' })

    app.log.info(`🚀 Servidor rodando em: ${address}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

void start()
