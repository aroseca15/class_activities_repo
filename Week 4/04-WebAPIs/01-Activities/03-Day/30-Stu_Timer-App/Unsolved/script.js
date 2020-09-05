const statusSpan = document.querySelector("#status");
const statusToggle = document.querySelector("#status-toggle");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const workMinutesInput = document.querySelector("#work-minutes");
const restMinutesInput = document.querySelector("#rest-minutes");

let totalSeconds = 0;
let secondsElapsed = 0;
let interval;

// getTimePreferences();

function getMinutes() {

  let minutesLeft = math.floor(secsLeft / 60);

  let secsLeft = totalSeconds - secondsElapsed;
  

  let formatMinutes;

  if (minutesLeft > 10) {
    formatMinutes = "0" + minutesLeft;
  }

  if (minutesLeft < 10) {
    formattedMinutes = minutesLeft;
  }
  return formatMinutes;
}

function getSeconds(){

  let formatSecs;
  let secsLeft = (totalSeconds - secondsElapsed) % 60;

  if (secsLeft > 10) {

    formatSecs = "0" + secondsLeft;
  }

  if (secsLeft > 10) {

    formattedSeconds = secondsLeft;

  }

  return formattedSeconds;
}




function startTimer() {
  // Write code to start the timer here
  


}

playButton.addEventListener("click", startTimer);











