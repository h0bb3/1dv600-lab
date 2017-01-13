(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();
    var books = require('./books');
    var ping = require('./ping');


    router.use('/books', books);
    router.use('/ping', ping);

    module.exports = router;
}());
