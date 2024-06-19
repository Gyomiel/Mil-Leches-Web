const router = require("express").Router();
const {
  getAllPets,
  getOnePet,
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/pets.controller");

router.get("/", getAllPets);
router.get("/:id", getOnePet);
router.post("/", createPet);
router.put("/:id", updatePet);
router.delete("/:id", deletePet);

module.exports = router;
