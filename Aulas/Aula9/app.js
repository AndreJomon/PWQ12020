$(function () {
    "use strict";
    $("#searchButton").on("click", function(){
        $("main .photos").empty();
        let searchName = $("#searchText").val();
    
        let url = `http://api.flickr.com/services/feeds/photos_public.gne?tags=${searchName}&format=json&jsoncallback=?`;
    
        //let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dog&format=json&jsoncallback=?";
    
        $.getJSON(url, function(jsonResp) {
            jsonResp.items.forEach(function (item) {
                let $img = $("<img>").hide();
    
                $img.attr("src", item.media.m);
    
                $("main .photos").append($img);
                $img.fadeIn();
            });
        });
    });
});