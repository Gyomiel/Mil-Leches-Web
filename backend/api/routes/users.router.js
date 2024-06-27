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

  
  getPetsitterServices,
  addPetsitterServices,
} = require("../controllers/users.controller");
const { checkAuth, checkAdmin } = require("../middlewares/auth");

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/mybookings", checkAuth, getUserBookings)
router.get("/profile", checkAuth, getProfile);
router.post("/profile", checkAuth, updateProfile);
//router.post("/user/services", checkAuth, addServiceToUser);

router.get("/profile/services", checkAuth, getPetsitterServices);
router.post("/profile/services", checkAuth, addPetsitterServices);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", checkAuth, createUser);
router.put("/:id", checkAuth, updateUser);
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;
