// Initial array of movies
let movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Function for displaying movie data
function renderButtons() {

    // Delete the content inside the buttons-view div prior to adding new movies
    $('#buttons-view').empty();
    // (this is necessary otherwise you will have repeat buttons)
    for (let i = 0; i < movies.length; index++) {
        let movieBtn = $('<button>');
        movieBtn.text(movies[i]);
        $('#buttons-view').append('<button>' + movies[i] + '</button>' );
        
    }
    // Loop through the array of movies, then generate buttons for each movie in the array

}

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function (event) {
    
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();

    // Write code to grab the text the user types into the input field
    // Write code to add the new movie into the movies array

    // The renderButtons function is called, rendering the list of movie buttons
    renderButtons();
});

// Calling the renderButtons function to display the initial list of movies
renderButtons();