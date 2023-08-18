import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MenuItemDocument, MenuItem } from './menuItem.schema';
import { Model } from 'mongoose';



@Injectable()
export class MenuService{
    constructor(@InjectModel(MenuItem.name) private menuItem:Model<MenuItemDocument>){}
    
    async getAllMenu(){
        return await this.menuItem.find();
    }

    async newMenuItem(menuItemInformations){
        const newMenuItem=new this.menuItem(menuItemInformations)
        return await newMenuItem.save();
    }
    
    

}