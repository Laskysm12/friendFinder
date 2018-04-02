// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



// ***** THESE GO ON THE SPECIFIC ROUTES.JS Files
// Routes
// ======================================================================

// Basic route that sends the user first to the Home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "home.html"));
});

// // Route that sends the user to the Survey Page
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(_dirname, "survey.html"));
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  