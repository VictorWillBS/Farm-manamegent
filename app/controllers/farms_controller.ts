import Farm from '#models/farm'
import { storeFarmValidator, updateFarmValidator } from '#validators/farm'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class FarmsController {
  async index() {
    const farms = await Farm.all()
    return farms
  }

  async store({ request }: HttpContext) {
    const data = request.all()
    const payload = await storeFarmValidator.validate(data)

    return Farm.create(payload)
  }

  async show({ params }: HttpContext) {
    const farm = await Farm.findOrFail(params.id)

    return farm
  }

  async update({ params, request }: HttpContext) {
    const farm = await Farm.findOrFail(params.id)
    const data = request.all()
    const payload = await updateFarmValidator.validate(data)

    return farm?.merge(payload).save()
  }

  async destroy({ params, response }: HttpContext) {
    const farmer = await Farm.findOrFail(params.id)
    await farmer.delete()

    return response.ok({ message: `farm ${farmer.id} deleted sucessfully` })
  }
}
