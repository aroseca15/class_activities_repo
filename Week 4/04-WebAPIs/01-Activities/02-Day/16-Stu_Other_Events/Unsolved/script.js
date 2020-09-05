const eventType = document.querySelector("#event-type"); 
const mouseEventsEl = document.querySelector("#click-events");
const keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  let value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

function keydown(event) {
  let keyPush = event.key;
  let keyCode = event.code; 
  document.querySelector("#key").textContent = keyPush;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "keydown event"
}

function keyup() {
  document.querySelector("#status").innerHTML = "keyup event"
}

function click(event) {
  let target = event.target.textContent;
  let x = event.clientX;
  let y = event.clientY; 
  document.querySelector("#target").textContent = target;
  document.querySelector("#x").textContent = x;
  document.querySelector("#y").textContent = y;
}

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
document.addEventListener("click", click);
eventType.addEventListener("change", toggleDisplay);