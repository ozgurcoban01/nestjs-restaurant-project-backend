import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from "./order.schema";
import { OrderController } from "./orders.controller";
import { OrderService } from "./order.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Order.name, schema:OrderSchema}]),
        MongooseModule.forRootAsync({
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>({
              uri:configService.get<string>('mongodb_order_url'),
            })
          })
    ],
    controllers:[OrderController],
    providers:[OrderService],
})

export class OrderModule {}