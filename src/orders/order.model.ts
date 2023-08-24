import { MenuItem } from "src/menu/menuItem.schema";

export class OrderModel{
    consumer_id:string;
    table_id:string;
    menu:MenuItem[];
    status:string;
    price:number;
}