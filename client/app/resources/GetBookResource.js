(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (id, callback) {
        LibraryDAO.readXMLFile(function (catalog) {
            try {
                callback("200", catalog.searchBookById(id));
            } catch (e) {
                callback("404", "Not Found");
            }
        })
    };
}());