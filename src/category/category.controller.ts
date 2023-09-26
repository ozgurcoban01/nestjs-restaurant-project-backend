import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryModel } from "./category.modul";

@Controller('category')
export class CategoryController{
    constructor(private readonly categoryService:CategoryService){}

    @Get('getAllCategory')
    getAllMenu(){
        return this.categoryService.getAllCategory();
    }

    @Post('createNewCategory')
    createNewCategory(@Body() newCategory:CategoryModel){
        return this.categoryService.createNewCategory(newCategory)
    }

    @Post('deleteCategory/:id')
    deleteCategory(@Param('id') id:string){
        return this.categoryService.deleteCategory(id)
    }
}

