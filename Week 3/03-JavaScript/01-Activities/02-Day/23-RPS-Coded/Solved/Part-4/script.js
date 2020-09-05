// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let wins = 0;
let losses = 0;
let ties = 0;

for (var i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Collect the user's response and convert to lower case.
    let userGuess = prompt("Enter r, p, or s to play!");
    userGuess = userGuess.toLowerCase();

    // Only run game logic if user chose a valid option
    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

        alert("The computer chose " + computerGuess);

        // Check one of the win conditions. We'll worry about the others later.
        if (userGuess === "r" && computerGuess === "s") {
            wins++;
            alert("You've won " + wins + " time(s)!");
        }
    }
}