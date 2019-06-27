$("#zip-code").on("click", function (event) {
    event.preventDefault();
    var zip = $("#zip-input").val().trim();
    console.log(zip); {
        $("#display-places").empty();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + zip + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        var $newGif = $("<div>");
                        var rating = results[i].rating.toUpperCase();
                        var $p = $("<p>").html("Rating: " + rating);
                        var $tvGif = $("<img class='gif'>");
                        $tvGif.attr("src", results[i].images.fixed_height_still.url);
                        $tvGif.attr("data-still", results[i].images.fixed_height_still.url);
                        $tvGif.attr("data-animate", results[i].images.fixed_height.url);
                        $tvGif.attr("data-state", "still");
                        $newGif.append($tvGif);
                        $newGif.append($p);
                        $("#display-places").append($newGif);
                    }
                }
            });
        }
    });
