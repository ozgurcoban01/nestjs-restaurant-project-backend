import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItemModel } from './menu.model';


@Controller('menu')
export class MenuController{
    constructor(private readonly menuService: MenuService) {}

    @Get('getAllMenu')
    getAllMenu(){
        return this.menuService.getAllMenu()
    }

    @Post('createNewMenuItem')
    newMenuItem(@Body() menuItemInformations:MenuItemModel){
        return this.menuService.newMenuItem(menuItemInformations)
    }
}