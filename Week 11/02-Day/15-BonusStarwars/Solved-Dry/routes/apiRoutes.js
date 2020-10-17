// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app, characters) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // Displays all characters
    app.get("/api/characters", function (req, res) {
        return res.json(characters);
    });

    // Displays a single character, or returns false
    app.get("/api/characters/:character", function (req, res) {
        let chosen = req.params.character;

        console.log(chosen);

        for (let i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }

        return res.json(false);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/characters", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let newCharacter = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

        console.log(newCharacter);

        characters.push(newCharacter);

        res.json(newCharacter);
    });
}