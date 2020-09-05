$(document).ready(function () {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the letters array.
    for (let i = 0; i < letters.length; i++){

        let letterBtn = $("<button>");

        letterBtn.addClass("letter-button", "letter", "letter-button-color");
        letterBtn.attr("data-letter" , letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    }

$(".letter-button").on('click', function(){
    let fridgeMagnet = $('<div>');
    fridgeMagnet.addClass('letter fridge-color');
    fridgeMagnet.text($(this).attr("data-letter"));
    $('#display').append(fridgeMagnet);
       
})
    
$("#clear").on('click', function(){
    $('#display').empty();
})

    



});