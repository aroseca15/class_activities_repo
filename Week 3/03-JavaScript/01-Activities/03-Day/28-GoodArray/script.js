//  How easy is it to loop through numbers?


// Set up an array of numbers.
let nums = [1, 8, 2, 3, 1, 1, 6, 6, 6];

// Loop through the array we just set up.
for (let i = 0; i < nums.length; i++) {
    // If the current number is greater than 2..
    if (nums[i] > 2) {
        // Log "number is greater than 2".
        console.log("number is greater than 2");
    }
    // Otherwise
    else {
        // Log "number is not greater than 2"
        console.log("number is not greater than 2");
    }
}