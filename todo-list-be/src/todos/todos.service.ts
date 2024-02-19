import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TodosService {

  private todos = [
    {
      id: 1,
      name: "Plan vacation",
      status: "ACTIVE",
      details: "Research destinations and book accommodations."
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
    },
    {
      id: 4,
      name: "Exercise",
      status: "ACTIVE",
      details: "Go for a jog in the park."
    },
    {
      id: 5,
      name: "Write blog post",
      status: "ACTIVE",
      details: "Cover recent developments in technology."
    },
    {
      id: 6,
      name: "Watch movie",
      status: "ACTIVE",
      details: "Check out the latest releases."
    },
    {
      id: 7,
      name: "Clean the house",
      status: "ACTIVE",
      details: "Sweep and mop the floors, dust the furniture."
    },
    {
      id: 8,
      name: "Attend meeting",
      status: "ACTIVE",
      details: "Discuss project updates and timelines."
    },
    {
      id: 9,
      name: "Learn new skill",
      status: "ACTIVE",
      details: "Take an online course on programming."
    },
  ];
  

      findAll(status?: 'ACTIVE' | 'COMPLETED'){
        if(status) {
            const statusArray = this.todos.filter(todo => todo.status === status)

            if(statusArray.length === 0){
                throw new NotFoundException('todo status not found')
            } else {
                return statusArray
            }
        }
        return this.todos
      }

      findOne(id: number) {
        const todo = this.todos.find(todo => todo.id === id)

        if(!todo) throw new NotFoundException("Todo Not Found")

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
