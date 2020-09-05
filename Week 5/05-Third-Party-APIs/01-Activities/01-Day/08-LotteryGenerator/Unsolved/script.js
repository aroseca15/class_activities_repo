$(document).ready(function () {

    // Notice I didn't set $(".jumbotron") to a let this time?
    // If you only plan to use that selector once it doesn't need to be a let
    $("#random-button").on("click", function () {
        let newNumber = "";
        
        for (let i = 0; i < 9; i++) {
            
            let random = Math.floor(Math.random() * 10);
            newNumber = random + newNumber;
            
        }

        // ... we generate a random number
       
        

        // ... and then dump the random number into our random-number div.
        $("#random-number").prepend("<br><hr>" + newNumber);

    });

});