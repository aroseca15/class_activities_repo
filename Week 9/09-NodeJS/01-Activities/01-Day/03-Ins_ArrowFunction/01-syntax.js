// All of the `createGreeting` functions are equivalent
let createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
let createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
let createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
let greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
let greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);
