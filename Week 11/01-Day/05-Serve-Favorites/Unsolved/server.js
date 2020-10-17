const http = require('http');
const fs = require('fs');

const port = 8000;

const server = http.createServer((req, res) => {
    const path = req.url;
    let file ="";
     switch (path) {
            case "/":
                file = "index"
            case "/food":
                file = "food"
            case "/movies":
                file = "movies"
            case "/frameworks":
                file = "frameworks"
            default: 
            file = "index"
        }
        console.log(file);
    fs.readFile(__dirname + `/${file}.html`, function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        
        
        res.end(data);
    })

});

server.listen(port, () => {
    console.log("I'm Listening.")
});

