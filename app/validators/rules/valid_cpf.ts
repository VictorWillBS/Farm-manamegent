import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

async function validCpf(value: unknown, options: string[] = [], field: FieldContext) {
  if (typeof value !== 'string') {
    return
  }

  if (!validateCpf(value)) {
    return field.report('The {{ field }} is not a valid CPF', 'validCpf', field)
  }
}

export const validCpfRule = vine.createRule(validCpf)

function validateCpf(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, '')

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false

  const calcCheckDigit = (base: string, factor: number) => {
    let total = 0
    for (const digit of base) {
      total += Number.parseInt(digit) * factor--
    }
    const remainder = total % 11
    return remainder < 2 ? 0 : 11 - remainder
  }

  const base = cpf.slice(0, 9)
  const firstCheckDigit = calcCheckDigit(base, 10)
  const secondCheckDigit = calcCheckDigit(base + firstCheckDigit, 11)

  return cpf === base + firstCheckDigit + secondCheckDigit
}
