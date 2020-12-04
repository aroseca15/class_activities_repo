const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ssTm@1722",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
connection.query('Select * From quotes;', function(res, err){
res.render('index,', {quotes: data});
if(err){
  res.status(505).end();
}
});
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {
  connection.query('Select * From quotes;', function(res, err){
    res.render('index,', {quotes: data});
    if(err){
      res.status(505).end();
    }
    });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  connection.query('Select * From quotes;', function(res, err){
    res.render('index,', {quotes: data});
    if(err){
      res.status(505).end();
    }
    });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  connection.query('Select * From quotes;', function(res, err){
    res.render('index,', {quotes: data});
    if(err){
      res.status(505).end();
    }
    });
});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  connection.query('Select * From quotes;', function(res, err){
    res.render('index,', {quotes: data});
    if(err){
      res.status(505).end();
    }
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
