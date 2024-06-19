const router = require("express").Router();
const {
  getAllBookings,
  getOneBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  addUserToBooking,
} = require("../controllers/bookings.controller");

router.get("/", getAllBookings);
router.get("/:id", getOneBooking);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);
router.post("/selection/:ownerId/:petsitterId", addUserToBooking);

module.exports = router;
