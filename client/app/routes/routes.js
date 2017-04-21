(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();
    var api = require('./api/api.js');

    router.use(function (req, res, next) {
        // continue doing what we were doing and go to the route
        next();
    });

    router.use('/api', api);

    module.exports = router;
}());
