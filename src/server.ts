import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function mainBootstrap() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
    console.log('Database is connected')
  } catch (err) {
    console.log('Failed to connect Database', err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
mainBootstrap()
