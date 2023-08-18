import { Module } from "@nestjs/common";
import { TableController } from "./tables.controller";
import { TableService } from "./tables.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Table, TableSchema } from './table.schema';
import { ConfigService } from "@nestjs/config";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Table.name,schema:TableSchema}]),
        MongooseModule.forRootAsync({
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>({
                uri:configService.get<string>('mongodb_table_url')
            })
        })
    ],
    controllers:[TableController],
    providers:[TableService],
})

export class TableModule{}