import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryModel } from "./category.modul";

@Controller('category')
export class CategoryController{
    constructor(private readonly categoryService:CategoryService){}

    @Get('getAllCategory')
    getAllMenu(){
        return this.categoryService.getAllConsumers();
    }

    @Post('createNewCategory')
    createNewConsumer(@Body() newCategory:CategoryModel){
        return this.categoryService.createNewConsumer(newCategory)
    }

    @Post('deleteCategory/:id')
    deleteConsumer(@Param('id') id:string){
        return this.categoryService.deleteConsumer(id)
    }
}