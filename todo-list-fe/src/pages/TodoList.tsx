import { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
    details: string;
  }

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  return (
    <div>
        
    </div>
  )
};

export default TodoList;
