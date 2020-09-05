// Set the body to a variable
const body = document.body;

// Create all necessary elements
const h1El = document.createElement("h1");
const h2El = document.createElement("h2");
const infoEl = document.createElement("div");
const imgEl = document.createElement("img");
const kittenEl = document.createElement("div");
const nameEl = document.createElement("div");
const favoriteEl = document.createElement("div");
const listEl = document.createElement("ol");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");



// Set the text content of relevant elements
h1El.textContent = "Welcome to my page";
h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
kittenEl.textContent = "This is my kitten";
nameEl.textContent = "his name is Jax";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Chicken Fingers";
li2.textContent = "Pizza";
li3.textContent = "Burgers";
li4.textContent = "Sushi";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Store our li elements in a variable
const listItems = document.querySelectorAll("li");

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200);
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background:#333333; padding:20px;");
listItems[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
