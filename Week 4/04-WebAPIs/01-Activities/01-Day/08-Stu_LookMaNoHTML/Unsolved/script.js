// Keep your code organized!
// consts are in one area.
const body = document.body;

const h1El = document.createElement("h1");
const h2El = document.createElement("h2");
const infoEl = document.createElement("div");
const imgEl = document.createElement("img");
const skPrisonUniformE1 = document.createElement("div");
const nameEl = document.createElement("div");
const favoriteEl = document.createElement("div");
const listEl = document.createElement("ol");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

// Text in one spot.
h1El.textContent = "Welcome to my page";
h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
skPrisonUniformE1.textContent = "This has a very interesting story attached to it!";
nameEl.textContent = "World History is very interesting to me.";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Fresh Veggie Spring Rolls";
li2.textContent = "French Fries (from Burger King)";
li3.textContent = "Brown Rice Ramen";
li4.textContent = "Vegan Chocolate Chip Cookies";

// AppendChilds in one spot.
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(skPrisonUniformE1);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

const listItems = document.querySelectorAll("li");

h1El.setAttribute("style", "margin:auto; width: 50p%; text-align: center;");
h2El.setAttribute("style", "margin:auto; width: 100%; text-align: center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "SKU.jpg");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200);
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
skPrisonUniformE1.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background:green; padding:20px;");
listItems[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");





