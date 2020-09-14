// This is our API key. Add your own API key between the ""
let APIKey = "f67fdb4a68c4728ac9398f3aa4b198ce";

// Here we are building the URL we need to query the database
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;


// const place = "Bujumbura,Burundi"
// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // Create CODE HERE to Log the queryURL
    console.log(queryURL);
    // Create CODE HERE to log the resulting object
    console.log(response);

    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    let temp2Fah = (response.main.temp - 273.15) * 1.80 + 32;
    // Create CODE HERE to transfer content to HTML
    $('.temp').text('Temperature:' + temp2Fah.toFixed(1) + "F");
    // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
    $('.city').html('<h1>' + response.name + 'Current Weather</h1>');
    $('.wind').text('Wind Speed:' + response.wind.speed.toFixed(1));
    $('.humidity').text('Humidity Level: '+ response.main.humidity + '%');
    // Create CODE HERE to dump the temperature content into HTML


});