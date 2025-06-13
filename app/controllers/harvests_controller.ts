import farmer from '#models/farmer'
import Harvest from '#models/harvest'
import { storeHarvestValidator, updateHarvestValidator } from '#validators/harvest'
import { HttpContext } from '@adonisjs/core/http'

export default class HarvestsController {
  async index() {
    const harvests = await Harvest.all()

    return harvests
  }

  async store({ request }: HttpContext) {
    const data = request.all()
    const payload = await storeHarvestValidator.validate(data)

    return Harvest.create(payload)
  }

  async show({ params }: HttpContext) {
    const harvest = await Harvest.findOrFail(params.id)

    return harvest
  }

  async update({ params, request }: HttpContext) {
    const harvest = await Harvest.findOrFail(params.id)
    const data = request.all()
    const payload = await updateHarvestValidator.validate(data)

    return harvest?.merge(payload).save()
  }

  async destroy({ params, response }: HttpContext) {
    const harvest = await Harvest.findOrFail(params.id)
    await harvest.delete()

    return response.ok({ message: `farm ${harvest.id} deleted sucessfully` })
  }
}
