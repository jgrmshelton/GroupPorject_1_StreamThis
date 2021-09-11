/* -- Psuedocode -- */

// Get document ready for jQuery

//$(document).ready(function () {
/* when search button is clicked capture the values chosen
    $(search id).on(click, function() {
      prevent default;
      name <- value.val();
      name <- value.val();
      name <- value.val();
    })
    */
$("#search-button").on("click", function (event) {
  event.preventDefault();
  // capture the values chosen from the drop downs
  var streamingService = $("#str-ser-pick").val();
  var tvOrMovie = $("#tv-movie-pick").val();
  var genrePick = $("#genre-pick").val();
  fetch(
    `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${streamingService}&type=movie&genre=${genrePick}&page=1&language=en`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": "9d43d4c7e0mshf7e0dc5ea3d9f07p1853d5jsn9854726a74ae",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
// clear drop down picks after search button is clicked
// $("str-ser-pick").val("");
// $("tv-movie-pick").val("");
// $("genre-pick").val("");

/*
   getAPIFunction(streamingService);
   getAPIFunction(tvOrMovie);
   getAPIFunction(genrePick);
   */

// streamingAvailability();
// function streamingAvailability() {
//   fetch(
//     "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&language=en",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//         "x-rapidapi-key": "9d43d4c7e0mshf7e0dc5ea3d9f07p1853d5jsn9854726a74ae",
//       },
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

/*
      

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

/*
var searchhistory = JSON.parse(window.localStorage.getItem("searchHistory")) || [];

if (SearchHistory.length > 0) {
  getWeather(history[history.length - 1]);
}

for (var i = 0; i < history.length; i++) {
  listCity(history[i]);
}

*/
