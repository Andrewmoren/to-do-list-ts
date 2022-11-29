import React, { useState } from "react";

import Header from "./components/Header/Header";
import TodoPanel from "./components/TodoPanel/TodoPanel";

import styles from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./utils";



const App = () => (

  <TodoProvider>
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header />
        <TodoPanel mode="add" />
        <TodoList />
      </div>
    </div>
  </TodoProvider>
);


export default App;
