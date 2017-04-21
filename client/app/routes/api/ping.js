(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();


    var PingResource = require('../../resources/PingResource');

    router.get('/', function (req, res) {
        res.type('json');

        PingResource(function (data) {
            res.send(data);
        });
    });


    module.exports = router;
}());
