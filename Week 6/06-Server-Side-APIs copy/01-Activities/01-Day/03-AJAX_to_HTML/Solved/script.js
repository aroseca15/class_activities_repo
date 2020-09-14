// The below code fills in the first row of the table
let firstMovie = "Mr. Nobody";
let firstQueryURL = "https://www.omdbapi.com/?t=" + firstMovie + "&apikey=trilogy";

$.ajax({
    url: firstQueryURL,
    method: "GET"
}).then(function (response) {
    // Create a new table row element
    let tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    let titleTd = $("<td>").text(response.Title);
    let yearTd = $("<td>").text(response.Year);
    let actorsTd = $("<td>").text(response.Actors);

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
});

let secondMovie = "The Little Mermaid";
let secondQueryURL = "https://www.omdbapi.com/?t=" + secondMovie + "&apikey=trilogy";

$.ajax({
    url: secondQueryURL,
    method: "GET"
}).then(function (response) {
    let tBody = $("tbody");
    let tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    let titleTd = $("<td>").text(response.Title);
    let yearTd = $("<td>").text(response.Year);
    let actorsTd = $("<td>").text(response.Actors);
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
});

let thirdMovie = "The Lion King";
let thirdQueryURL = "https://www.omdbapi.com/?t=" + thirdMovie + "&apikey=trilogy";

$.ajax({
    url: thirdQueryURL,
    method: "GET"
}).then(function (response) {
    let tBody = $("tbody");
    let tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    let titleTd = $("<td>").text(response.Title);
    let yearTd = $("<td>").text(response.Year);
    let actorsTd = $("<td>").text(response.Actors);
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
});