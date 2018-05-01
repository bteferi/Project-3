const router = require("express").Router();
const journalRoutes = require("./jornals");

// Journal routes
router.use("/jornals", journalRoutes);

module.exports = router;
