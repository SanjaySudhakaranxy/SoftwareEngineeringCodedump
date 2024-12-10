const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // We'll create this file next

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// In-memory book store
let books = [];
let currentId = 1;

// GET /books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST /books
app.post('/books', (req, res) => {
    const { title, author, price } = req.body;
    const newBook = { id: currentId++, title, author, price };
    books.push(newBook);
    res.status(201).json(newBook);
});

// GET /books/{id}
app.get('/books/:id', (req, res) => {
    const bookId =
      
