let myFavoriteBands = ["joan jett and the blackhearts", "carol king", "colbie caillat", "jack johnson", "band perry"];

console.log(myFavoriteBands);

let userPrefer = prompt("Which artist or band is your favorite?");

let userLower = userPrefer.toLowerCase();

if (myFavoriteBands.indexOf(userLower) === -1) {
    alert("I'm sure they're nice. Just not my favorite.");
}

else {
    alert("Now that's gooood music!!!");
}
// else {
//     alert("OMG! I love them too!");
// }


