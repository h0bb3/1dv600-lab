(function () {
    "use strict";

    var fs = require('fs');
    var Catalog = require('../models/Catalog');
    var xml2js = require('xml2js');

    var LibraryDAO = {

        readXMLFile: function (callback) {
            var parser = new xml2js.Parser();
            fs.readFile(__dirname + '/books.xml', function (err, data) {
                parser.parseString(data, function (err, result) {
                    if (result) {
                        callback(new Catalog(result));
                    } else {
                        console.log("Cannot Read XML File")
                    }
                });
            });
        },

        writeXMLFile: function (catalog) {
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(catalog.bookList);
            fs.writeFile(__dirname + "/books.xml", xml, function (err) {
                if (err) {
                    console.log("Cannot Write XML File")
                }
            });
        }
    };

    module.exports = LibraryDAO;
}());