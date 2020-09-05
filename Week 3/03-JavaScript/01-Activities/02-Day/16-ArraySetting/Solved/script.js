// Here we have created our drinks array.
let drinks = ["Coke", "Pepsi", "Water", "Orange Juice"];

// Making some test logs.
console.log("First statement");
console.log(drinks[0]);
console.log(drinks[1]);
console.log(drinks[2]);
console.log(drinks[3]);

// We can either overwrite each element of the array to make it lowercase, or we can use the toLowerCase() method.
drinks[0] = "coke";
drinks[1] = "pepsi";
drinks[2] = "water";
drinks[3] = drinks[3].toLowerCase();

// Logging our new array to the console.
console.log("Second statement");
console.log(drinks[0]);
console.log(drinks[1]);
console.log(drinks[2]);
console.log(drinks[3]);