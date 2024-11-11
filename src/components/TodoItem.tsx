

import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
    );
};

export default TodoItem;