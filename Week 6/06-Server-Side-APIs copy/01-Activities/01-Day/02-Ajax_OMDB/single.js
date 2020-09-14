// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
let title = "space+jam";
let queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.Runtime);
});
// ---------------------------------------------------------

console.log("This console.log will probably happen first because of asynchronicity.");
let x = 2;
let y = 10;
let z = 13;
console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);