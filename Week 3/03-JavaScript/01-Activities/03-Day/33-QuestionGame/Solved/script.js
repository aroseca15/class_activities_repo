// The array of questions for our quiz game.
const questions = [
    { q: "The sky is blue.", a: "t" },
    { q: "There are 365 days in a year.", a: "t" },
    { q: "There are 42 ounces in a pound.", a: "f" },
    { q: "The Declaration of Independence was created in 1745.", a: "f" },
    { q: "Bananas are vegetables.", a: "f" }
];

// We start the game with a score of 0.
let score = 0;

// Loop over every question object
for (let i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    let answer = confirm(questions[i].q);

    // Compare answers
    if ((answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")) {
        // Increase score
        score++;
        alert("Correct!");
    }
    else {
        alert("Wrong!");
    }
}

// Show total at end
alert("You got " + score + "/" + questions.length);
