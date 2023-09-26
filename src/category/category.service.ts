import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category,CategoryDocument } from "./category.schema";
import { Model } from "mongoose";

@Injectable()
export class CategoryService{
    constructor(@InjectModel(Category.name) private category:Model<CategoryDocument>){}

    async getAllCategory(){
        return await this.category.find()
    }

    async createNewCategory(categoryInformation){
        const newCategory=new this.category(categoryInformation)
        return await newCategory.save()
    }

    async deleteCategory(id){

        return await this.category.findByIdAndDelete(id)
    }   
}