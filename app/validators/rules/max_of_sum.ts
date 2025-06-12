import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

async function maxOfSum(value: unknown, options: string[], field: FieldContext) {
  if (typeof value !== 'number') {
    return
  }

  const sum = options.reduce((acc, val) => acc + field.data[val], 0)

  if (value < sum) {
    return field.report(
      'The {{ field }} field must be greater than the sum of the other fields',
      'max_of_sum',
      field
    )
  }
}

export const maxOfSumRule = vine.createRule(maxOfSum)
