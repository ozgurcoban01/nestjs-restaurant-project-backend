import { Injectable } from "@nestjs/common";
import { Order, OrderDocument } from "./order.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class OrderService{
    constructor(@InjectModel(Order.name) private order:Model<OrderDocument>){}

    async getAllOrders(){
        return await this.order.find()
    }

    async createNewOrder(orderInformation){
        const newOrder=new this.order(orderInformation)
        return await newOrder.save()
    }

    async deleteOrder(id){

        return await this.order.findByIdAndDelete(id)
    }   



    async changeOrder(id,orderInformation){

        const changeOrder=await this.order.findById(id)
        
        changeOrder.consumer_id=orderInformation.consumer_id;
        
        changeOrder.table_id=orderInformation.table_id;
        
        changeOrder.menu=orderInformation.menu;
        
        changeOrder.status=orderInformation.status;
        
        changeOrder.price=orderInformation.price;
        
        return await changeOrder.save()
    }   
}