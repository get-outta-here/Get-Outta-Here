$(document).ready(function() {
  $(document).foundation();

  var keys = {
    placesApi: "AIzaSyBXO25bppW7obhCSe-wix0epBJ1zlffMGA"
  };

  $("#zip-butt").on("click", function(event) {
    var zip = $("#zip-input")
      .val()
      .trim();
    event.preventDefault();
    $("#display-places").empty();

    function queryPlaces(searchType, zip) {
      var queryString = $.param({
        key: keys.placesApi,
        query: searchType + " in " + zip,
        fields: "photos,formatted_address,name,rating,opening_hours,geometry"
      });
      var queryUrl =
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?" +
        queryString;
      return $.ajax({
        method: "GET",
        url: queryUrl
      });
    }
    var requests = [];
    requests.push(queryPlaces("attraction", zip));

    var doAllRequests = Promise.all(requests);

    doAllRequests.then(function(responses) {
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
          var photoUrl =
            "https://maps.googleapis.com/maps/api/place/photo?maxheight=150&photoreference=" +
            responses[i].results[j].photos[0].photo_reference +
            "&key=AIzaSyBXO25bppW7obhCSe-wix0epBJ1zlffMGA";
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

    var requests2 = [];
    requests2.push(queryPlaces("restaurant", zip));
    var doAllRequests = Promise.all(requests2);

    doAllRequests.then(function(responses) {
      $cards = $("<div class='row small-up-1 medium-up-2 large-up-3'>");
      for (var i = 0; i < responses.length; i++) {
        for (var j = 0; j < responses[i].results.length; j++) {
          var $newDiv = $("<div class='column'>");
          var $newCall = $("<div class='callout'>");
          var $name = $("<p class='lead'>");
          var $placeDes = $("<p class='subheader'>");
          var $image = $("<img>");
          $name.html(
            responses[i].results[j].name +
              "  <br/> Rating: " +
              responses[i].results[j].rating
          );
          $placeDes.html(responses[i].results[j].formatted_address);
          var photoUrl =
            "https://maps.googleapis.com/maps/api/place/photo?maxheight=150&photoreference=" +
            responses[i].results[j].photos[0].photo_reference +
            "&key=AIzaSyBXO25bppW7obhCSe-wix0epBJ1zlffMGA";
          $image.attr("src", photoUrl);
          $newCall.prepend($placeDes);
          $newCall.prepend($name);
          $newCall.prepend($image);
          $newDiv.append($newCall);
          $cards.append($newDiv);
          $("#display-attractions").append($cards);
        }
      }
    });
  });
});

$("#zip-butt").on("click", function(event) {
  $("#display-weather").empty();
  var location = $("#zip-input")
    .val()
    .trim();
  event.preventDefault();

  // This is our API key. Add your own API key between the ""
  var APIKey = "w88ukDdKbzSsjPAOTOKqRdMWoACnCG55";

  // Here we are building the URL we need to query the database
  // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip="
  // + zip + ",us&units=imperial&appid=" + APIKey;

  // querys the Accuweather Locations API with a text string of the location
  var queryLocations =
    "https://dataservice.accuweather.com/locations/v1/search?apikey=" +
    APIKey +
    "&q=" +
    location;

  // We then created an AJAX call
  $.ajax({
    method: "GET",
    url: queryLocations
  }).then(function(response) {
    // Create CODE HERE to Log the queryURL
    //console.log(queryURL);
    // Create CODE HERE to log the resulting object

    // console.log(response);
    var results = response;

    // assigns the location key from the previous query to a location key variable

    var locationKey = results[0].Key;
    // querys the Accuweather Forcast API with the location Key
    var queryForecast =
      "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      locationKey +
      "?apikey=" +
      APIKey +
      "&q=" +
      locationKey;

    $.ajax({
      method: "GET",
      url: queryForecast
    }).then(function(responseForecast) {
      var $displayForecast = $(
        "<div class='row small-up-1 medium-up-2 large-up-5'>"
      );
      var $rowCol = $("<div class='row column'>");
      var $title = $("<p class='lead'>");
      $title.append(
        "Five Day Forecast for " +
          results[0].EnglishName +
          ", " +
          results[0].AdministrativeArea.EnglishName +
          ", " +
          results[0].Country.EnglishName
      );
      $rowCol.append($title);
      $("#display-weather").append($rowCol);

      // print city name

      var fiveDayForecast = responseForecast.DailyForecasts;

      for (var i = 0; i < fiveDayForecast.length; i++) {
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
        $image.attr(
          "src",
          "assets/media/icons/" + fiveDayForecast[i].Day.Icon + "-s.png"
        );
        $image.attr("style", "margin-left: 25%");
        $description.html(fiveDayForecast[i].Day.IconPhrase);
        $high.html(
          "High: " + fiveDayForecast[i].Temperature.Maximum.Value + "°F"
        );
        $high.attr("style", "color: red;");
        $low.html(
          "Low: " + fiveDayForecast[i].Temperature.Minimum.Value + "°F"
        );
        $low.attr("style", "color: blue;");
        $newOut.append($newP);
        $newOut.append($image);
        $newOut.append($description);
        $newOut.append($high);
        $newOut.append($low);
        $newCol.append($newOut);
        $displayForecast.append($newCol);

        $("#display-weather").append($displayForecast);
      }
    });
  });
});

$(function() {
  $(".search").bind("click", function(event) {
    $(".search-field").toggleClass("expand-search");

    // if the search field is expanded, focus on it
    if ($(".search-field").hasClass("expand-search")) {
      $(".search-field").focus();
    }
  });
});

// Retrieve modal element

var modal = document.getElementById("simpleModal");

// Retrieve open modal element

var modalBtn = document.getElementById("modalBtn");

// Retrieve close modal element

var closeBtn = document.getElementsByClassName("closeBtn");

// Listen for open modal click

modalBtn.addEventListener("click", openModal);

// Listen for close modal click

closeBtn.addEventListener("click", closeModal);

// Listen for outside modal click

window.addEventListener("click", outsideClick);

//Fucntion for openModal

function openModal() {
  modal.style.display = "block";
}

//Fucntion for closeModal

function closeModal() {
  modal.style.display = "none";
}

//Fucntion for openModal

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


function validateZipCode(elementValue){
   var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodePattern.test(elementValue);
}

$("#zip-butt").on("click" , function () {
   console.log("");
   var zipcode = $("#zip-input").val()
   console.log(zipcode);
   var isValidZip = validateZipCode(zipcode)
   console.log(isValidZip)
   if (!isValidZip){
       $("#ziperror").css("display", "inline")
   }
});



// const input = document.querySelectorAll("input");


// function validation(field, regex) {
//     if (regex.test(field.value)) {
//         field.className = 'valid';
//     }
//     else {
//         field.className = 'invalid';
//     }
// }

// const patterns = {
//     fullName: /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/ig,
//     username: /^[a-z\d]{5,12}$/ig,
//     password: /^[\w@-]{8,20}$/ig,
//     email: /^([a-z\d\.-]+)@([a-z\d-]+\.9[a-z]{2,8})(\.[a-z]{2,8})?$/ig,
//     telephone: /^\(?([0-9]{3}\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//     zipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
// };

// inputs.forEach((input) => {
//     input.addEventListener('keyup', (e) => {
//         validation(e.target, patterns[e.target.attributes.name.value]);
//     });
// });









