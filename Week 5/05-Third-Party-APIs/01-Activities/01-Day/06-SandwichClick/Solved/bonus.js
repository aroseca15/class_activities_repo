
// This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
// It's useful to become familiar with now.

$(document).ready(function () {

    // VARIABLES
    // ====================================================================

    // Here we create variables for tracking the number of sandwiches eaten

    let pbjCounter = 0;
    let grilledCheeseCounter = 0;
    let roastBeefCounter = 0;

    // FUNCTIONS
    // ====================================================================
    // Here we create various "on click" events which capture clicks
    // Inside each click event is the code to create an alert, update the counter, and show the updated count.
    // Take note that you can chain events onto an element
    // With this even if our ids are created at a later date our events will still always work
    $("#pbj").on("click", function () {

        alert("Mmm... Peanut Butter Jelly Time.");
        pbjCounter++;
        alert("You've eaten " + pbjCounter + " PB&J sandwiches");

        // BONUS
        $("#image-div").html("<img src='https://i1.wp.com/snotapwi.com/wp-content/uploads/2017/03/PBJ-Sandwiches.jpg?resize=590%2C368&ssl=1' />");

    });
    $("#grilledcheese").on("click", function () {

        alert("Nom nom nom. Gooey Gooey Grilled Cheese!");
        grilledCheeseCounter++;
        alert("You've eaten " + grilledCheeseCounter + " grilled cheese sandwiches");

        // BONUS
        $("#image-div").html("<img src='http://cdn.funcheap.com/wp-content/uploads/2014/04/The-Perfect-Grilled-Cheese-Sandwich-800-158111.jpg' />");

    });
    $("#roastbeef").on("click", function () {

        alert("No qualms about animal rights here. I'm all about that roast beef.");
        roastBeefCounter++;
        alert("You've eaten " + roastBeefCounter + " roast beef sandwiches");

        // BONUS
        $("#image-div").html("<img src='https://www.cscassets.com/recipes/wide_cknew/wide_25336.jpg' />");

    });
});