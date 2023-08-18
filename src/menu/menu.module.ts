import { Module } from "@nestjs/common";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MenuItem, MenuItemSchema } from "./menuItem.schema";
import { ConfigService } from "@nestjs/config";


@Module({
    imports:[MongooseModule.forFeature([{name:MenuItem.name, schema:MenuItemSchema}]),
    MongooseModule.forRootAsync({
        inject:[ConfigService],
        useFactory:(configService:ConfigService)=>({
          uri:configService.get<string>('mongodb_menu_url'),
        })
      })],
    controllers:[MenuController],
    providers:[MenuService],

})

export class MenuModule {}