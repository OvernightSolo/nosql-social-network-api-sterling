// Require express router
const router = require("express").Router();

// Set requirements from users-controller
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

// GET/POST routes that point to api/users
router.route("/").get(getAllUsers).post(createUsers);

// GET/PUT/DELETE routes that point to /api/users/:id
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

// POST/DELETE routes that point to /api/users/:userId/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

// Export module router
module.exports = router;
