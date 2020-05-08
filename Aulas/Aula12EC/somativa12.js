"use strict";

let http = require('http');

let server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content': 'text/plain'});
    res.end('11011716 - Andre Aranovich Florentino');
});

server.listen(3000);

console.log('Server is listening on port 3000');