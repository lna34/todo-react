import { useState } from 'react';
import styles from './TodoForm.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ value: '', id: '', done: false });

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      value: todo.value,
      id: uuidv4(),
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTodo({ value: '', id: '', done: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.todoInput}
        placeholder="Ajouter une tâche à effectuer..."
        onChange={(e) =>
          setTodo({ value: e.target.value, done: false, id: '' })
        }
        value={todo.value}
        type="text"
      />
      <button className={styles.todoButton} type="submit">
        Ajouter une tâche
      </button>
    </form>
  );
}
