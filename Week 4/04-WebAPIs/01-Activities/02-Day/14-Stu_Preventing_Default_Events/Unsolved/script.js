
const split = document.querySelector("#split")
const submit = document.querySelector("#submit");
const tipPercent = document.querySelector("#tip-percentage");
const tipAmount = docment.querySelector("#tip-amount");
const newTotal = document.querySelector("#new-total");
const mealPrice = document.querySelector("#total");

function calculateTip(total, tipPercent) {
    let roundResult = (total * tipPercent).toFixed(2);
    return roundResult;
}

function addTip(event) {
    submit.addEventListener("click", function (event) {
        event.preventDefult();
        let tipPercentage = tipPercent.value * .01;
        let total = newTotal.value;
        let tipAmount = calculateTip(total, tipPercentage);
        let newTotal = calculateTotal(tipAmount, total);
        document.querySelector("#tip-amount").textContent = tipAmount;
        document.querySelector("#new-total").textContent = newTotal.toFixed(2);
        console.log(event);
    }
},


function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
}

submit.addEventListener("click", addTip);









// Submit.addEventListener("click",function (event){
//     event.preventDefult();

//     console.log(event);

//     let reponse = "Your recommended tip is" + 
// })