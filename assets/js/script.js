/* -- Psuedocode -- */

// Get document ready for jQuery

$(document).ready(function() {
  
/* when search button is clicked capture the values chosen
    $(search id).on(click, function() {
      prevent default;
      name <- value.val();
      name <- value.val();
      name <- value.val();
    })
    */
   $("#search-button").on("click", function() {
     event.preventDefault();
     // capture the values chosen from the drop downs
     var streamingService = $("#str-ser-pick").val();
     var tvOrMovie = $("#tv-movie-pick").val();
     var genrePick = $("#genre-pick").val();
     // clear drop down picks after search button is clicked
     $("str-ser-pick").val("");
     $("tv-movie-pick").val("");
     $("genre-pick").val("");
   })
   /*
   getAPIFunction(streamingService);
   getAPIFunction(tvOrMovie);
   getAPIFunction(genrePick);
   */
})

/*
function streamingAvailability() {
  $.ajax ({
    type: "GET",
    url: "aksdalj.com + "  adsfad
    dataType: "json"
    success: function (data) {
      if(varName.idexOf(streamingAvailability) === ?) {
        searchHistory.push(streamingAvailability);
        window.localStroage.setItem("searchHistory", JSON.stringigy(searchHistory))
        listSearch(searchHistory);
      }

      ?

      


      

      var movie1 = $("<div>", {id: "movie1-container" });
      var movie2 = $("<div>", {id: "movie2-container" });
      var movie3 = $("<div>", {id: "movie3-container" });
      var movie4 = $("<div>", {id: "movie4-container" });
      var movie5 = $("<div>", {id: "movie5-container" });
      var movie6 = $("<div>", {id: "movie6-container" });
      var movie7 = $("<div>", {id: "movie7-container" });
      var movie8 = $("<div>", {id: "movie8-container" });

      $("#search-results").append{
        movie1,
        movie2,
        movie3,
        movie4,
        movie5,
        movie6,
        movie7,
        movie8,
      };

    }
  })
}
*/

function movieArrayDivs() {
  var movieTvArray = newMovieTvArray.length;

  for(var i = 0; i < movieTvArray; i++) {
    newMovieTvArray.toString();
    var movieTvValues = newMovieTvArray[i];

    var newDiv = document.createElement("div"); // creates a new div tag for each of values
    newDiv.setAttribute("id", `Div${i}`);

    var movieTvContent = document.createTextNode(movieTvValues); // add the value inside the array

    newDiv.appendChild(movieTvContent);

    var currentDiv = document.getElementById("#search-results");
    document.body.insertBefore(newDiv, currentDiv);

  }
}


/*
var searchhistory = JSON.parse(window.localStorage.getItem("searchHistory")) || [];

if (SearchHistory.length > 0) {
  getWeather(history[history.length - 1]);
}

for (var i = 0; i < history.length; i++) {
  listCity(history[i]);
}

*/