"use strict";

module.exports = class Book {

    constructor(id, title, author, description, genre, price, publishDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.genre = genre;
        this.price = price;
        this.publishDate = publishDate;
    }

    toString() {
        return "Id: " + this.id + ", Title: " + this.title + ", Author: " + this.author + ", Genre: " + this.genre + ", Price: " + this.price + ", Description: " + this.description + ", publishDate: " + this.publishDate;
    }
}
