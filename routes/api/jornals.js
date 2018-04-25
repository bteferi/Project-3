const router = require("express").Router();
const jornalsController = require("../../controllers/jornalsController");

// Matches with "/api/books"
router.route("/")
  .get(jornalsController.findAll)
  .post(jornalsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(jornalsController.findById)
  .put(jornalsController.update)
  .delete(jornalsController.remove);

module.exports = router;
