function getLocation() {
    // Make sure browser supports this feature
    if (navigator.geolocation) {
        // Provide our showPosition() function to getCurrentPosition
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}

// This will get called after getCurrentPosition()
function showPosition(position) {
    // Grab coordinates from the given object
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

    // Call our next function, passing on the coordinates
    redirect(lat, lon);
}

function redirect(lat, lon) {
    // Compare latitude and longitude values
    if (lat >= 30 && lon <= -100) {
        // Redirect to a new page
        window.location.href = "western.html";
    }
    else {
        window.location.href = "eastern.html";
    }
}

// See if user is on Windows
if (navigator.userAgent.indexOf("Windows") !== -1) {
    alert("Welcome, Windows user!");
    getLocation();
}
// Then check for macOS
else if (navigator.userAgent.indexOf("Mac") !== -1) {
    alert("Welcome, Mac user!");
    getLocation();
}
// I give up
else {
    alert("I don't know what you're using...");
}