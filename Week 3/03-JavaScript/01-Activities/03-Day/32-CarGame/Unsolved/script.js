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

// TO DO: Log all of our car's current stats to the console.
function reWriteStats() {
console.log('-----------')
console.log('Make: ' + car.make)
console.log('Model: ' + car.model)
console.log('Color: ' + car.color)
console.log('Mileage: ' + car.mileage)
console.log('Is working: ' + car.isWorking)
console.log('-----------')
}

// MAIN PROCESS
// ==============================================================================

// A while loop makes more sense here than a for loop, because we don't know how long the user will want to play the game
// This loop will end when the user presses Cancel, thus setting the letter variable to "null"
while (letter !== null) {
    // Prompt user to input a letter
    letter = prompt("Type 'h' to honk, 'd' to drive to work, 'w' to drive around the world, or 't' to get a tuneup.");

    // TO DO: Call the different car methods
if(letter === 'h'){
    car.honk();
} else if (letter === 'd'){
car.driveToWork();
} else if (letter === 'w'){
    if(car.isWorking) {
        car.driveAroundWorld()
    }
    else{
        alert("Fix Your Car! Unsafe!")
    }
    car.driveAroundWorld();
} else if (letter === 't'){
    car.getTuneUp();
}






    reWriteStats();
}