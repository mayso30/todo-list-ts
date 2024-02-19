import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FourOFour from './pages/FourOFour';
import TodoList from './pages/TodoList';
import CompletedList from './pages/CompletedList';
import Table from './pages/Table';

const App: React.FC = () => {


  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/completed" element={<CompletedList />} />
            <Route path="/table" element={<Table />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


//rafce 