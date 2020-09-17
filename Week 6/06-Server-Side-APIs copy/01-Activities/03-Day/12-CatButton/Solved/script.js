// Event listener for our cat-button
$("#cat-button").on("click", function () {
    // PUT API KEY IN HERE:
    let api_key = "";

    // Storing our giphy API URL for a random cat image
    let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + api_key + "&tag=cats";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {

            // Saving the image_original_url property
            let imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            let catImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            // Prepending the catImage to the images div
            $("#images").prepend(catImage);
        });
});