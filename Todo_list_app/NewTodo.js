import React, { useState } from 'react';
import axios from 'axios';

const NewTodo = ({ onTodoAdded }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;

        const response = await axios.post('http://localhost:5000/todos', { title });
        onTodoAdded(response.data);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New To-Do"
            />
            <button
