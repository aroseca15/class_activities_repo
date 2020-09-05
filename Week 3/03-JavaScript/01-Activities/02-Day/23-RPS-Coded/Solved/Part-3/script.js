// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let wins = 0;
let losses = 0;
let ties = 0;

for (let i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Test if it's working correctly
    console.log(computerGuess);

    // Collect the user's response and convert to lower case.
    let userGuess = prompt("Enter r, p, or s to play!");
    userGuess = userGuess.toLowerCase();
}