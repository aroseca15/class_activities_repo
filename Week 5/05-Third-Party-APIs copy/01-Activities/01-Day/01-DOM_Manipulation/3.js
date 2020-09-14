
let targetDiv = document.getElementById("empty-div");

targetDiv.textContent = "Hello friends!";

// If we try to add to the div using the same .textContent method... it just replaces the old content.
targetDiv.textContent = "A pleasure to meet you!";
