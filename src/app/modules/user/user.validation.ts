import { z } from 'zod'
// req - validation
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role must be provided. it required',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
