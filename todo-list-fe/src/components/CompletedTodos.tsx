import React, { useState } from "react";
import { Todo } from "../models";
import TodoModal from "./TodoModal";
import { useDisclosure, List, ListItem, Text } from "@passfort/castle";

interface Props {
  todos: Todo[];
  refreshTodos: () => void;
}

const CompletedTodos: React.FC<Props> = ({ todos, refreshTodos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo);
    onOpen();
  };

  return (
    <div className="list">
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

export default CompletedTodos;
