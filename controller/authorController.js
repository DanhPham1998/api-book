const { Author, Book } = require("../model/model");

const authorController = {
    //ADD ATHOR
    addAthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body); // Tạo biến dể hứng giá trị từ người dùng khi gửi post yêu cầu.
            const saveAuthor = await newAuthor.save(); //Tạo biến dể Save vào DB, await để chờ thực thi.
            res.status(200).json(saveAuthor); // Trả dữ liệu hiển thị Json cho người dùng
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET ALL ATHOR
    getAllAuthor: async (req, res) => {
        try {
            const author = await Author.find();
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Get AN AUTHOR
    getAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Update AN AUTHOR
    updateAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({ $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //DELETE AUTHOR
    deleteAuthor: async (req, res) => {
        try {
            //Tìm những cuốn sách có params(id) và trả về null
            await Book.updateMany({ author: req.params.id }, { author: null });
            // Tìm và xoá tác giả có params(id)
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Succsessfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = authorController;
