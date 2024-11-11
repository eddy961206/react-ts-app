

import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
        </li>
    );
};

export default TodoItem;