import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "./category.schema";
import { ConfigService } from "@nestjs/config";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Category.name,schema:CategorySchema}]),
        MongooseModule.forRootAsync({
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>({
              uri:configService.get<string>('mongodb_category_url'),
            })
          })
    ],
    controllers:[CategoryController],
    providers:[CategoryService],
})

export class CategoryModule {}