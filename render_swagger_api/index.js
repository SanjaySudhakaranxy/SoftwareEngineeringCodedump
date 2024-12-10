const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // We'll create this file next

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET /greeting
app.get('/greeting', (req, res) => {
    res.json({ message: "Hello, World!" });
});

// POST /greeting
app.post('/greeting', (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
