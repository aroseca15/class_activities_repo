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

  // 1. Create code that "grabs" the div with the matching id (#drink-options);
  // ...
let drinkListDiv = document.getElementById('drink-options');

// for (let i = 0; i < drinkList.length; i++) {
  
//   let newDrinkList = document.createElement('p');

//   newDrinkList.textContent = drinkList[i];
  
//  drinkListDiv.appendChild(newDrinkList);
  
  
// }
drinkList.forEach(function(addDrinkList){

  let newDrinkList = document.createElement('p');

  // For below you set '=' to the function name.
  newDrinkList.textContent = addDrinkList;

  drinkListDiv.appendChild(newDrinkList);
})

  // ...


  // 2. Create a for loop that creates HTML content of all the drinks using JavaScript.
  // HINT: You will need to use each of the following methods: createElement, textContent, appendChild
  // ...


  // ...