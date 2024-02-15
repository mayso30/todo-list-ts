import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompletedTodos from "../components/CompletedTodos";
import { Todo } from '../models';

const CompletedList = () => {
  const API = process.env.REACT_APP_API_URL;
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const fetchCompletedTodos = () => {
    axios.get(`${API}/todos?status=COMPLETED`)
      .then((response) => setCompletedTodos(response.data))
      .catch((error) => console.warn("catch", error));
  };

  useEffect(() => {
    fetchCompletedTodos();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Completed Todos</h1>
      <CompletedTodos todos={completedTodos} refreshTodos={fetchCompletedTodos} />
    </div>
  );
};

export default CompletedList;
