import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category,CategoryDocument } from "./category.schema";
import { Model } from "mongoose";

@Injectable()
export class CategoryService{
    constructor(@InjectModel(Category.name) private category:Model<CategoryDocument>){}

    async getAllConsumers(){
        return await this.category.find()
    }

    async createNewConsumer(categoryInformation){
        const newCategory=new this.category(categoryInformation)
        return await newCategory.save()
    }

    async deleteConsumer(id){

        return await this.category.findByIdAndDelete(id)
    }   
}