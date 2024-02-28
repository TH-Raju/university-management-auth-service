import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(400).json({ err: err })
  next()
}

export default globalErrorHandler
