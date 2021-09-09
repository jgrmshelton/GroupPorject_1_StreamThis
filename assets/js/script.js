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
})