// Performing GET requests to the OMDB API and logging the responses to the console
$.ajax({
    url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://www.omdbapi.com/?t=inception&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://www.omdbapi.com/?t=the+dark+night&y=&plot=short&apikey=trilogy",
    method: "GET"
}).then(function (response) {
    console.log(response);
});
// ---------------------------------------------------------

console.log("Because our AJAX requests are asynchronous, this line of code will most likely log first");