// 1. Target the div with the ID of `articles`. Change its font size to `50px`.
const articles = document.querySelector("#articles");

articles.style.fontSize = "50px";

// 2. Inside 'articles', change the h3 to have a font color of `blue`.
const artTitle = document.querySelector("#artTitle");

artTitle.style.color = "blue"

// 3. Target the div with the ID of `main`. Change its background color to 'black'.
const main = document.querySelector("#main");

main.style.background = 'black';

// 4. Inside 'main', change the h1 to have text-decoration  underline, color orange, and font size 80px.
const title = document.querySelector("#title");

title.style.textDecoration = "underline";
title.style.color = "orange";
title.style.fontSize = "80px";

// 5. Inside 'main', change the h2 to have font size 50px; 
const subtitle = main.querySelector("h2");

subtitle.style.fontSize = "50px";
