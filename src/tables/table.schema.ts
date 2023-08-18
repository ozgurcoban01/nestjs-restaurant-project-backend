import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Table{
    @Prop()
    name:string;
}
export type TableDocument=HydratedDocument<Table>;
export const TableSchema=SchemaFactory.createForClass(Table)