// FUNCTIONS
// ================================================================================

// Create a Function called "adder" that take three arguments (x, y, z).
// The function should add the arguments together, and log the result to the console.
function adder(x, y, z) {
    let result = x + y + z;
    // Or you could do: console.log(x + y + z)    you would get the same result in the console.
    console.log(result);
}

// Create a Function called "multiplier" that takes three arguments (x, y, z).
// The function should multiply the arguments, and log the result to the console.
function multiplier(x, y, z) {
    let result = x * y * z;
    console.log(result);
}

// Create a Function called "isString" that takes three arguments (x, y, z).
// "isString" determines if all three arguments are strings and logs an appropriate response to the console.
function isString(x, y, z) {
    // This is how you find out what the value is inside of each value... For example, this syntax highlights what is done if all variables are equal.
    if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
        console.log("These are all strings")
    }

    else {
        console.log("Not all are strings");
    }
}


// Create a Function called "vowelChecker" that takes in a single argument (x).
// "vowelChecker" logs whether or not the input is a vowel.
function vowelChecker(x) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(x) === -1) {
        console.log("Not a Vowel")
    }

    else {
        console.log("You Bought a Vowel")
    }

}

// BONUS
// Creates a version of "adder" that returns its result. Function is called "adderReturn".
function adderReturn(x, y, z) {

}

// Creates a version of "multiplier" that returns its result. Function is called "multiplierReturn".


// FUNCTION EXECUTION
// ================================================================================

// Add in the lines of code below necessary to call the functions we created above.


// Call the adder function here. Each of the below is a "call" each will individually be passed in to the function. Being run the same way but coming out with the result unique to each set of perameters.
adder(1, 4, 5);
adder(4, 4, 5241312);
adder(3, 55, 5);

console.log("-------------------");


// Call the multiplier function here.
multiplier(3, 4, 5)

console.log("-------------------");


// Call the isString function here.
isString(3, 3, 4)

console.log("-------------------");


// Call the vowelChecker function here.


console.log("-------------------");


// BONUS
// Call the adderReturn function here and set it equal to a variable. Then log that variable to the console.


console.log("-------------------");


// Call the multiplierReturn function here and set it equal to a variable. Then log that variable to the console.