import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Consumer, ConsumerDocument } from "./consumer.schema";
import { Model } from "mongoose";

@Injectable()
export class ConsumerService{
    constructor(@InjectModel(Consumer.name) private consumer:Model<ConsumerDocument>){}

    async getAllConsumers(){
        return await this.consumer.find()
    }

    async createNewConsumer(consumerInformation){
        const newConsumer=new this.consumer(consumerInformation)
        return await newConsumer.save()
    }

    async deleteConsumer(id){

        return await this.consumer.findByIdAndDelete(id)
    }   
}