// Loop 10 times
for (let i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
    // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
    let num = Math.floor(Math.random() * 10) + 1;

    // Display in console
    console.log(num);
}