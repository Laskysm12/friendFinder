var path = require('path');

// Module.exports here allows me to use this data in other files
module.exports = function (app) {

    // Viewed at http://localhost:3000 (Shows the user the home page/root)
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}