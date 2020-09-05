// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let wins = 0;
let losses = 0;
let ties = 0;

for (let i = 0; i < 10; i++) {
    // Collect the user's response and convert to lower case.
    let userGuess = prompt("Enter r, p, or s to play!");
    userGuess = userGuess.toLowerCase();

    // Test if it's working correctly
    console.log(userGuess);
}