const mongoose = require("mongoose");

// Tao Databse Bảng Author
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: String,
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

// Tao Database Bảng book
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    genres: {
        type: [String],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
    },
});

let Author = mongoose.model("Author", authorSchema);
let Book = mongoose.model("Book", bookSchema);

module.exports = { Author, Book };
