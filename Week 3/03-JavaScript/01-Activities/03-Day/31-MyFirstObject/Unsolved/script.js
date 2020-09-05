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


// How would we log...

// The car's make?

// The car's model?

// The car's mileage?

// How would we run the car's driveToWork method?

// How would we run the car's driveAroundWorld method?

// How would we run the getTuneUp method?
