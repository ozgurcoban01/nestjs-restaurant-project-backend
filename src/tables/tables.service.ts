import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Table, TableDocument, TableSchema } from "./table.schema";
import { Model } from "mongoose";


@Injectable()
export class TableService{
    constructor(@InjectModel(Table.name) private table:Model<TableDocument>){}

    async getAllTables(){
        return await this.table.find()
    }

    async getTable(id){
        return await this.table.findById(id)
    }

    async newTable(newTableInformation){
        const newTable=new this.table(newTableInformation)
        return await newTable.save()
    }

    async deleteTable(id){
        return await this.table.findByIdAndDelete(id)
    }
}