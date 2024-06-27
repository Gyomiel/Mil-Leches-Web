const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile,
  getPetsitterServices,
  addPetsitterServices,
  uploadImage,
} = require("../controllers/users.controller");
const { checkAuth, checkAdmin } = require("../middlewares/auth");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../../uploads"); // Ruta absoluta a la carpeta uploads
    // Asegúrate de que la carpeta existe; si no, créala
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/profile", checkAuth, getProfile);
router.post("/profile", checkAuth, updateProfile);

router.get("/profile/services", checkAuth, getPetsitterServices);
router.post("/profile/services", checkAuth, addPetsitterServices);
router.post("/profile/image", checkAuth, upload.single("file"), uploadImage);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", checkAuth, createUser);
router.put("/:id", checkAuth, updateUser);
router.delete("/:id", checkAuth, deleteUser);

module.exports = router;
