import express, { Application } from 'express'
const app: Application = express()
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users', userRouter)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await Promise.reject(new Error('Unhandled Promise Rejection'))
})

// global error handler
app.use(globalErrorHandler)

export default app
