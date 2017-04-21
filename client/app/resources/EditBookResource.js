(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (id, data, callback) {
        LibraryDAO.readXMLFile(function (catalog) {
            try {
                catalog.updateBook(id, data);
                LibraryDAO.writeXMLFile(catalog);
                callback("200");
            } catch (e) {
                callback("404");
            }
        })
    };
}());