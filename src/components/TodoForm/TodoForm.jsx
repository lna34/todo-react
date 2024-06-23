import { useState } from 'react';
import styles from './TodoForm.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ value: '', id: '', done: false });
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.value.trim() === '') {
      setErrorMessage('Veuillez saisir une donnée');
      return;
    }

    const newTodo = {
      value: todo.value,
      id: uuidv4(),
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTodo({ value: '', id: '', done: false });
    setErrorMessage('');
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.todoInput} ${errorMessage ? styles.inputError : ''}`}
          placeholder="Ajouter une tâche à effectuer..."
          onChange={(e) => {
            setTodo({ value: e.target.value, done: false, id: '' });
            if (e.target.value.trim() !== '') {
              setErrorMessage('');
            }
          }}
          value={todo.value}
          type="text"
        />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
      <button className={styles.todoButton} type="submit">
        Ajouter une tâche
      </button>
    </form>
  );
}
