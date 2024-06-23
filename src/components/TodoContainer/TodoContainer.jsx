import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
