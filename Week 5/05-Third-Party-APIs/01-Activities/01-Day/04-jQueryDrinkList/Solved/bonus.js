// Array holds all of the drinks available
let drinkList = [
    "Coffee: $5",
    "Espresso: $7",
    "Cappuccino: $6",
    "Latte: $4",
    "Tea: $3",
    "Ice Coffee: $6",
    "Ice Espresso: $8",
    "Ice Latte: $6",
    "Ice Tea: $4"
];

// This line of jQuery selects the div with the matching id (#drink-options)
let drinkDiv = $("#drink-options");

// Here we loop through our array using the .each() method and append a new div with each iteration
$.each(drinkList, function (i, drink) {
    drinkDiv.append("<div>" + drink + "</div>");
});
