var hasSearched = false;

var openmodal = document.querySelectorAll("#contact-info");
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal();
  });
}

function toggleModal() {
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("pointer-events-none");
  body.classList.toggle("modal-active");
}

$("#search-button").on("click", function (event) {
  event.preventDefault();
  // capture the values chosen from the drop downs
  var streamingService = $("#str-ser-pick").val();
  var tvOrMovie = $("#tv-movie-pick").val();
  var genrePick = $("#genre-pick").val();

  //clear selection picks when search button is clicked
  //$("#str-ser-pick").val("");
  // $("#tv-movie-pick").val("");
  //$("genre-pick").val("");

  //clear search results container when another selection is made
  $("select").click(function () {
    $("#search-results").empty();
  });

  fetch(
    `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${streamingService}&type=${tvOrMovie}&genre=${genrePick}&page=1&language=en`,
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
    for (var i = 0; i <= data.results.length - 1; i++) {
      //movieTvArray.toString();
      var currentDiv = document.getElementById("search-results");
      var movie = data.results[i];
      var movieTvValues = movie;
      var id = movie.imdbID;
      var container = document.createElement("div");
      container.setAttribute("class", "card-container p-2 m-0");

      var card = document.createElement("div"); // creates a new div tag for each of values
      card.setAttribute("id", `div${i}`);
      card.setAttribute("class", "card flex-1 p-2 rounded-lg bg-green-200");

      var innerCard = document.createElement("div");
      innerCard.setAttribute("id", "innerCard");
      innerCard.setAttribute("class", "bg-gray-900 p-4 rounded-lg");

      var title = document.createElement("h2");
      title.setAttribute("class", "text-white text-center flex flex-wrap");
      //card.setAttribute("class", "rounded-lg");
      title.textContent = movie.title;

      var year = document.createElement("h3");
      year.setAttribute("class", "text-indigo-400");
      year.textContent = movie.year;

      var cast = document.createElement("h4");
      cast.setAttribute("class", "text-white");
      cast.textContent = movie.cast;

      var about = document.createElement("p");
      about.setAttribute("class", "text-indigo-400");
      about.textContent = movie.overview;

      var rating = document.createElement("h4");
      rating.setAttribute("class", "text-white");
      rating.textContent = "IMDb Rating: " + movie.imdbRating;

      var poster = document.createElement("img");
      poster.setAttribute(
        "src",
        `http://img.omdbapi.com/?i=${id}&apikey=52e1f5ec`
      );
      poster.setAttribute("class", "px-16 md:px-20");

      currentDiv.append(container);
      container.append(card);
      card.append(innerCard);
      innerCard.append(title);
      innerCard.append(year);
      innerCard.append(poster);
      innerCard.append(cast);
      innerCard.append(about);
      innerCard.append(rating);
      saveSearch();
    }
  }
});

function saveSearch() {
  var streamingService = $("#str-ser-pick").val();
  var tvOrMovie = $("#tv-movie-pick").val();
  var genrePick = $("#genre-pick").val();
  localStorage.setItem("genre", genrePick);
  localStorage.setItem("type", tvOrMovie);
  localStorage.setItem("service", streamingService);
  hasSearched = true;
}

function loadSearch() {
  if (localStorage.getItem("service")) {
    $("#str-ser-pick").val(localStorage.getItem("service")).trigger("change");
  }
  if (localStorage.getItem("genre")) {
    $("#genre-pick").val(localStorage.getItem("genre")).trigger("change");
  }
  if (localStorage.getItem("type")) {
    $("#tv-movie-pick").val(localStorage.getItem("type")).trigger("change");
  }
}
loadSearch();

