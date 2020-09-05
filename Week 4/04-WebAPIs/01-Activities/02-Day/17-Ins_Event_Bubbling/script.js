const outer = document.querySelector(".outer-div");
const inner = document.querySelector(".inner-div");
const button = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: purple"
  );
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: orange"
  );
}

outer.addEventListener("click", changeOrange);
inner.addEventListener("click", changePurple);
button.addEventListener("click", changeBlue);