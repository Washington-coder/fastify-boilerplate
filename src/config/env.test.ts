import { describe, expect, it } from 'vitest'
import { parseEnv } from './env'

describe('parseEnv', () => {
  it('usa a porta padrão quando PORT não é informada', () => {
    const result = parseEnv({})

    expect(result.success).toBe(true)
    expect(result.data?.PORT).toBe(3333)
  })

  it('faz o parse de uma porta válida', () => {
    const result = parseEnv({ PORT: '4000' })

    expect(result.success).toBe(true)
    expect(result.data?.PORT).toBe(4000)
  })

  it('rejeita valores inválidos de porta', () => {
    const result = parseEnv({ PORT: 'abc' })

    expect(result.success).toBe(false)
  })
})
