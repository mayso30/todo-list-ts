import { useState, useEffect } from "react";
import axios from "axios";
import { useDisclosure, Button } from '@passfort/castle';
import ActiveTodos from "../components/ActiveTodos";
import NewTodoModal from "../components/NewTodoModal"; 
import { Todo } from '../models';

const TodoList = () => {
  const API = process.env.REACT_APP_API_URL;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const fetchTodos = () => {
    axios.get(`${API}/todos?status=ACTIVE`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.warn("catch", error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Todo List</h2>
      <Button onClick={onOpen} label="New Todo" />
      <ActiveTodos todos={todos} refreshTodos={fetchTodos} />
      <NewTodoModal isOpen={isOpen} onClose={onClose} refreshTodos={fetchTodos} />
    </div>
  );
};

export default TodoList;
