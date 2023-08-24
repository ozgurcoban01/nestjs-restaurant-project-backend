
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './menu/menu.module';
import { ConsumerModule } from './consumers/consumers.module';
import { TableModule } from './tables/tables.module';
<<<<<<< HEAD
import { OrderModule } from './orders/orders.module';
=======
>>>>>>> a1dfc20396f9052ae16443ae11cda08562089f89


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[config]
    }),
    
    MenuModule,
    ConsumerModule,
<<<<<<< HEAD
    TableModule,
    OrderModule
=======
    TableModule
>>>>>>> a1dfc20396f9052ae16443ae11cda08562089f89
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
