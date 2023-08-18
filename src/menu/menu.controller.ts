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

    @Post('deleteMenuItem/:id')
    deleteMenuItem(@Param('id') id:string){
        return this.menuService.deleteMenuItem(id)
    }

    @Post('updateMenuItem/:id')
    updateMenuItem(@Param('id') id:string,@Body() menuItemInformations:MenuItemModel){
        return this.menuService.updateMenuItem(id,menuItemInformations)
    }
}