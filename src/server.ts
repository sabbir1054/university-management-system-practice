import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import logger from './shared/logger'

async function mainBootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)

    logger.info(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      logger.info(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error('Failed to connect database', err)
  }
}

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

mainBootstrap()
