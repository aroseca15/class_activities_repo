let eatSteak = confirm("Do you eat steak?");

if (eatSteak) {
    alert("Here's a steak sandwich!");
}
else {
    alert("Here's a Tofu Stir Fry!");
}

let birthYear = prompt("What year were you born?");

if (parseInt(birthYear) < 1997) {
    alert("SAKE! SAKE! SAKE!");
}
else if (parseInt(birthYear) > 1997) {
    alert("No Sake For You!");
}
else if (birthYear === null) {
    alert("Only 21 or Older Allowed!");
}