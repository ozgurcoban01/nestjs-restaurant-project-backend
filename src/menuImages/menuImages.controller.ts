import { Controller, Get, Post, UseInterceptors,UploadedFile } from '@nestjs/common';
import { MenuImageService } from './menuImages.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
@Controller('image')
export class MenuImageController{
    constructor(private readonly MenuImage: MenuImageService) {}

    @Get('getAll')
    getAllImages(){
        return this.MenuImage.getImages()
    }

    @Post('post')
    @UseInterceptors(FileInterceptor('image'))
    async uploadFile(@UploadedFile() file:Express.Multer.File){
        console.log(file)
        console.log(file.originalname)
       return this.MenuImage.newImage(file)
    
    }

}
