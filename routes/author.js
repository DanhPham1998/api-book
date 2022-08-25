// Thư mục routes chứa các phương thức(method)
const authorController = require("../controller/authorController");

const router = require("express").Router();

//ADD ATHOR
router.post("/", authorController.addAthor);

//GET ALL AUTHOR
router.get("/", authorController.getAllAuthor);

//GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

//UPDATE AN AUTHOR
router.put("/:id", authorController.updateAnAuthor);

//DELETE AUTHOR
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
