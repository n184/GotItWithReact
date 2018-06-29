const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.createItem)
  .delete(usersController.remove);

 router
 	.route("/:userid/items/:itemid")
 	.put(usersController.updateData)
 	.delete(usersController.removeItem);

module.exports = router;
