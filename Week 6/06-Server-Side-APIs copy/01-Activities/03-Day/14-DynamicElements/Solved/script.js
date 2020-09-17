// Adding click event listen listener to all buttons
$("button").on("click", function () {
    // Grabbing and storing the data-animal property value from the button
    let animal = $(this).attr("data-animal");
    let api_key = "";
    // Constructing a queryURL using the animal name
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=" + api_key + "&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            let results = response.data;

            // Looping through each result item
            for (let i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                let animalDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                let p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                let animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.append(animalImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(animalDiv);
            }
        });
});