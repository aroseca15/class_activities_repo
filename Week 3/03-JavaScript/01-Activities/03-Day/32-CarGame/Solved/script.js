// VARIABLES
// ==========================================================================
let letter;

const car = {
    make: "Honda",
    model: "Fit",
    color: "Blue Raspberry",
    mileage: 3000,
    isWorking: true,

    driveToWork: function () {
        alert("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 8;

        alert("New mileage: " + this.mileage);
    },

    driveAroundWorld: function () {
        alert("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 24000;

        alert("New Mileage: " + this.mileage);
        alert("Car needs a tuneup!");

        this.isWorking = false;
    },

    getTuneUp: function () {
        alert("Car is ready to go!");
        this.isWorking = true;
    },

    honk: function () {
        alert("Honk! Honk!");
    }
};

// FUNCTIONS
// ==============================================================================

// Logs all of our car's current stats to the console.
function reWriteStats() {
    console.log("Make: " + car.make);
    console.log("Model: " + car.model);
    console.log("Color:" + car.color);
    console.log("Mileage: " + car.mileage);
    console.log("Is Working: " + car.isWorking);
    console.log("------------------------------");
}

// MAIN PROCESS
// ==============================================================================

// A while loop makes more sense here than a for loop, because we don't know how long the user will want to play the game
// This loop will end when the user presses Cancel, thus setting the letter variable to "null"
while (letter !== null) {
    // Prompt user to input a letter
    letter = prompt("Type 'h' to honk, 'd' to drive to work, 'w' to drive around the world, or 't' to get a tuneup.");

    // If the letter is h, run the following functions/methods.
    if (letter === "h") {
        car.honk();
        reWriteStats();
    }
    // If the letter is d, run the following functions/methods.
    else if (letter === "d" && car.isWorking) {
        car.driveToWork();
        reWriteStats();
    }
    // If the letter is w, run the following functions/methods.
    else if (letter === "w" && car.isWorking) {
        car.driveAroundWorld();
        reWriteStats();
    }
    // If the letter is t, run the following functions/methods.
    else if (letter === "t") {
        car.getTuneUp();
        reWriteStats();
    }
}
