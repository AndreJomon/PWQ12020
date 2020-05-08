"use strict";

const main = () => {

    let updateCounts = (counts) => {
        $('#awesome').text(counts.awesome);
        $('#cool').text(counts.cool);
        $('#android').text(counts.android);
        $('#iphone').text(counts.iphone);
        $('#web-app').text(counts.webApp);
        $('#ipad').text(counts.ipad);
        $('#media').text(counts.media);
        $('#web-client').text(counts.webClient);
        $('#tweetdeck').text(counts.tweetdeck);
    }

    setInterval(() => {
        $.getJSON('http://localhost:3000/counts.json', updateCounts)
    }, 3000);
};

$(document).ready(main);