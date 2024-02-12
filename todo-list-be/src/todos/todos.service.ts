import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {

    private todos = [
        {
          id: 1,
          name: "Finish React project",
          status: "ACTIVE",
          details: "Work on integrating Chakra UI components."
        },
        {
          id: 2,
          name: "Grocery shopping",
          status: "COMPLETED",
          details: "Remember to buy milk, eggs, and bread."
        },
        {
          id: 3,
          name: "Read documentation",
          status: "ACTIVE",
          details: "Focus on new features and improvements."
        }
      ]

      findAll(status?: 'ACTIVE' | 'COMPLETED'){
        if(status) {
            return this.todos.filter(todo => todo.status === status)
        }
        return this.todos
      }

      findOne(id: number) {
        const todo = this.todos.find(todo => todo.id === id)

        return todo
      }

      create(todo: CreateTodoDto){
        const todosByHighestId = [...this.todos].sort((a,b) => b.id - a.id)
        const newTodo = {
            id:todosByHighestId[0].id +1,
            ...todo 
        }

        this.todos.push(newTodo)
        return newTodo
      }

      update(id: number, updatedTodo: UpdateTodoDto){
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, ...updatedTodo}
            }
            return todo
        })
            return this.findOne(id)
      }

      delete(id: number) {
        const removedTodo = this.findOne(id)

        this.todos = this.todos.filter(todo => todo.id !== id)

        return removedTodo
      }

}
