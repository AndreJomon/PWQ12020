"user strict";

const express = require('express');

let app = express();

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.get("/goodbye", (req, res) => {
    res.send("Goodbye!");
});

app.get('/', (req, res) => {
    res.send('Hello World! I am talking from Express');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});