import { Controller, Param, Get, Post, Body, Patch, Delete, Query } from '@nestjs/common';

@Controller('todos')
export class TodosController {

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
        return []
    }

    @Get('completed')
    findAllCompleted() {
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() 
    create(@Body() todo: {}) {
        return todo
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() todoUpdate: {}) {
        return { id, ...todoUpdate}
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return { id }
    }

}


//npm run start:dev