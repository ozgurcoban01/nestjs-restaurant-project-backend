import { Module } from "@nestjs/common";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MenuItem, MenuItemSchema } from "./menuItem.schema";


@Module({
    imports:[MongooseModule.forFeature([{name:MenuItem.name, schema:MenuItemSchema}])],
    controllers:[MenuController],
    providers:[MenuService],

})

export class MenuModule {}