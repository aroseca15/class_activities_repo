const submitEl = document.querySelector("#submit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  let response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});