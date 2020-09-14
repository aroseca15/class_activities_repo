$("#empty-div").html("<h1>Hello friends!</h1>");

// If we needed each line to be its own div, we could just as easily create a new div.
let newDiv = $("<div>");
newDiv.text("A pleasure to meet you!");

// NOTICE THE DIFFERENCE
// ---------------------
// $("#empty-div")   <-- FIND a DOM node with the ID empty-div
// $("<div>")        <-- CREATE a new DIV

// We can then  append it to the other div using the same ".append" method.
$("#empty-div").append(newDiv);