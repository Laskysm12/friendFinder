// var path = require('path');

// Pulling in data to be displayed in API routes
var friendsData = require('../data/friends.js');

// Here "app" represents express
module.exports = function (app) {

    // GET route with the url /api/friends used to display a JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })

}
