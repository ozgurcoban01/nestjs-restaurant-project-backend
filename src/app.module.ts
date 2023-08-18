
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[config]
    }),
    MongooseModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        uri:configService.get<string>('mongodb_menu_url'),
      })
    }),
    MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
