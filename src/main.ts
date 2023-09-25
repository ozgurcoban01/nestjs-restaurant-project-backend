import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ImATeapotException } from '@nestjs/common';

async function bootstrap() {
  const whitelist = [
    'http://https://restaurant-test-vite.netlify.app/consumer/scanQr',
    'http://https://restaurant-test-vite.netlify.app/consumer/enterName',
    'http://https://restaurant-test-vite.netlify.app/kitchen/admin',
    'http://https://restaurant-test-vite.netlify.app',
    'http://localhost:5173/kitchen/admin',
    'http://localhost:5173/consumer/scanQr',

  ];  
  const app = await NestFactory.create(AppModule, {

    cors: {
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      origin: function (origin, callback) {
        if (!origin) {
          callback(null, true);
          return;
        }
        if (
          whitelist.includes(origin) || // Checks your whitelist
          !!origin.match(/yourdomain\.com$/) // Overall check for your domain
        ) {
          console.log('allowed cors for:', origin);
          callback(null, true);
        } else {
          console.log('blocked cors for:', origin);
          callback(new ImATeapotException('Not allowed by CORS'), false);
        }
      },
    },
  });
  const configService=app.get(ConfigService)
  const PORT=configService.get<string>('port')




  await app.listen(PORT);
}
bootstrap();
