// Thư mục routes chứa các phương thức(method)
const bookController = require("../controller/bookController");
const { route } = require("./author");
const router = require("express").Router();

//ADD A BOOK
router.post("/", bookController.addABook);

//GET ALL BOOK
router.get("/", bookController.getAllBook);

//GET A BOOK
router.get("/:id", bookController.getABook);

//UPDATE A BOOK
router.put("/:id", bookController.updateABook);

//DELETE BOOK
router.delete("/:id", bookController.deleteBook);

module.exports = router;
