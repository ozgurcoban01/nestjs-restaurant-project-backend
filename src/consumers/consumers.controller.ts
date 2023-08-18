import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ConsumerService } from "./consumers.service";
import { ConsumerModel } from "./consumer.modul";

@Controller('consumer')
export class ConsumerController{
    constructor(private readonly consumerService:ConsumerService){}

    @Get('getAllConsumer')
    getAllMenu(){
        return this.consumerService.getAllConsumers();
    }

    @Post('createNewConsumer')
    createNewConsumer(@Body() newConsumer:ConsumerModel){
        return this.consumerService.createNewConsumer(newConsumer)
    }

    @Post('deleteConsumer/:id')
    deleteConsumer(@Param('id') id:string){
        return this.consumerService.deleteConsumer(id)
    }
}