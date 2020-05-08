"use strict";

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World!");
});

server.listen(3000);

console.log('Server running on port 3000');