import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema()
export class MenuItem{
    
    @Prop()
    title:string;
    
    @Prop()
    price:number;
    
    @Prop()
    category:string;
}

export type MenuItemDocument=HydratedDocument<MenuItem>;

export const MenuItemSchema=SchemaFactory.createForClass(MenuItem)
