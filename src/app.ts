import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import userRouter from './app/modules/users/users.route'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Server working successfully')
})

export default app
