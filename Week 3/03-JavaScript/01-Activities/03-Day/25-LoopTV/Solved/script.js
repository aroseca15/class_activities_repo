// Creating an empty array for our favorite TV shows.
let favTVshows = [];
let tvShow;

// For-Loop that will repeat three times.
for (let i = 1; i < 4; i++) {

    // Each time it asks the user for their #1, #2, or #3 TV show.
    tvShow = prompt("What's your #" + i + " favorite TV show?");

    // It then takes the user's response and "pushes" (or adds) the variable to the end of the favTVshows array.
    favTVshows.push(tvShow);
}


// We then loop through the favTVshows array...
for (let j = 0; j < favTVshows.length; j++) {

    // ...and create alert messages listing out each show in our array.
    alert(favTVshows[j]);
}