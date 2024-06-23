import { useState } from 'react';
import styles from './TodoForm.module.css';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.todoInput}
        placeholder="Ajouter une tâche à effectuer..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      ></input>
      <button className={styles.todoButton} type="submit">
        Ajouter une tâche
      </button>
    </form>
  );
}