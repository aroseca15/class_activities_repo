// This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
// It's useful to become familiar with now.

$(document).ready(function () {

    // VARIABLES
    // ====================================================================
    // Here we create variables for tracking the number of sandwiches eaten
    // ...
let pbjSwitch = 0;
let roastBeefSwitch = 0;
let grilledCheeseSwitch = 0;

    // ...

    // FUNCTIONS
    // ====================================================================
    // Here we create various on "click" functions which capture the clicks
    // Inside each click event is the code to create an alert, update the counter, then show the updated count.
    $("#pbj").on("click", function(){
        alert("Delicious!! One for you!");
        pbjSwitch = pbjSwitch + 1;
        alert(pbjSwitch);
    })

    $("#grilledcheese").on("click", function(){
        alert("Delicious!! One for you!");
        grilledCheeseSwitch = grilledCheeseSwitch + 1;
        alert(grilledCheeseSwitch);
    })

    $("#roastbeef").on("click", function(){
        alert("Delicious!! One for you!");
        roastBeefSwitch = roastBeefSwitch + 1;
        alert(roastBeefSwitch);
    })

});
