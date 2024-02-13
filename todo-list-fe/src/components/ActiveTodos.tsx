import React, { useState } from 'react';
import TodoModal from './TodoModal'; 
import { useDisclosure } from '@passfort/castle';
import { Todo } from '../models';

interface Props {
  todos: Todo[];
  refreshTodos: () => void; 
}

const ActiveTodos: React.FC<Props> = ({ todos, refreshTodos }) => { 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo);
    onOpen();
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => handleTodoClick(todo)} style={{ cursor: 'pointer' }}>
            {todo.name}
          </li>
        ))}
      </ul>
      {selectedTodo && (
        <TodoModal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setSelectedTodo(null);
          }}
          todo={selectedTodo}
          refreshTodos={refreshTodos} 
        />
      )}
    </div>
  );
};

export default ActiveTodos;
