// var path = require('path');

// Pulling in data to be displayed in API routes
var friendsData = require('../data/friends.js');

// Here "app" represents express
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })

}
