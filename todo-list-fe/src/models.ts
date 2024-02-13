export interface Todo {
    id: number;
    name: string;
    status: 'ACTIVE' | 'COMPLETED';
    details: string;
  }