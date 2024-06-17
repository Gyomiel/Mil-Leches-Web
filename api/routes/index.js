const router = require("express").Router();

router.use("/user", require("./users.router"));

module.exports = router;