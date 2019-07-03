$(document).ready(function () {
  $(document).foundation();
  // var now = moment().format('MMMM Do YYYY, h:mm:ss a');
  //  console.log(now);
  //  $(".currentTime").text(now);

  $("#zip-butt").on("click", function (event) {
    $("#display-weather").empty();
    var location = $("#zip-input").val().trim();
    event.preventDefault();
    console.log(location);

    // This is our API key. Add your own API key between the ""
    var APIKey = "w88ukDdKbzSsjPAOTOKqRdMWoACnCG55";

    // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" 
    // + zip + ",us&units=imperial&appid=" + APIKey;

    // querys the Accuweather Locations API with a text string of the location
    var queryLocations = "https://dataservice.accuweather.com/locations/v1/search?apikey=" + APIKey + "&q=" + location;
    console.log(location);




    // We then created an AJAX call
    $.ajax({
      method: 'GET',
      url: queryLocations,

    }).then(function (response) {
      // Create CODE HERE to Log the queryURL
      //console.log(queryURL);
      // Create CODE HERE to log the resulting object



      // console.log(response);
      var results = response;
      console.log(response);

      // assigns the location key from the previous query to a location key variable

      var locationKey = results[0].Key;
      console.log(locationKey);
      // querys the Accuweather Forcast API with the location Key
      var queryForecast = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + APIKey + "&q=" + locationKey;

      $.ajax({
        method: "GET",
        url: queryForecast,

      }).then(function (responseForecast) {
        var $displayForecast = $("<div class='row small-up-1 medium-up-2 large-up-5'>");
        var $rowCol = $("<div class='row column'>");
        var $title = $("<p class='lead'>");
        $title.append("Five Day Forecast for " + results[0].EnglishName + ", " + results[0].AdministrativeArea.EnglishName + ", " + results[0].Country.EnglishName);
        $rowCol.append($title);
        $("#display-weather").append($rowCol);






        // print city name  
        console.log(results[0].EnglishName);


        var fiveDayForecast = responseForecast.DailyForecasts;

        console.log("length: ", fiveDayForecast.length);
        console.log("object: ", responseForecast);
        console.log("day and time: ", fiveDayForecast[0].Date);
        console.log("icon: ", fiveDayForecast[0].Day.Icon);


        for (var i = 0; i < fiveDayForecast.length; i++) {
          console.log("time: ", moment(fiveDayForecast[i].Date));

          var dateTime = moment(fiveDayForecast[i].Date);
          var formatDate = dateTime.format("ddd MMM Do YYYY");
          // console.log(formatDate);

          // console.log(formatDate, "high: ", fiveDayForecast[i].Temperature.Maximum.Value + "°F ", fiveDayForecast[i].Day.IconPhrase);
          var $newCol = $("<div class='column'>");
          var $newOut = $("<div class='callout'>");
          var $newP = $("<p>");
          var $image = $("<img>");
          var $description = $("<p class='lead'>");
          $description.attr("style", "font-size: 13px; color:grey;");
          var $high = $("<p class='subheader'>");
          var $low = $("<p class='subheader'>");
          $newP.html(formatDate);
          $image.attr("src", "assets/images/icons/" + fiveDayForecast[i].Day.Icon + "-s.png");
          $image.attr("style", "margin-left: 25%");
          $description.html(fiveDayForecast[i].Day.IconPhrase);
          $high.html("High: " + fiveDayForecast[i].Temperature.Maximum.Value + "°F");
          $high.attr("style", "color: red;");
          $low.html("Low: " + fiveDayForecast[i].Temperature.Minimum.Value + "°F");
          $low.attr("style", "color: blue;");
          $newOut.append($newP);
          $newOut.append($image);
          $newOut.append($description);
          $newOut.append($high);
          $newOut.append($low);
          $newCol.append($newOut);
          $displayForecast.append($newCol);


    //       $("#display-weather").append(`
    //  <br>
    //   ${formatDate}
    //   <br>
    //   high: ${fiveDayForecast[i].Temperature.Maximum.Value}°F 
    //   <br>
    //   low: ${fiveDayForecast[i].Temperature.Minimum.Value}°F 
    //   <br>
    //   ${fiveDayForecast[i].Day.IconPhrase}
    //   <p>
    //  `);

          $("#display-weather").append($displayForecast);



        }

      })





    });
  });
});