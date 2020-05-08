"use strict";

const ntwitter = require('ntwitter');
const credentials = require('./secrets.json');

let twitter = ntwitter(credentials);

let terms = ['awesome', 'cool'];

let counts = {
    awesome: 0,
    cool: 0
};

twitter.stream(
    'statuses/filter', {'track': terms}, 
    stream => {
        stream.on('data', tweet => {
            if (tweet.text.indexOf('awesome') >= 0)
                counts.awesome += 1;
            if (tweet.text.indexOf('cool') >=0)
                counts.cool += 1;
        });
    }
);

module.exports = counts;