import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

async function server() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connected Successfully`)

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Failed to connect to Database`, err)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection is detected, we close the server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

server()
