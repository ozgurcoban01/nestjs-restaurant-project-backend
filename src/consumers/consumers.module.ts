import { Module } from "@nestjs/common";
import { ConsumerController } from "./consumers.controller";
import { ConsumerService } from "./consumers.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Consumer, ConsumerSchema } from "./consumer.schema";
import { ConfigService } from "@nestjs/config";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Consumer.name,schema:ConsumerSchema}]),
        MongooseModule.forRootAsync({
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>({
              uri:configService.get<string>('mongodb_consumer_url'),
            })
          })
    ],
    controllers:[ConsumerController],
    providers:[ConsumerService],
})

export class ConsumerModule {}