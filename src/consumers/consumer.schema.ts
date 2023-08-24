import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Consumer{
    @Prop()
    name:string;

    @Prop()
    table_id:string;

<<<<<<< HEAD
    @Prop()
    order_id:string;
=======
>>>>>>> a1dfc20396f9052ae16443ae11cda08562089f89
}

export type ConsumerDocument=HydratedDocument<Consumer>
export const ConsumerSchema=SchemaFactory.createForClass(Consumer)