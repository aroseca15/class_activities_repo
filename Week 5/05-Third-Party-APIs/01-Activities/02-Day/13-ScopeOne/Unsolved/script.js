function outside() {
    // what is the scope of this variable? "outside"
    let x = 1;

    // what is the scope of this function and the scope of y? "inside" function is a block within the block called "outside". "inside" can therefore access "outside" but "outside" is barred from accessing "inside". "y" is within "inside". "inside" can access "x" from the "outside".
    function inside(y) {

        console.log(x + y);
    }

    return inside;
}

// what is happening here? Along with the "return" this becomes a closure. 
let insideOut = outside();

// What does this return?
insideOut(2);

// Uncaught ReferenceError: x is not defined.
// How does insideOut have access to x?
console.log("The value of 'x' outside 'outside()' is: " + x);
