
// EXAMPLE ONE:
// --------------------------------------------------
// What is "this" going to print?

console.log(this);


// EXAMPLE TWO:
// --------------------------------------------------
// What is "this" going to print?

function myFunction() {
    console.log(this);
}
myFunction();

// EXAMPLE THREE (IMPORTANT):
// --------------------------------------------------
// What is "someObj.say()" going to print?

var someObj = {
    name: "Red Hat",
    say: function () {
        console.log(this.name);
    }
};
someObj.say();


// EXAMPLE FOUR (BONUS, TRICKY!):
// --------------------------------------------------
// What is "myObj.yell()" going to print? Why?

var myObj = {
    name: "",
    yell: function () {
        this.name = "Star Powerup";

        let changeName = function (newName) {
            this.name = newName;
        };
        changeName("Blue Shell");
        console.log(this);
    }
};
myObj.yell();


// EXAMPLE FIVE (BONUS, TRICKY!):
// --------------------------------------------------
// What is "myObj.yell()" going to print? Why?

var myObj = {
    name: "",
    yell: function () {

        // This line is important!
        let thisObject = this;

        this.name = "Star Powerup";
        let changeName = function (newName) {
            thisObject.name = newName;
        };
        changeName("Blue Shell");
        console.log(thisObject);
    }
};
myObj.yell();