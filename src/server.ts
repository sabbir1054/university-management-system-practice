import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function mainBootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    // eslint-disable-next-line no-console
    console.log(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Failed to connect database', err)
  }
}

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

mainBootstrap()
