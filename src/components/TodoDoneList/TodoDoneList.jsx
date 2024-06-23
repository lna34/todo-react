import TodoItemDone from '../TodoItemDone/TodoItemDone';
import styles from './TodoDoneList.module.css';

export default function TodoDoneList({ todos }) {
  return (
    <div className={styles.todoDoneList}>
      <h2>Mes tâches effectuées</h2>
      {todos
        .filter((t) => t.done)
        .map((item) => (
          <TodoItemDone key={item.id} todo={item} />
        ))}
    </div>
  );
}
