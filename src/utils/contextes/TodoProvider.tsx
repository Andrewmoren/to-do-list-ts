import React, { useMemo, useState } from "react";
import { TodoContext } from "./TodoContext";


const DEFAULT_TODO_TASK = [
    { id: 1, name: "task 1", description: "description 1", checked: false },
    { id: 2, name: "task 2", description: "description 2", checked: false },
    { id: 3, name: "task 3", description: "description 3", checked: true },
];

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState(DEFAULT_TODO_TASK);
    const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null);

    const selectTodoIdForEdit = (id: Todo["id"]) => {
        setTodoIdForEdit(id);
    };

    const addTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
        setTodos([
            ...todos,
            { id: todos[todos.length - 1].id + 1, description, name, checked: false },
        ]);
    };

    const checkTodo = (id: Todo["id"]) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, checked: !todo.checked };
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id: Todo["id"]) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const changeTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === todoIdForEdit) {
                    return { ...todo, name, description };
                }
                return todo;
            })
        );
        setTodoIdForEdit(null)
    };

    const value = useMemo(() => ({
        todoIdForEdit,
        todos,
        deleteTodo,
        changeTodo,
        addTodo,
        selectTodoIdForEdit,
        checkTodo
    }), [todoIdForEdit,
        todos,
        deleteTodo,
        changeTodo,
        addTodo,
        selectTodoIdForEdit,
        checkTodo])

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}