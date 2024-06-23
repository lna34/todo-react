import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoContainer from './components/TodoContainer/TodoContainer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;
