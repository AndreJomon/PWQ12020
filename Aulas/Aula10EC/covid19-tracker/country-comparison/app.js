/*
* API documentation: https://wwww.programmableweb.com/api/coronavirus-data-rest-api-v10
*/

$(function() {
    $.getJSON("https://api.covid19api.com/summary", function(data) {
        let fmt = (n) => Number.parseInt(n).toLocaleString("en-US");

        data.Countries.forEach(element => {

            var option = new Option(element.Country, element.Country);
            $("#countries").append(option);
        });

        var startCountry1 = "United States of America";
        var startCountry2 = "Brazil";
        var startCountry3 = "Italy";

        changeCountry(data, startCountry1, '1');
        changeCountry(data, startCountry2, '2');
        changeCountry(data, startCountry3, '3');

    });

    changeFocusCountry = function(index) {
        $.getJSON("https://api.covid19api.com/summary", function(data){
            
            var country = document.getElementById("countrySelected" + index).value;

            changeCountry(data, country, index);
        });
    };

    // Get data (with the api format), string of a country and string of row index
    changeCountry = function(data, country, index) {
        let fmt = (n) => Number.parseInt(n).toLocaleString("en-US");

        data.Countries.forEach(element => {
            if (element.Country.toLocaleString() == country) {
                console.log(fmt(country));
                $("#option" + index).text(element.Country);
                
                $("#confirmed" + index).text(fmt(element.TotalConfirmed));
                $("#confirmed-delta" + index).text(fmt(element.NewConfirmed));
                $("#deaths" + index).text(fmt(element.TotalDeaths));
                $("#deaths-delta" + index).text(fmt(element.NewDeaths));
                $("#recovered" + index).text(fmt(element.TotalRecovered));
                $("#recovered-delta" + index).text(fmt(element.NewRecovered));
        
                $("#last-updated").text(data.Date);
                return;
            }
        });
    }
});