$( document ).ready(function() {
$(document).foundation();

var keys = {
    placesApi: "AIzaSyBXO25bppW7obhCSe-wix0epBJ1zlffMGA"
}

$('form').on("submit", function (event) {
    event.preventDefault();
    var zip = $("#validatezipcode").val().trim();
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
        $cards = $("<div class='row small-up-1 medium-up-2 large-up-3'>");
        for (var i = 0; i < responses.length; i++) {
            for (var j = 0; j < responses[i].results.length; j++) {
                var $newDiv = $("<div class='column'>");
                var $newCall = $("<div class='callout'>");
                var $name = $("<p class='lead'>");
                var $placeDes = $("<p class='subheader'>");
                var $image = $("<img>");
                $name.html(responses[i].results[j].name);
                $placeDes.html(responses[i].results[j].formatted_address);
                var photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxheight=150&photoreference=" + responses[i].results[j].photos[0].photo_reference + "&key=AIzaSyBXO25bppW7obhCSe-wix0epBJ1zlffMGA"
                $image.attr("src", photoUrl);
                $newCall.prepend($placeDes);
                $newCall.prepend($name);
                $newCall.prepend($image);
                $newDiv.append($newCall);
                $cards.append($newDiv);
                $("#display-places").append($cards);
            }
        }
    });
});
});