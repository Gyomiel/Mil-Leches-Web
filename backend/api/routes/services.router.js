const router = require("express").Router();
const {
  getAllServices,
  getOneService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/services.controller");

router.get("/", getAllServices);
router.get("/:id", getOneService);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
