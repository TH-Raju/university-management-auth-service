import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connected Successfully`)

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error(`Failed to connect to Database`, err)
  }
}

server()
