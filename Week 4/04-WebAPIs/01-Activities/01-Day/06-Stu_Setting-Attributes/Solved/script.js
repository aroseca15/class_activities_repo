const main = document.querySelector("main");
const sitesEl = document.querySelector(".sites");
const site1El = document.querySelector(".site1");
const site2El = document.querySelector(".site2");
const site3El = document.querySelector(".site3");
const siteTitles = document.querySelectorAll("h4");

site1El.querySelector("h4").textContent = "Site 1";
site1El.querySelector("a").setAttribute("href", "https://google.com");
site1El.querySelector("img").setAttribute("src", "images/image_1.jpg");
site1El.querySelector("img").setAttribute("alt", "person working");
site1El.querySelector("img").setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "group working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

for (let i = 0; i < siteTitles.length; i++) {
  siteTitles[i].setAttribute("style", "text-decoration: underline; padding-left:10px; margin: 0");
}



