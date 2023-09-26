
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './menu/menu.module';
import { ConsumerModule } from './consumers/consumers.module';
import { TableModule } from './tables/tables.module';
import { OrderModule } from './orders/orders.module';
import { MenuImageModule } from './menuImages/menuImages.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[config]
    }),
    
    MenuModule,
    ConsumerModule,
    TableModule,
    OrderModule,
    MenuImageModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
