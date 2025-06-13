import Farm from '#models/farm'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class DashboardController {
  async index({}: HttpContext) {
    const [farms, farmsPerState, productsPerCrop, farmUsage] = await Promise.all([
      Farm.all(),
      this.getFarmsPerState(),
      this.getProductsPerCrop(),
      this.getFarmUsage(),
    ])

    const totalArea = farms.reduce((acc, farm) => acc + farm.total_area, 0)

    return {
      total_farms: farms.length,
      total_area: totalArea,
      analysis: {
        farms_per_states: farmsPerState,
        product_per_crop: productsPerCrop,
        farm_usage: farmUsage,
      },
    }
  }

  private async getFarmsPerState() {
    return db.from('farms').select('state').groupBy('state').count('state as total')
  }

  private async getProductsPerCrop() {
    return db.from('crops').select('product').groupBy('product').count('product as total')
  }

  private async getFarmUsage() {
    return db
      .from('farms')
      .sum('cultivable_area as cultivable_area_total')
      .sum('vegetation_area as vegetation_area_total')
      .first()
  }
}
