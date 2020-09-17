// Event listener for all button elements
$("button").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    let person = $(this).attr("data-person");
    let api_key = "";
    // Constructing a URL to search Giphy for the name of the person who said the quote
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=" + api_key + "&limit=10";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            let results = response.data;

            // Looping over every result item
            for (let i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    let gifDiv = $("<div>");

                    // Storing the result item's rating
                    let rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    let p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    let personImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    personImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }
        });
});