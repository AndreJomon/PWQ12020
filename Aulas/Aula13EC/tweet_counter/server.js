"use strict";

const express = require('express');
const http = require('http');
const tweetCounts = require('./tweet_counter.js');

let app = express();

app.use('/', express.static(__dirname + '/static'));

app.get('/counts.json', (req, res) => {
    res.json(tweetCounts);
});

http.createServer(app).listen(3000);