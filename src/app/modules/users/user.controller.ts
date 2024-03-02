import { RequestHandler } from 'express'
import usersService from './user.service'
import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  // req - validation
  const createUserZodSchema = z.object({
    body: z.object({
      role: z.string({
        required_error: 'Role must be provided. it required',
      }),
      password: z.string().optional(),
    }),
  })
  await createUserZodSchema.parseAsync(req)

  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export default {
  createUser,
}
