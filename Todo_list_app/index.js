const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory to-do list
let todos = [];
let currentId = 1;

// GET /todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST /todos
app.post('/todos', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: currentId++, title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// DELETE /todos/{id}
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
