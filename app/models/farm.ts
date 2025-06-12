import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Farmer from './farmer.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare city: string

  @column()
  declare state: string

  @column()
  declare total_area: number

  @column()
  declare cultivable_area: number

  @column()
  declare vegetation_area: number

  @column()
  declare farmer_id: number

  @belongsTo(() => Farmer, { foreignKey: 'farmer_id' })
  declare farmer: BelongsTo<typeof Farmer>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
