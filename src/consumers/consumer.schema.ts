import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Consumer{
    @Prop()
    name:string;

    @Prop()
    table_id:string;

}

export type ConsumerDocument=HydratedDocument<Consumer>
export const ConsumerSchema=SchemaFactory.createForClass(Consumer)