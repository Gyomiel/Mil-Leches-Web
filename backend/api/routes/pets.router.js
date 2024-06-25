const router = require("express").Router();
const {
  getAllPets,
  getOnePet,
  createPet,
  updatePet,
  deletePet,
  getPetProfile,
  updatePetProfile,
} = require("../controllers/pets.controller");
const { checkAuth } = require("../middlewares/auth");

router.get("/", getAllPets);
router.get("/:id", getOnePet);
router.post("/", createPet);
router.get("/profile", checkAuth, getPetProfile);
router.post("/profile", checkAuth, updatePetProfile);
router.put("/:id", updatePet);
router.delete("/:id", deletePet);

module.exports = router;
