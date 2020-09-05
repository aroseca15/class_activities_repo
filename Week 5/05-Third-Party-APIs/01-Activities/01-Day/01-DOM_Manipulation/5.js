let targetDiv = document.getElementById("empty-div");

targetDiv.textContent = "Hello friends!";

let newDiv = document.createElement("div");
newDiv.textContent = "A pleasure to meet you!";

targetDiv.appendChild(newDiv);

// We then apply that CSS to our newDiv.
newDiv.setAttribute("class", "fancy");