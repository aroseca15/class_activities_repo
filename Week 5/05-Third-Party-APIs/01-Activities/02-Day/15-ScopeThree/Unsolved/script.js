// Example One: Global Scope
// -------------------------------------------
let a = 1;
function one() {
    alert("One: " + a);
}

// What will get alerted?
one();

// Example Two: Local Scope
// -------------------------------------------
function twotop() {

    function two(a) {
        alert("Two: " + a);
    }

    two(a);
}

// What will get alerted?
twotop();

// Example Three: Local Scope
// -------------------------------------------
let a = 5;
function three() {

    let a = 3;
    alert("Three: " + a);
}

// What will get alerted?
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

    alert("Five: " + a);
}

// What will get alerted?
first();