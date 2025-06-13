import vine from '@vinejs/vine'
import { existsRule } from './rules/exists.js'

export const storeHarvestValidator = vine.compile(
  vine.object({
    planted_at: vine.date({ formats: ['iso8601', 'DD/MM/YYYY'] }),
    farm_id: vine.number().use(existsRule({ table: 'farms', column: 'id' })),
  })
)

export const updateHarvestValidator = vine.compile(
  vine.object({
    planted_at: vine.date({ formats: ['iso8601', 'DD/MM/YYYY'] }).optional(),
    farm_id: vine
      .number()
      .optional()
      .use(existsRule({ table: 'farms', column: 'id' })),
  })
)
