const typefaceEl = document.querySelector("#typeface");
const clearEl = document.querySelector("#clear");
const h1El = document.querySelector("#h1");
const h2El = document.querySelector("#h2");
const h3El = document.querySelector("#h3");
const pEl = document.querySelector("#p");
const textAreaEl = document.querySelector("#textarea");

const elements = [
  h1El, h2El, h3El, pEl
];


let typeface;

typefaceEl.addEventListener("change", function(event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector(".container").style.fontFamily = typeface;
});

textAreaEl.addEventListener("keydown", function(event) {
  let key = event.key.toLowerCase();
  let alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      element.textContent += event.key;
    });
  }
});

clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });
});