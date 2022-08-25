const { Author, Book } = require("../model/model");

const bookController = {
    //ADD A BOOK
    addABook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            //Kiểm tra mục nhập có tác giả không
            if (req.body.author) {
                //Tìm id của tác giả trùng với id được nhập vào từ phía người gửi request
                const author = Author.findById(req.body.author);
                //Cập nhật thêm id book vào Bảng Author
                await author.updateOne({ $push: { books: saveBook._id } });
            }
            // else {
            //     await Book.updateOne(
            //         {
            //             _id: saveBook._id,
            //         },
            //         {
            //             name: "Dang cap nhat",
            //         }
            //     );
            // }
            res.status(200).json(saveBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET ALL BOOK
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET A BOOK
    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Update A Book
    updateABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (error) {
            res.status(200).json(error);
        }
    },

    //DELETE BOOK
    deleteBook: async (req, res) => {
        try {
            //Tìm những cuốn sách có params(id) và pull(lấy nó ra) khỏi Aray book trong bảng Author
            await Author.updateMany({ books: req.params.id }, { $pull: { books: req.params.id } });
            //TÌm và xoá tất cả cuốn sách có trong bảng Book
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Succsessfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
module.exports = bookController;
