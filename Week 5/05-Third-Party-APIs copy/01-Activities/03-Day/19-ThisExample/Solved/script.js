// EXAMPLE ONE:
// --------------------------------------------------
// What is "this" going to print?

// Answer: "WINDOW"
// Explanation: In this case "this" references the window (since it isn't inside of any object).
console.log(this);


// EXAMPLE TWO:
// --------------------------------------------------
// What is "this" going to print?

// Answer: "WINDOW"
// Explanation: Again, in this case 'this' references the window, since it isn't tied to any specific object.
function myFunction() {
    console.log(this);
}
myFunction();

// EXAMPLE THREE (IMPORTANT):
// --------------------------------------------------
// What is "someObj.say()" going to print?

// Answer: "Red Hat"
// Explanation: "someObj.say()" will print "this.name", which in this case references the "someObj" object.
let someObj = {
    name: "Red Hat",
    say: function () {
        console.log(this.name);
    }
};
someObj.say();


// EXAMPLE FOUR (BONUS, TRICKY!):
// --------------------------------------------------
// What is "myObj.yell()" going to print? Why?

// Answer: "Object > name: 'Star Powerup'"
// Explanation: Very tricky one!
// In this case, one would think the output should be: "Object > name: 'Blue Shell".
// However, in this case, the keyword: "this" changes meaning mid-way through the function call.
// At first "this" refers to "myObj", but as we go inside the "changeName" function "this" means "Window".
// The takeaway here is that one needs to be ultra careful of one's use of the keyword: "this".
let myObj = {
    name: "",
    yell: function () {
        this.name = "Star Powerup";

        let changeName = function (newName) {
            this.name = newName;
            console.log("`this` refers to the window here, because this nested function loses the myObj scope. console.log(this):");
            console.log(this);
            console.log("so we're setting the name '" + newName + "' on the window. console.log(window.name):");
            console.log(window.name);
            console.log("`window` contains the global scope, so you can log the variable itself. console.log(name):");
            console.log(name);
        };
        changeName("Blue Shell");
        console.log("`this` here refers to myObj, so doesn't show our modifications to window");
        console.log(this);
    }
};
myObj.yell();


// EXAMPLE FIVE (BONUS, TRICKY!):
// --------------------------------------------------
// What is "myObj.yell()" going to print? Why?

// Answer: "Object > name: 'Blue Shell'"
// Explanation: This example "solves" the issue from the previous bonus.
// In order to maintain scope throughout the function we created a variable called: "thisObject".
// This "thisObject" variable latches onto the original "myObj" instance of "this" to preserve state.
// Now, we can use the object "thisObject" in our "changeName" function to set the new name.
// Tricky indeed! Don't worry if you don't quite get it. This is more of a theoretical challenge.
let myObj = {
    name: "",
    yell: function () {

        // Here we make use of the "thisObject" variable to hold the state of "this"
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
