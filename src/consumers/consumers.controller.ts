import { Controller, Get } from "@nestjs/common";
import { ConsumerService } from "./consumers.service";

@Controller('consumer')
export class ConsumerController{
    constructor(private readonly consumerService:ConsumerService){}

    @Get('getAllConsumer')
    getAllMenu(){
        return this.consumerService.getAllConsumers();
    }
}