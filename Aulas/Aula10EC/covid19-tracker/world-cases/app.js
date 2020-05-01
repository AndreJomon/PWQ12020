/*
* API documentation: https://wwww.programmableweb.com/api/coronavirus-data-rest-api-v10
*/

$(function() {
    $.getJSON("https://api.covid19api.com/summary", function(data) {
        let fmt = (n) => Number.parseInt(n).toLocaleString("en-US");
        
        $("#confirmed").text(fmt(data.Global.TotalConfirmed));
        $("#confirmed-delta").text(fmt(data.Global.NewConfirmed));
        $("#deaths").text(fmt(data.Global.TotalDeaths));
        $("#deaths-delta").text(fmt(data.Global.NewDeaths));
        $("#recovered").text(fmt(data.Global.TotalRecovered));
        $("#recovered-delta").text(fmt(data.Global.NewRecovered));

        $("#last-updated").text(data.Date)

    });
});