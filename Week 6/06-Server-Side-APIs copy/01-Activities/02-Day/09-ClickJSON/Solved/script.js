// Initial array of movies
let movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Function for dumping the JSON content for each button into the div
function displayMovieInfo() {

    let movie = $(this).attr("data-name");
    let queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#movies-view").text(JSON.stringify(response));
    });
}

// Function for displaying movie data
function renderButtons() {

    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (let i = 0; i < movies.length; i++) {

        // Then dynamically generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        let a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("movie");
        // Adding a data-attribute
        a.attr("data-name", movies[i]);
        // Providing the initial button text
        a.text(movies[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    let movie = $("#movie-input").val().trim();

    // Adding the movie from the textbox to our array
    movies.push(movie);
    console.log(movies);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Function for displaying the movie info
// Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
$(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();