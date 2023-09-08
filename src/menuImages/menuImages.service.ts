import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuImage, MenuImageDocument } from './menuImages.schema.';

@Injectable()
export class MenuImageService{

    constructor(@InjectModel(MenuImage.name) private image:Model<MenuImageDocument>){}

    async newImage(imageInformation){
        const newImage=new this.image(imageInformation)
        return await newImage.save()
    }

    async getImages(){
        return await this.image.find()
    }

}