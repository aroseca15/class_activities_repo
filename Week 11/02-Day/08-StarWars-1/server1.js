// Dependencies
// ===========================================================
const express = require("express");

const app = express();
const PORT = 3000;

// Data
// ===========================================================
let yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

let darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
let obiWanKenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: "null",
  forcePoints: 1200000
};

let hanSolo = {
  name: "Han Solo",
  role: "Rebel Pilot and General",
  age: 65,
  forcePoints: 0
};
//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//
app.get("/obiWanKenobi", function(req, res) {
  res.json(obiWanKenobi);
});

app.get("/hanSolo", function(req, res) {
  res.json(hanSolo);
});
// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
