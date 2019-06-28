$(document).ready(function () {

    var keys = {
        placesApi: "AIzaSyBe_wSwxi8DiMJ4g5ClD0ItuTGWWWxcLlg"
    }

    $("#zip-code").on("click", function (event) {
        var zip = $("#zip-input").val().trim();
        event.preventDefault();
        console.log(zip);
        $("#display-places").empty();

        function queryPlaces(searchType, zip) {
            var queryString = $.param({
                key: keys.placesApi,
                query: searchType + " in " + zip,
                fields: "photos,formatted_address,name,rating,opening_hours,geometry"
            });
            var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?" + queryString;
            return $.ajax({
                method: "GET",
                url: queryUrl
            });
        }
        var requests = [];
        requests.push(queryPlaces("attraction", zip));
        requests.push(queryPlaces("restaurant", zip));
        var doAllRequests = Promise.all(requests);
    
        doAllRequests.then(function (responses) {
            console.log(responses);
            for (var i = 0; i < responses.length; i++) {
                for (var j = 0; j < responses[i].results.length; j++) {
                    var $newDiv = $("<div>");
                    var $placePic = $("<p>");
                    var $image = $("<img>");
                    $placePic.html(responses[i].results[j].formatted_address);
                    var photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxheight=150&photoreference=" + responses[i].results[j].photos[0].photo_reference + "&key=AIzaSyBe_wSwxi8DiMJ4g5ClD0ItuTGWWWxcLlg"
                    $image.attr("src",photoUrl)
                    $newDiv.append($placePic);
                    $newDiv.append($image);
                    $("#display-places").append($newDiv);
                }
            }
        });
    });
});