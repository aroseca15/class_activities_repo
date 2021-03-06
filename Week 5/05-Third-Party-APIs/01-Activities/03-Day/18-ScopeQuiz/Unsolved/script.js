// Run this program. Then in the group answer the following questions:
// 1. What is the difference (in output) between Situation 1 and Situation 2?
// 2. Why are the alert messages different? (Hint: Look for syntax differences)

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
let myVar2 = 1;

function a2() {
    let myVar2 = 5 - 3;
    b2();
    alert("Q2 | a: " + myVar2);
}

function b2() {
    alert("Q2 | b: " + myVar2);
}
a2();