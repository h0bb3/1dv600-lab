(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (data, callback) {
        LibraryDAO.readXMLFile(function (catalog) {
            try {
                catalog.addBook(data);
                LibraryDAO.writeXMLFile(catalog);
                callback("200");
            } catch (e) {
                callback("404");
            }
        })
    };
}());