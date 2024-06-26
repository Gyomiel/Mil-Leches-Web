const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile,
  getUserBookings,

  getPetsitterServidces,
} = require("../controllers/users.controller");
const { checkAuth, checkAdmin } = require("../middlewares/auth");

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/mybookings", checkAuth, getUserBookings)
router.get("/profile", checkAuth, getProfile);
router.post("/profile", checkAuth, updateProfile);
router.get("/profile/services", checkAuth, getPetsitterServidces);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", checkAuth, createUser);
router.put("/:id", checkAuth, updateUser);
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;
