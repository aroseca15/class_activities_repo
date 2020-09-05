const tipEl = document.querySelector("#tip-percentage");
const totalEl = document.querySelector("#total");
const submitEl = document.querySelector("#submit");
const splitEl = document.querySelector("#split");

function calculateTip(total, tipPercentage) {
  let roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  event.preventDefault();
  let tipPercentage = tipEl.value * .01;
  let total = totalEl.value;
  let tipAmount = calculateTip(total, tipPercentage);
  let newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

function splitTotal(event) {
  event.preventDefault();

  let total = document.querySelector("#new-total").textContent;
  let numPeople = document.querySelector("#num-people").value;
  
  let newTotal = (total / numPeople).toFixed(2);
  document.querySelector("#split-total").textContent = newTotal;
}

submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", splitTotal);
