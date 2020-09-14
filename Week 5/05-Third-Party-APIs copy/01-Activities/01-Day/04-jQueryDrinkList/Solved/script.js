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

// For Loop then loops through our total drink list...
for (let i = 0; i < drinkList.length; i++) {

    // It then creates a new div for each drink. Note we create divs and add the content in the same line.
    let newDrinkDiv = $("<div>" + drinkList[i] + "</div>");

    // It then adds this new div to the drinkList div.
    drinkDiv.append(newDrinkDiv);
}
