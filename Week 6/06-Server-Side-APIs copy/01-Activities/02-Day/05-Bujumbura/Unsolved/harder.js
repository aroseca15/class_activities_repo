    // Things to accomplish:
    // Get an API Key from OpenWeatherMap API
    let APIKey = "f67fdb4a68c4728ac9398f3aa4b198ce";
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

    // Create an AJAX call to retrieve data Log the data in console
$.ajax({
url: queryURL,
method: 'GET'
}).then(function(response){
console.log(queryURL);
console.log(response);

})
    // Log the data in HTML
