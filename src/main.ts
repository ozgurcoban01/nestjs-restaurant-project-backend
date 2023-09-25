import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)
  const PORT=configService.get<string>('port')
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://restaurant-test-vite.netlify.app',
    credentials: true,
  });
  await app.listen(PORT);
}
bootstrap();
