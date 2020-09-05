
// Run this program. Then turn to the person next to you and answer the following questions:
// 1. What is the difference (in output) between Situation 1 and Situation 2?
// 2. Why are the alert messages different? (Hint: Look for syntax differences)

// Answers:
// ------------------------------------------

// 1. Output Differences
// ------------------------------------------
// Situation 1: Yields the following alerts:
// "Q1 | b: 2"
// "Q1 | a: 2"

// Situation 2: Yields the following alerts:
// "Q2 | b: 1"
// "Q2 | a: 2"

// The difference is that in situation 2: b's value is 1 (and not 2)


// 2. Explanation
// ------------------------------------------
// In situation 2, "myVar2" is redeclared and reassigned on line 55.
// There is a re-use of "let" that essentially creates a "local" instance of "myVar2".
// Because of the local instance, the change made to myVar2 did not apply to the global context.
// The takeaway is to avoid creating local and global versions of the same variable.
// It will get confusing!
// See comments below for more help.


// Situation 1
// ------------------------------------------
let myVar1 = 1;

function a1() {
    myVar1 = 5 - 3;
    b1();
    alert("Q1 | a: " + myVar1);
}

function b1() {
    alert("Q1 | b: " + myVar1);
}
a1();


// Situation 2
// ------------------------------------------

// Here myVar2 (global) is 1
let myVar2 = 1;

function a2() {

    // Here myVar2 (local) is 2
    let myVar2 = 5 - 3;
    b2();
    alert("Q2 | a: " + myVar2);
}

function b2() {

    // Here we are making use of the "global" version of myVar2.
    // So the below alert message never "saw" the change.
    alert("Q2 | b: " + myVar2);
}
a2();
