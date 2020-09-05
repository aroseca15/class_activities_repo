 // Inspect this object in Chrome's dev tools. Notice anything familiar?
 console.log(window);

 // We can access many properties and methods from this window object
 console.log(window.screen.width);
 console.log(window.location.href);

 // Some methods we've already used; we just don't necessarily have to write "window"
 // window.alert("Hello");

 function firstFunction() {
   // The window object is global, so it can be read from within any function
   console.log(window.screen.width);
 }

 firstFunction();

 function secondFunction(window) {
   // But in this case, our parameter has the same name as a global variable, so it will take priority
   // Maybe we shouldn't be naming our parameters "window..."
   console.log(window);
 }

 secondFunction("Hello");

 // The same rule applies to our own variables
 let food = "Pizza";
 let drink = "Water";

 function thirdFunction(drink) {
   // Variable "food" is global and is available to this function
   console.log(food);

   // Variable "drink" is also global but was "shadowed" by our parameter
   console.log(drink);
 }

 thirdFunction("Orange Juice");