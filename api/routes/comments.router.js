const router = require("express").Router();
const {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.get("/:id", getOneComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
