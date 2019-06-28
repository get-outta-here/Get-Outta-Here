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
    });


   
    });
});