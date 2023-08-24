import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { MenuItemModel } from "src/menu/menu.model";

@Schema()
export class Order {

  @Prop()
  consumer_id: string;
  @Prop()
  table_id: string;
  @Prop()
  menu: MenuItemModel[];
  @Prop()
  status: string;
  @Prop()
  price: number;

}

export type OrderDocument=HydratedDocument<Order>
export const OrderSchema=SchemaFactory.createForClass(Order)