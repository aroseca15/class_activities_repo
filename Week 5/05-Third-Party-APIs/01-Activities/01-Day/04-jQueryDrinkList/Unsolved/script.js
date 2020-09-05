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

let drinkSelection = $("#drink-options");

for (let i = 0 < drinkList.length; i++;){
let li = $("<li>"); I
  li.text(drinkList[i]);
  drinkSelection.append(li);
}

  // Using JavaScript programmatically append each drinkList item to the "drink-options" div
  // HINT: you will need a for loop to go over each element in the list
