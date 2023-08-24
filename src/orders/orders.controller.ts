import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderService } from './order.service';
import { MenuItemModel } from "src/menu/menu.model";
import { OrderModel } from "./order.model";

@Controller('order')
export class OrderController{
    constructor(private readonly orderService: OrderService) {}

    @Get('getAllOrders')
    getAllOrders(){
        return this.orderService.getAllOrders()
    }

    @Post('createNewOrder')
    createNewOrder(@Body() orderItemInformation:OrderModel){
        return this.orderService.createNewOrder(orderItemInformation)
    }

    @Post('deleteOrder/:id')
    deleteOrder(@Param('id') id:string){
        return this.orderService.deleteOrder(id)
    }

    @Post('changeOrder/:id')
    changeOrder(@Param('id') id:string,@Body() orderItemInformation:OrderModel){
        return this.orderService.changeOrder(id,orderItemInformation)
    }
}