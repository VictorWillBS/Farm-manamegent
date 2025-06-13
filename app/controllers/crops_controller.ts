import Crop from '#models/crop'
import { storeCropValidator, updateCropValidator } from '#validators/crop'
import type { HttpContext } from '@adonisjs/core/http'

export default class CropsController {
  async index({}: HttpContext) {
    const crops = Crop.all()

    return crops
  }

  async store({ request }: HttpContext) {
    const data = request.all()
    const payload = await storeCropValidator.validate(data)

    return await Crop.create(payload)
  }

  async show({ params }: HttpContext) {
    const crop = await Crop.findOrFail(params.id)

    return crop
  }

  async update({ params, request }: HttpContext) {
    const crop = await Crop.findOrFail(params.id)
    const data = request.all()
    const payload = await updateCropValidator.validate(data)

    return await crop?.merge(payload).save()
  }

  async destroy({ params, response }: HttpContext) {
    const crop = await Crop.findOrFail(params.id)
    await crop.delete()

    return response.ok({ message: `farm ${crop.id} deleted sucessfully` })
  }
}
