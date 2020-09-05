// Created an array named myBands.
let myBands = ["britney", "selena", "bob dylan", "blink 182", "michael jackson"];

// Created a prompt to get the user's favorite band.
let userGuess = prompt("Which band or artist do you like?");

// Converts the user's answer to lowercase.
let userGuessLower = userGuess.toLowerCase();

// Now we check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array...
if (myBands.indexOf(userGuessLower) === -1) {
    alert("Nah! They're pretty lame...");
}
// If it is in the array...
else {
    alert("OMG! I love them too!");
}
