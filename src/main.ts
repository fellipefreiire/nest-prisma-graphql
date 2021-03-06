import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT || 3000, function () {
    console.log(`listening on port ${PORT}`)
  })
}
bootstrap()
