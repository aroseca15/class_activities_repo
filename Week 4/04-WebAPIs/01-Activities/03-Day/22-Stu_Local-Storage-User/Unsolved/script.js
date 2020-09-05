const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#sign-up");
const msgDiv = document.querySelector("#msg");
const userEmailSpan = document.querySelector("#user-email");
const userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  let askE = localStorage.getItem("askE");
  let askP = localStorage.getItem("askP");

  if (!email || !password){
    return
  }

  userEmailSpan.textContent = email;
  userEmailSpan.textContent = password;

  
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storgage
  
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  let askE = askEInput.value;
  let askP = askPInput.value;

  if (askE === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (askP === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // Save email and password to localStorage and render the last registered.
  }
});
