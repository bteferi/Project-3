const router = require("express").Router();
const bookRoutes = require("./jornals");

// Book routes
router.use("/jornals", bookRoutes);

module.exports = router;
