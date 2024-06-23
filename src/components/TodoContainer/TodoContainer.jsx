import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoDoneList from '../TodoDoneList/TodoDoneList';
export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoDoneList todos={todos} />
    </>
  );
}
