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
      movieArrayDivs(data);
    });

    function movieArrayDivs(data) {
      
    
      for(var i = 0; i <= data.results.length - 1; i++) {
        //movieTvArray.toString();
        var currentDiv = document.getElementById("search-results");
        var movie = data.results[i];
        var movieTvValues = movie;
        var newDiv = document.createElement("div"); // creates a new div tag for each of values
        newDiv.setAttribute("id", `Div${i}`);
        var title = document.createElement("h2");
        title.textContent = movie.title;

        var year = document.createElement("h3");
        year.textContent = movie.year;

        var about = document.createElement("p");
        about.textContent = movie.overview;
        
        newDiv.append(title);
        newDiv.append(year);
        newDiv.append(about);
        currentDiv.append(newDiv);
        
      }
    }
});





/*
var searchhistory = JSON.parse(window.localStorage.getItem("searchHistory")) || [];

if (SearchHistory.length > 0) {
  getWeather(history[history.length - 1]);
}

for (var i = 0; i < history.length; i++) {
  listCity(history[i]);
}

*/
