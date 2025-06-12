import vine from '@vinejs/vine'

export const storeFarmerValidator = vine.compile(
  vine.object({
    cnpj: vine.string().fixedLength(14).optional().requiredIfMissing('cpf'),
    cpf: vine.string().fixedLength(11).optional().requiredIfMissing('cnpj'),
    name: vine.string(),
  })
)

export const updateFarmerValidator = vine.compile(
  vine.object({
    cnpj: vine.string().fixedLength(14).optional(),
    cpf: vine.string().fixedLength(11).optional(),
    name: vine.string().optional(),
  })
)
