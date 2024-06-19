const router = require("express").Router();

router.use("/user", require("./users.router"));
router.use("/auth", require("./auth.router.js"));
router.use("/booking", require("./bookings.router"));
router.use("/comments", require("./comments.router"));
router.use("/pets", require("./pets.router"));
router.use("/services", require("./services.router"));
router.use("/thread", require("./thread.router"));


module.exports = router;
