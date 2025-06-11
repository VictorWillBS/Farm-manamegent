import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fields'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.integer('total_area').notNullable()
      table.integer('cultivable_area').notNullable()
      table.integer('vegetebal_area').notNullable()

      table.integer('farmer_id').unsigned().references('farmers.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
