import React, { useState } from 'react';
import axios from 'axios';
import { ModalForm, Button, FormControl, FormLabel, Input, FormControls } from '@passfort/castle';

interface NewTodoFormProps {
  isOpen: boolean;
  onClose: () => void;
  refreshTodos: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ isOpen, onClose, refreshTodos }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const API = process.env.REACT_APP_API_URL;

  const addTodo = () => {
    axios.post(`${API}/todos`, { name, status: 'ACTIVE', details })
      .then(() => {
        refreshTodos(); 
        onClose(); 
        setName(''); 
        setDetails('');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setName(''); 
        setDetails('');
      }}
      title="Create New Todo"
      renderFooter={() => (
        <Button label="Create" type="primary" onClick={addTodo} />
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
    </ModalForm>
  );
};

export default NewTodoForm;
