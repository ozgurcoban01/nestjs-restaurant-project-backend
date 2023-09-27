import { MenuItem } from "src/menu/menuItem.schema";

export class OrderModel{
    consumer_id:string;
    consumer_name:string;
    table_id:string;
    table_name:string;
    menu:MenuItem[];
    status:string;
    price:number;
}