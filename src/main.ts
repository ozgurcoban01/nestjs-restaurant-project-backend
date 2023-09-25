import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
  const PORT=configService.get<string>('port')

  const whitelist = [
    'http://https://restaurant-test-vite.netlify.app/consumer/scanQr',
    'http://https://restaurant-test-vite.netlify.app/consumer/enterName',
    'http://https://restaurant-test-vite.netlify.app/kitchen/admin',
    'http://localhost:5173/kitchen/admin',
    'http://localhost:5173/consumer/scanQr',

  ];

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin:   whitelist,
    credentials: true,
  });
  await app.listen(PORT);
}
bootstrap();
