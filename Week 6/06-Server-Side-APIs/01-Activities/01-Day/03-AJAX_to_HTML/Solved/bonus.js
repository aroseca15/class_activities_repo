// The createRow function takes data returned by OMDB and appends the table data to the tbody
let createRow = function (data) {
    // Create a new table row element
    let tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    let titleTd = $("<td>").text(data.Title);
    let yearTd = $("<td>").text(data.Year);
    let actorsTd = $("<td>").text(data.Actors);

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
};

// The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
let searchOMDB = function (movie) {
    let queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        createRow(response);
    });
};

// Search the OMDB API for the following movies, and append table rows for each
searchOMDB("Mr. Nobody");
searchOMDB("The Little Mermaid");
searchOMDB("The Lion King");
