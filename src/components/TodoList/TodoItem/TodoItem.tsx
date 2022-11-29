import React from "react";
import Button from "../../Button/Button";

import styles from "./TodoItem.module.css";

interface TodoItem {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItem> = ({ todo, checkTodo, deleteTodo, selectTodoIdForEdit }) => {
    return (
        <div className={styles.todo_item_container}>
            <div>
                <div aria-hidden
                    style={{
                        opacity: todo.checked ? 0.5 : 1,
                        textDecoration: todo.checked ? 'line-through' : 'none'
                    }}
                    onClick={() => checkTodo(todo.id)}
                    className={styles.todo_item_title}>
                    {todo.name}
                </div>
                <div aria-hidden className={styles.todo_item_description}>
                    {todo.description}
                </div>
            </div>
            <div className={styles.todo_item_button_container}>
                <Button onClick={() => selectTodoIdForEdit(todo.id)} color="orange">EDIT</Button>
                <Button onClick={() => deleteTodo(todo.id)} color="red">DELETE</Button>
            </div>
        </div>
    );
};

export default TodoItem;
