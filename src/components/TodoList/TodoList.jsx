import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos }) {
  return (
    <div className={styles.todoList}>
      <h2>Mes tâches en cours</h2>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
