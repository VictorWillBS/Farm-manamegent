import vine from '@vinejs/vine'
import { maxOfSumRule } from './rules/max_of_sum.js'
import { existsRule } from './rules/exists.js'

export const storeFarmValidator = vine.compile(
  vine.object({
    name: vine.string(),
    city: vine.string(),
    farmer_id: vine.number().use(existsRule({ table: 'farmers', column: 'id' })),
    state: vine.string(),
    total_area: vine.number().use(maxOfSumRule(['cultivable_area', 'vegetation_area'])),
    cultivable_area: vine.number(),
    vegetation_area: vine.number(),
  })
)

export const updateFarmValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    city: vine.string().optional(),
    farmer_id: vine
      .number()
      .optional()
      .use(existsRule({ table: 'farmers', column: 'id' })),
    state: vine.string().optional(),
    total_area: vine
      .number()
      .optional()
      .use(maxOfSumRule(['cultivable_area', 'vegetation_area'])),
    cultivable_area: vine.number().optional(),
    vegetation_area: vine.number().optional(),
  })
)
