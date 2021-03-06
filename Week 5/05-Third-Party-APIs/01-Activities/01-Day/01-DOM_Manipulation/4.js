let targetDiv = document.getElementById("empty-div");

targetDiv.textContent = "Hello friends!";

// In this example, we instead create a new div called "newDiv".
let newDiv = document.createElement("div");

// We then give this newDiv the text "A pleasure to meet you!".
newDiv.textContent = "A pleasure to meet you!";

// Now we use the ".appendChild" method to combine the two divs together on the page.
targetDiv.appendChild(newDiv);