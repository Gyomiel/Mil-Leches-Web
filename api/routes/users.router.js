const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const { checkAuth } = require("../middlewares/auth");

router.get("/", checkAuth, getAllUsers);
router.get("/:id", checkAuth, getOneUser);
router.post("/", checkAuth, createUser);
router.put("/:id", checkAuth, updateUser);
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;
