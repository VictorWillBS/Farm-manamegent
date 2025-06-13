import vine from '@vinejs/vine'
import { existsRule } from './rules/exists.js'

export const storeCropValidator = vine.compile(
  vine.object({
    product: vine.string(),
    harvests_id: vine.number().use(existsRule({ table: 'harvests', column: 'id' })),
  })
)

export const updateCropValidator = vine.compile(
  vine.object({
    product: vine.string().optional(),
    harvests_id: vine
      .number()
      .use(existsRule({ table: 'harvests', column: 'id' }))
      .optional(),
  })
)
