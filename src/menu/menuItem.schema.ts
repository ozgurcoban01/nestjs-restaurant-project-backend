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

    @Prop()
     image_id:string;

     @Prop()
     selected:boolean;
 
     @Prop()
      base64:string;
}

export type MenuItemDocument=HydratedDocument<MenuItem>;

export const MenuItemSchema=SchemaFactory.createForClass(MenuItem)
