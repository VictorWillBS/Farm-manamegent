import Farmer from '#models/farmer'
import { storeFarmerValidator, updateFarmerValidator } from '#validators/farmer'
import { HttpContext } from '@adonisjs/core/http'

export default class FarmersConteroller {
  async index() {
    const farmers = await Farmer.all()
    return farmers
  }

  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await storeFarmerValidator.validate(data)
    const farmer = await Farmer.query()
      .where('cnpj', payload.cnpj ?? '')
      .orWhere('cpf', payload.cpf ?? '')
      .first()

    if (farmer) {
      return response.badRequest({ message: 'Farmer already exists' })
    }

    return Farmer.create(payload)
  }

  async show({ params }: HttpContext) {
    const farmer = await Farmer.find(params.id)
    return farmer
  }

  async update({ params, request }: HttpContext) {
    const farmer = await Farmer.findOrFail(params.id)
    const data = request.all()
    const payload = await updateFarmerValidator.validate(data)
    return farmer?.merge(payload).save()
  }

  async destroy({ params, response }: HttpContext) {
    const farmer = await Farmer.findOrFail(params.id)
    await farmer.delete()
    return response.ok({ message: `farmer ${farmer.id} deleted sucessfully` })
  }
}
