const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");
const countEl = document.querySelector("#count");

let count = 0;

function setCounterText() {
  countEl.textContent = count;
}

incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
});

decrementEl.addEventListener("click", function () {
  if (count > 0) {
    count--;
    setCounterText();
  }
}); 