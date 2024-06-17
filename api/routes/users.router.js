const router = require("express").Router();
const { getAllUsers } = require("../controllers/users.controller");

router.get("/", getAllUsers);

module.exports = router;
