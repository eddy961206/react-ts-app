import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';


const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim()) {
            const newTask: Todo = {
                id: Date.now(),
                title: newTodo,
                completed: false,
            };
            setTodos([...todos, newTask]);
            setNewTodo(''); // 입력필드 초기화
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type='text'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='새 할 일 입력'
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList