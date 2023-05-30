import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from '../src/app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/users/', userRouter)

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running')
})

export default app
