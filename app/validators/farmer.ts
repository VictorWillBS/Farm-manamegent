import vine from '@vinejs/vine'
import { uniqueRule } from './rules/unique.js'

export const storeFarmerValidator = vine.compile(
  vine.object({
    cnpj: vine
      .string()
      .fixedLength(14)
      .use(uniqueRule({ table: 'farmers', column: 'cnpj' }))
      .optional()
      .requiredIfMissing('cpf'),
    cpf: vine
      .string()
      .fixedLength(11)
      .use(uniqueRule({ table: 'farmers', column: 'cpf' }))
      .optional()
      .requiredIfMissing('cnpj'),
    name: vine.string(),
  })
)

export const updateFarmerValidator = vine.compile(
  vine.object({
    cnpj: vine
      .string()
      .fixedLength(14)
      .use(uniqueRule({ table: 'farmers', column: 'cnpj' }))
      .optional(),
    cpf: vine
      .string()
      .fixedLength(11)
      .use(uniqueRule({ table: 'farmers', column: 'cpf' }))
      .optional(),
    name: vine.string().optional(),
  })
)
