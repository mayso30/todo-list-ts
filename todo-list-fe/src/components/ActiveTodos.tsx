import React, { useState } from "react";
import TodoModal from "./TodoModal";
import { useDisclosure, List, ListItem, Text } from "@passfort/castle";
import { Todo } from "../models";

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
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            onClick={() => handleTodoClick(todo)}
            style={{ cursor: "pointer" }}
          >
            <Text>{todo.name}</Text>
          </ListItem>
        ))}
      </List>
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
