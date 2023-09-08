import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class MenuImage{
    @Prop()
    fieldname: string;

    @Prop()
    originalname: string;

    @Prop()
    encoding:string;

    @Prop()
    mimetype: string;

    @Prop()
    buffer:Buffer;

    @Prop()
    size: number;
}

export type MenuImageDocument=HydratedDocument<MenuImage>
export const MenuImageSchema=SchemaFactory.createForClass(MenuImage)