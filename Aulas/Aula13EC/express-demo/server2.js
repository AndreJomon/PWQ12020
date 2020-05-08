"user strict";

const express = require('express');
const path = require('path');

let app = express();

app.use('/static', express.static(__dirname + path.sep +'client'));

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