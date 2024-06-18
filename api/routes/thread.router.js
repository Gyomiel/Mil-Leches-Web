const router = require("express").Router();
const {
  getAllThreads,
  getOneThread,
  createThread,
  updateThread,
  deleteThread,
} = require("../controllers/thread.controller");

router.get("/", getAllThreads);
router.get("/:id", getOneThread);
router.post("/", createThread);
router.put("/:id", updateThread);
router.delete("/:id", deleteThread);

module.exports = router;
