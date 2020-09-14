$(document).ready(function () {

    // Notice I didn't set $(".jumbotron") to a let this time?
    // If you only plan to use that selector once it doesn't need to be a let
    $("#random-button").on("click", function () {

        // ... we generate a random number
        let random = Math.floor(Math.random() * 1000) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);

    });

});