import React, { useState } from "react";

import styles from "./TodoPanel.module.css";

const DEFAULT_TODO = {
    name: "",
    description: "",
};

const TodoPanel = () => {
    const [todo, setTodo] = useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    return (
        <div className={styles.todo_panel_container}>
            <div className={styles.fields_container}>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div>name</div>
                        <input
                            type="text"
                            id="name"
                            value={todo.name}
                            name="name"
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div>name</div>
                        <input
                            type="text"
                            id="description"
                            value={todo.description}
                            name="description"
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
            <div className={styles.button_container}>
                <button>ADD</button>
            </div>
        </div>
    );
};

export default TodoPanel;
