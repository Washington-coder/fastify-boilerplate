import { describe, expect, it } from 'vitest'
import { parseEnv } from './env'

const required = {
  DATABASE_URL: 'postgres://postgres:postgres@localhost:5432/fastify_boilerplate',
  POSTGRES_USER: 'postgres',
  POSTGRES_PASSWORD: 'postgres',
}

describe('parseEnv - NODE_ENV', () => {
  it('uses development as the default when NODE_ENV is not informed', () => {
    const result = parseEnv(required)

    expect(result.success).toBe(true)
    expect(result.data?.NODE_ENV).toBe('development')
  })

  it.each(['development', 'test', 'production'])(
    'accepts "%s" as a valid NODE_ENV value',
    (nodeEnv) => {
      const result = parseEnv({ ...required, NODE_ENV: nodeEnv })

      expect(result.success).toBe(true)
      expect(result.data?.NODE_ENV).toBe(nodeEnv)
    },
  )

  it('rejects an invalid NODE_ENV value', () => {
    const result = parseEnv({ ...required, NODE_ENV: 'staging' })

    expect(result.success).toBe(false)
  })
})

describe('parseEnv - PORT', () => {
  it('uses 3333 as the default when PORT is not informed', () => {
    const result = parseEnv(required)

    expect(result.success).toBe(true)
    expect(result.data?.PORT).toBe(3333)
  })

  it('parses a valid port', () => {
    const result = parseEnv({ ...required, PORT: '4000' })

    expect(result.success).toBe(true)
    expect(result.data?.PORT).toBe(4000)
  })

  it('rejects an invalid port', () => {
    const result = parseEnv({ ...required, PORT: 'abc' })

    expect(result.success).toBe(false)
  })
})

describe('parseEnv - DATABASE_URL', () => {
  it('accepts a valid PostgreSQL connection string', () => {
    const result = parseEnv({
      ...required,
      DATABASE_URL: 'postgresql://admin:secret@db.example.com:5433/app',
    })

    expect(result.success).toBe(true)
    expect(result.data?.DATABASE_URL).toBe('postgresql://admin:secret@db.example.com:5433/app')
  })

  it('rejects an empty DATABASE_URL', () => {
    const result = parseEnv({ ...required, DATABASE_URL: '' })

    expect(result.success).toBe(false)
  })

  it('rejects a string that is not a PostgreSQL URL', () => {
    const result = parseEnv({ ...required, DATABASE_URL: 'http://localhost:5432/db' })

    expect(result.success).toBe(false)
  })

  it('rejects a URL without password', () => {
    const result = parseEnv({ ...required, DATABASE_URL: 'postgres://postgres@localhost:5432/db' })

    expect(result.success).toBe(false)
  })

  it('rejects a URL without database name', () => {
    const result = parseEnv({ ...required, DATABASE_URL: 'postgres://postgres:postgres@localhost' })

    expect(result.success).toBe(false)
  })
})

describe('parseEnv - POSTGRES_USER', () => {
  it('accepts a non-empty POSTGRES_USER', () => {
    const result = parseEnv({ ...required, POSTGRES_USER: 'admin' })

    expect(result.success).toBe(true)
    expect(result.data?.POSTGRES_USER).toBe('admin')
  })

  it('rejects an empty POSTGRES_USER', () => {
    const result = parseEnv({ ...required, POSTGRES_USER: '' })

    expect(result.success).toBe(false)
  })

  it('rejects a missing POSTGRES_USER', () => {
    const result = parseEnv({ ...required, POSTGRES_USER: undefined })

    expect(result.success).toBe(false)
  })
})

describe('parseEnv - POSTGRES_PASSWORD', () => {
  it('accepts a non-empty POSTGRES_PASSWORD', () => {
    const result = parseEnv({ ...required, POSTGRES_PASSWORD: 'secret' })

    expect(result.success).toBe(true)
    expect(result.data?.POSTGRES_PASSWORD).toBe('secret')
  })

  it('rejects an empty POSTGRES_PASSWORD', () => {
    const result = parseEnv({ ...required, POSTGRES_PASSWORD: '' })

    expect(result.success).toBe(false)
  })

  it('rejects a missing POSTGRES_PASSWORD', () => {
    const result = parseEnv({ ...required, POSTGRES_PASSWORD: undefined })

    expect(result.success).toBe(false)
  })
})
