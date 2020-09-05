const gandalf = {
    "real name": "Gandalf",
    "age (est)": 11000,
    "race": "Maia",
    "haveRetirementPlan": true,
    "aliases": [
        "Greyhame",
        "Stormcrow",
        "Mithrandir",
        "Gandalf the Grey",
        "Gandalf the White"
    ],
    "favoriteSong": {
        "name": "The Road Goes Ever On",
        "artist": "Bilbo Baggins"
    }
};

// Object properties can be accessed with "bracket notation"
alert("My name is " + gandalf["real name"]);

// Or with "dot notation" if the property has no spaces
if (gandalf.haveRetirementPlan) {

    // Or with a variable that matches the name of the property
    var ageProperty = "age (est)";
    var years = gandalf[ageProperty];
    alert("My 401k has been gathering interest for " + years + " years!");
}

// You can access arrays and their properties from an object
alert("I have more than " + gandalf.aliases.length + " aliases");

// Non-existent properties return undefined
alert("My designation is " + gandalf["designation"]);

// Objects can also contain other objects, whose properties can be accessed by chaining dot notation
alert("My favorite song was written by " + gandalf.favoriteSong.artist);

// Or with bracket notation
alert("My favorite song is " + gandalf["favoriteSong"]["name"]);