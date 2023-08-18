import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TableService } from "./tables.service";

@Controller('tables')
export class TableController{

    constructor(private readonly tableService:TableService){}

    @Get('getAllTables')
    getAllTables(){
        return this.tableService.getAllTables();
    }

    @Post('getTable/:id')
    getTable(@Param('id') id:string){
        return this.tableService.getTable(id);
    }

    @Post('createTable')
    createTable(@Body() tableName:string){
        return this.tableService.newTable(tableName)
    }

    @Post('deleteTable/:id')
    deleteTable(@Param('id') id:string){
        return this.tableService.deleteTable(id)
    }
}