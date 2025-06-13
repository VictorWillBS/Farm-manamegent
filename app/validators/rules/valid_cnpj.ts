import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

async function validCnpj(value: unknown, options: string[] = [], field: FieldContext) {
  if (typeof value !== 'string') {
    return
  }

  if (!validateCNPJ(value)) {
    return field.report('The {{ field }} is not a valid CPF', 'validCnpj', field)
  }
}

export const validCnpjRule = vine.createRule(validCnpj)

function validateCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/\D/g, '')

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false

  const calcCheckDigit = (base: string, weights: number[]) => {
    const total = base
      .split('')
      .reduce((sum, digit, index) => sum + Number.parseInt(digit) * weights[index], 0)
    const remainder = total % 11
    return remainder < 2 ? 0 : 11 - remainder
  }

  const base = cnpj.slice(0, 12)
  const firstWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const secondWeights = [6, ...firstWeights]

  const firstCheckDigit = calcCheckDigit(base, firstWeights)
  const secondCheckDigit = calcCheckDigit(base + firstCheckDigit, secondWeights)

  return cnpj === base + firstCheckDigit + secondCheckDigit
}
