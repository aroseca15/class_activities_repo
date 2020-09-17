// Example One: Global Scope
// -------------------------------------------
let a = 1;
function one() {
    alert("One: " + a);
}

// What will get alerted? ("One: 1")
one();

// Example Two: Local Scope
// -------------------------------------------
function twotop() {

    function two(a) {
        alert("Two: " + a);
    }

    two(a);
}

// What will get alerted? ("Two: 1")
twotop();

// Example Three: Local Scope
// -------------------------------------------
let a = 5;
function three() {

    let a = 3;
    alert("Three: " + a);
}

// What will get alerted? ("Three: 3");
three();

// Example Four: Local Scope
// -------------------------------------------
function first() {
    let a = 5;

    function second() {
        let a = 3;

        function third() {
            alert("Four: " + a);
        }

        third();
    }

    second();

    // What will get alerted? ("Five: 5"),
    // because we are outside of second() and back in the scope of first()
    alert("Five: " + a);
}

// What will get alerted? ("Four: 3");
first();