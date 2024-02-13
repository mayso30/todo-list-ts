import React, { useState, useEffect } from 'react';
import { Modal, Button, FormControl, FormLabel, Input, FormControls } from '@passfort/castle';
import axios from 'axios';
import { Todo } from '../models';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo;
  refreshTodos: () => void; 
}

const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose, todo, refreshTodos }) => {
  const [name, setName] = useState(todo.name);
  const [details, setDetails] = useState(todo.details);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (isOpen) {
      setName(todo.name);
      setDetails(todo.details);
    }
  }, [todo, isOpen]);

  const handleUpdate = async () => {
    try {
      await axios.patch(`${API}/todos/${todo.id}`, { name, details, status: todo.status });
      refreshTodos(); 
      onClose(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/todos/${todo.id}`);
      refreshTodos(); 
      onClose(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal
      title="Todo Details"
      isOpen={isOpen}
      onClose={onClose}
      renderFooter={() => (
        <>
          <Button label="Delete" type="negative" onClick={handleDelete} />
          <Button label="Save Changes" type="primary" onClick={handleUpdate} />
        </>
      )}
    >
      <FormControls>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Details</FormLabel>
          <Input value={details} onChange={(e) => setDetails(e.target.value)} />
        </FormControl>
      </FormControls>
    </Modal>
  );
};

export default TodoModal;

