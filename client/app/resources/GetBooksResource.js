(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (callback, title) {
        LibraryDAO.readXMLFile(function (catalog) {
            try {
                if (title == undefined) {
                    callback("200", catalog.toJson());
                }
                else {
                    callback("200", catalog.searchByTitleOrAuthor(title));
                }
            } catch (e) {
                callback("404", "Not Found");
            }
        })
    };
}());