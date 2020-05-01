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

        $("#confirmed").text(fmt(data.Global.TotalConfirmed));
        $("#confirmed-delta").text(fmt(data.Global.NewConfirmed));
        $("#deaths").text(fmt(data.Global.TotalDeaths));
        $("#deaths-delta").text(fmt(data.Global.NewDeaths));
        $("#recovered").text(fmt(data.Global.TotalRecovered));
        $("#recovered-delta").text(fmt(data.Global.NewRecovered));

        $("#last-updated").text(data.Date);

    });

    changeFocusCountry = function() {
        $.getJSON("https://api.covid19api.com/summary", function(data){
            
            let fmt = (n) => Number.parseInt(n).toLocaleString("en-US");
            
            var country = document.getElementById("countrySelected").value;
            
            console.log(country);

            data.Countries.forEach(element => {
                if (element.Country.toLocaleString() == country) {
                    $("#option").text(element.Country);
                    
                    console.log(fmt(element.TotalConfirmed));
                    $("#confirmed").text(fmt(element.TotalConfirmed));
                    $("#confirmed-delta").text(fmt(element.NewConfirmed));
                    $("#deaths").text(fmt(element.TotalDeaths));
                    $("#deaths-delta").text(fmt(element.NewDeaths));
                    $("#recovered").text(fmt(element.TotalRecovered));
                    $("#recovered-delta").text(fmt(element.NewRecovered));
            
                    $("#last-updated").text(data.Date);
                    return;
                }
            });
        });
    };
});