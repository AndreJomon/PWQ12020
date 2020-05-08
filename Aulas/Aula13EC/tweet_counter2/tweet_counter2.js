"use strict";

const ntwitter = require('ntwitter');
const credentials = require('./secrets.json');

let twitter = ntwitter(credentials);

let terms = ['awesome', 'cool'];

let counts = {
    awesome: 0,
    cool: 0,
    android: 0,
    iphone: 0,
    webApp:0,
    ipad: 0,
    media: 0,
    webClient: 0,
    tweetdeck: 0
};

twitter.stream(
    'statuses/filter', {'track': terms}, 
    stream => {
        stream.on('data', tweet => {
            if (tweet.text.indexOf('awesome') >= 0)
                counts.awesome += 1;
            if (tweet.text.indexOf('cool') >=0)
                counts.cool += 1;
            if (tweet.source.indexOf('Android') >= 0)
                counts.android += 1;
            if (tweet.source.indexOf('iPhone') >= 0)
                counts.iphone += 1;
            if (tweet.source.indexOf('Web App') >= 0)
                counts.webApp += 1;
            if (tweet.source.indexOf('iPad') >= 0)
                counts.ipad += 1;
            if (tweet.source.indexOf('You Media') >= 0)
                counts.media += 1;
            if (tweet.source.indexOf('Web Client') >= 0)
                counts.webClient += 1;
            if (tweet.source.indexOf('TweetDeck') >= 0)
                counts.tweetdeck += 1;
        });
    }
);

module.exports = counts;