// The below code fills in the first row of the table
// let movie = "Mr. Nobody";
function movies(movie){
let queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // Create and save a reference to new empty table row
    let ta = $('<tr>');
    // console.log(response);
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response obje
    let title = $('<td>').text(response.Title);
    let year = $('<td>').text(response.Year);
    let actors = $('<td>').text(response.Actors);
    // let rating = $('<td>').text(response.Rating);
    console.log(response);

    // Append the td elements to the new table row
    ta.append(title);
    ta.append(year);
    ta.append(actors);
    // ta.append(rating);
    // Append the table row to the tbody element
    $('tbody').append(ta);
    console.log(response);
});
}
    // Repeat the above logic to add rows for two more movies of your choice
movies('Mr. Nobody');
movies('Raising Arizona');
movies('Replicas');
    // BONUS: Once complete, try to make your code as DRY as possible through the use of functions