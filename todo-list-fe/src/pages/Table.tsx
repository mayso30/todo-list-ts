import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Table, TableHeader, createColumnHelper } from '@passfort/castle'
import { Todo } from "../models";

interface HeaderCellProps {
  column: string;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ column }) => {

  const camelCaseColumnName = column.charAt(0).toUpperCase() + column.slice(1);

  return (
    <th key={column} className="todos-table-cell">
      {camelCaseColumnName}
    </th>
  );
};

interface HeaderProps {
  columns: string[];
}

const Header: React.FC<HeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell column={column} key={column} />
        ))}
      </tr>
    </thead>
  );
};

interface ContentProps {
  entries: Todo[];
  columns: string[];
}

const Content: React.FC<ContentProps> = ({ entries, columns }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column} className="todos-table-cell">
              {entry[column as keyof Todo]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Table: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const columns = ["name", "details", "status"];

  const API = process.env.REACT_APP_API_URL;

  const fetchTodos = () => {
    axios
      .get<Array<Todo>>(`${API}/todos`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.warn("catch", error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='table-container'>
      <table className="todos-table">
        <Header columns={columns} />
        <Content entries={todos} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
