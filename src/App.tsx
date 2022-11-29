import React, { useState } from "react";

import Header from "./components/Header/Header";
import TodoPanel from "./components/TodoPanel/TodoPanel";

import styles from "./App.module.css";


const DEFAULT_TODO_TASK = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  { id: 3, name: "task 3", description: "description 3", checked: true },
];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_TASK);

  const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
  };
  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
