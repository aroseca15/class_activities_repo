const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
// const container = document.querySelector(".container");
const counter = document.querySelector("#count");

let count = 0;

function setCounterText() {
    counter.textCount = count;   
}

increment.addEventListener("click", function (){
count++
console.log(count);
setCounterText();
updateUI();


});

decrement.addEventListener("click", function(){
    if (count > 0){
count--
// console.log(count);
setCounterText();
} updateUI();
});

function updateUI() {
    counter.textContent = count
}


