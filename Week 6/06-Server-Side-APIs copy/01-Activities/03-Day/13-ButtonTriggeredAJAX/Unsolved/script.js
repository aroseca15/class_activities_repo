$("button").on("click", function () {
    let person = $(this).attr("data-person");
    // Put your GIPHY API key here!
    let api_key = '43OxvClZ3hbT7IJfICiFbZeXA029mqnM';
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=" + api_key + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            let results = response.data;

            for (let i = 0; i < results.length; i++) {
                let gifDiv = $("<div>");

                let rating = results[i].rating;

                let p = $("<p>").text("Rating: " + rating);

                let personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
        });
});