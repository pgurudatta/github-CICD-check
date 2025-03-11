const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

const DB = {
    host: 'localhost',
    user: 'root',
    password: 'AVvEV4Ovf4saFi7UxJTq',
    database: 'testdb'
}


// Insecure API Key (Hardcoded Sensitive Data)
const API_KEY = 'Tr0ub4dor&amp;3';

// Vulnerable Endpoint - SQL Injection Possible
app.get('/user', (req, res) => {
    const userId = req.query.id;
    const query = `SELECT * FROM users WHERE id = '${userId}'`; // Vulnerable to SQL Injection
    res.send('Hello World!')
});

// Insecure Login (No Rate Limiting, Brute Force Possible)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
