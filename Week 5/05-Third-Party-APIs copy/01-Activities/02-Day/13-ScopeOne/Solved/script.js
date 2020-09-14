
function outside() {
    // the scope of x is outside()
    let x = 1;

    // the scope of inside() is outside(); the scope of y is inside()
    function inside(y) {

        console.log(x + y);
    }

    return inside;
}

// calling outside() returns inside(), which is assigned to insideOut
let insideOut = outside();

// the return value is 3
insideOut(2);

// x is local to inside(), we can't access it globally
// but a closure is created when outside() returns
// giving insideOut() access to x
console.log("The value of 'x' outside 'outside()' is: " + x);