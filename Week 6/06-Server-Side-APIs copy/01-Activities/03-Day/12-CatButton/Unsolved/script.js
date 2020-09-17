//
$("#cat-button").on("click", function () {

    // PUT API KEY IN HERE:
    let api_key = "43OxvClZ3hbT7IJfICiFbZeXA029mqnM";

    //
    let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + api_key + "&tag=yoda";

    //
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        //
        .then(function (response) {

            //
            let imageUrl = response.data.image_original_url;

            //
            let catImage = $("<img>");

            //
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            //
            $("#images").prepend(catImage);
        });
});