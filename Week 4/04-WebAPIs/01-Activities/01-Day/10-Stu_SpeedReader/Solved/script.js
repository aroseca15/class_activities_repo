const poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
const words = poem.split(" ");

const mainEl = document.querySelector("#main");
const timerEl = document.querySelector("#countdown");
const bodyEl = document.createElement("div");

let i = 0;

const millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  let timeLeft = 5;

  let timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}


function speedRead() {
  mainEl.append(bodyEl);

  let poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, millisecondsPerWord);
}

prepareRead();


