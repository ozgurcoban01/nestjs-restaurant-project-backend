import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ImATeapotException } from '@nestjs/common';

async function bootstrap() {
  const whitelist = [
    'https://restaurant-test-vite.netlify.app/consumer/scanQr',
    'https://restaurant-test-vite.netlify.app/consumer/enterName',
    'https://restaurant-test-vite.netlify.app/kitchen/admin',
    'https://restaurant-test-vite.netlify.app',
    'http://localhost:5173',
    'http://localhost:5173/kitchen/admin',
    'http://localhost:5173/consumer/scanQr',
    

  ];  
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
  const PORT=configService.get<string>('port')
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: whitelist,
    credentials: true,
  });



  await app.listen(PORT);
}
bootstrap();
