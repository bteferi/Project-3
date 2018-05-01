const router = require("express").Router();
const jornalsController = require("../../controllers/jornalsController");

// Matches with "/api/journals"
router.route("/")
  .get(jornalsController.findAll)
  .post(jornalsController.create);

// Matches with "/api/journals/:id"
router
  .route("/:id")
  .get(jornalsController.findById)
  .put(jornalsController.update)
  .delete(jornalsController.remove);

module.exports = router;
