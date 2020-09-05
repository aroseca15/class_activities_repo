let cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("inside printInfo()");

        // What will this print? 
        console.log(this);

        // What will this print?
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);

// When you start a new function it becomes its own parent. (this) grabs the immediate parent object. If such is not found then it will defualt to the global object.
        let nestedFunction = function () {
            console.log("inside nestedFunction()");

            // What will this print?
            console.log(this);

            // What will this print?
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        };

        nestedFunction();
    }
};

// calls the printInfo function. Which subsequently calls the nestedFunction()
cat.printInfo();
