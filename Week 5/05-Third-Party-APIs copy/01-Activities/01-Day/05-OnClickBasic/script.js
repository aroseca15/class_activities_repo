
// This "document.ready" code isn't necessary in this example... but is useful to become familiar with.
// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function () {

    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("#id|.class|element").on("action", function(){});
    // And so whenever it is clicked...
    $("#click-me").on("click", function () {
        alert("I've been clicked!");
    });

});
