(function () {
    "use strict";

    // modules
    var express = require('express');
    var app = express();
    var server = require('http').Server(app);
    var routes = require('./app/routes/routes.js');
    var bodyParser = require('body-parser');

    // Start the server to listen for incoming requests on port 9090.
    server.listen(9090);

    app.use(bodyParser.json());

    // Static files in the public folder
    app.use(express.static(__dirname + '/client'));

    // Wire up the router.
    app.use('/', routes);

    // Create the app module
    module.exports = app;
}());
