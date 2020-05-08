"use strict";

const main = () => {

    let updateCounts = (counts) => {
        $('#awesome').text(counts.awesome);
        $('#cool').text(counts.cool);
    }

    setInterval(() => {
        $.getJSON('http://localhost:3000/counts.json', updateCounts)
    }, 3000);
};

$(document).ready(main);