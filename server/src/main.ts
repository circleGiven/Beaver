import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {setSwagger} from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  setSwagger(app);
  await app.listen(3000);
}
bootstrap();
