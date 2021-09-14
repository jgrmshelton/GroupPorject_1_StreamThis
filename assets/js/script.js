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
        "x-rapidapi-key": "4205557259msh0abc79479b06253p14ce78jsnfd53a2227e3e",
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

        var container = document.createElement("div");
        container.setAttribute("class", "card-container p-2 m-0");

        var card = document.createElement("div"); // creates a new div tag for each of values
        card.setAttribute("id", `div${i}`);
        card.setAttribute("class", "card flex-1 p-2 rounded-lg bg-green-200");

        var innerCard = document.createElement("div");
        innerCard.setAttribute("id", "innerCard");
        innerCard.setAttribute("class", "bg-gray-900 p-4 rounded-lg");

        var title = document.createElement("h2");
        title.setAttribute("class", "text-white flex flex-wrap");
        //card.setAttribute("class", "rounded-lg");
        title.textContent = movie.title;

        var year = document.createElement("h3");
        year.setAttribute("class", "text-indigo-400");
        year.textContent = movie.year;

        var cast = document.createElement("h4");
        cast.setAttribute("class", "text-white")
        cast.textContent = movie.cast;

        var about = document.createElement("p");
        about.setAttribute("class", "text-indigo-400");
        about.textContent = movie.overview;

        var rating = document.createElement("h4");
        rating.setAttribute("class", "text-white")
        rating.textContent = ("IMDb Rating: " + movie.imdbRating);
        
        currentDiv.append(container);
        container.append(card);
        card.append(innerCard);
        innerCard.append(title);
        innerCard.append(year);
        innerCard.append(cast);
        innerCard.append(about);
        innerCard.append(rating);
        
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
