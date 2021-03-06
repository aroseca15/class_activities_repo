let cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("inside printInfo()");
        // What will this print? ("Object")
        console.log(this);

        // What will this print? ("Name: Gus Color: gray Age: 15")
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);

        let nestedFunction = function () {
            console.log("inside nestedFunction()");

            // What will this print? ("Window")
            console.log(this);

            // What will this print? ("Name:  Color: undefined Age: undefined")
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        };

        nestedFunction();
    }
};

// calls the printInfo function. Which subsequently calls the nestedFunction()
cat.printInfo();
