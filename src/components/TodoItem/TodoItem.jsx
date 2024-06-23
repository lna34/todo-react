import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './TodoItem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
  function removeTodo(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div className={styles.todoItemContainer}>
      <h3 className={styles.todoItem}>{item.value}</h3>
      <button className={styles.todoComplete}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button onClick={() => removeTodo(item)} className={styles.todoDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
