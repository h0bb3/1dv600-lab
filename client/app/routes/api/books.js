(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();

    var AddBookResource = require('../../resources/AddBookResource');
    var EditBookResource = require('../../resources/EditBookResource');
    var GetBookResource = require('../../resources/GetBookResource');
    var GetBooksResource = require('../../resources/GetBooksResource');
    var RemoveBookResource = require('../../resources/RemoveBookResource');



    router.get('/', function (req, res) {
        res.type('json');

        GetBooksResource(function (status, data) {
            res.status(status).send(data);
        }, req.query.title);
    });


    router.put('/', function (req, res) {
        res.type('json');

        AddBookResource(req.body, function (status) {
            res.status(status).send("{}");
        });
    });


    router.route('/:bookId')
        .get(function (req, res) {
            res.type('json');
            GetBookResource(req.params.bookId, function (status, data) {
                res.status(status).send(data);
            });
        })

        .post(function (req, res) {
            res.type('json');
            EditBookResource(req.params.bookId, req.body, function (status) {
                res.status(status).send("{}");
            });
        })

        .delete(function (req, res) {
            res.type('json');
            RemoveBookResource(req.params.bookId, function (status) {
                res.status(status).send("{}");
            });
        });

    module.exports = router;
}());
