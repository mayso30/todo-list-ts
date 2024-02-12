import { Controller, Param, Get, Post, Body, Patch, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {}

/*
    Add routes below:
    GET /todos
    GET /todos/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
*/

    @Get()
    findAll(@Query('status') status?: 'ACTIVE' | 'COMPLETED') {
        return this.todosService.findAll(status)
    }

    // @Get('completed')
    // findAllCompleted() {
    //     return []
    // }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.todosService.findOne(id)
    }
    
    //Without using DTO
    // @Post() 
    // create(@Body() todo: {name: string, status: 'ACTIVE' | 'COMPLETED', details: string}) {
    //     return this.todosService.create(todo)
    // }

    @Post() 
    create(@Body(ValidationPipe) todo: CreateTodoDto) {
        return this.todosService.create(todo)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) todoUpdate: UpdateTodoDto) {
        return this.todosService.update(id, todoUpdate)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.todosService.delete(id)
    }

}


//npm run start:dev