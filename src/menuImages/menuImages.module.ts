import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { MenuImageController } from "./menuImages.controller";
import { MenuImageService } from "./menuImages.service";
import { MenuImage, MenuImageSchema } from "./menuImages.schema.";



@Module({
    imports:[
        MongooseModule.forFeature([{name:MenuImage.name, schema:MenuImageSchema}]),
        MongooseModule.forRootAsync({
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>({
              uri:configService.get<string>('mongodb_image_url'),
            })
          })
    ],
    controllers:[MenuImageController],
    providers:[MenuImageService],
})

export class MenuImageModule {}