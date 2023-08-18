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
}