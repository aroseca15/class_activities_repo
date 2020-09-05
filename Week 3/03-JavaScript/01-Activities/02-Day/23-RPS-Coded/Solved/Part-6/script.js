// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
let wins = 0;
let losses = 0;
let ties = 0;

for (let i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Collect the user's response and convert to lower case.
    let userGuess = prompt("Enter r, p, or s to play!");
    userGuess = userGuess.toLowerCase();

    // Only run game logic if user chose a valid option
    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

        alert("The computer chose " + computerGuess);

        // Win/lose conditions:
        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") ||
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
        } else if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + " time(s).");
        } else {
            losses++;
            alert("You've lost " + losses + " time(s).");
        }
    }
}

// When the game is over, alert the totals to the user. We can use the \n character to make a line break.
alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);