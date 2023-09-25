import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ImATeapotException } from '@nestjs/common';

async function bootstrap() {
  const whitelist = [
    'https://restaurant-test-vite.netlify.app',
    'http://localhost:5173',
  ];  
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
  const PORT=configService.get<string>('port')
  app.enableCors({
    allowedHeaders: "*",
    origin: whitelist,
    credentials: true,
  });



  await app.listen(PORT);
}
bootstrap();
