import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteTodo from './DeleteTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/todos');
        setTodos(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/todos/${id}`);
        fetchTodos(); // Refresh the list after deletion
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <DeleteTodo id={todo.id} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
