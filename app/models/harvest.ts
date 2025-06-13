import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Farm from './farm.js'

export default class Harvest extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare plantedAt: DateTime

  @column()
  declare harvestedAt: DateTime

  @column()
  declare farm_id: number

  @belongsTo(() => Farm, { foreignKey: 'farm_id' })
  declare farm: BelongsTo<typeof Farm>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
