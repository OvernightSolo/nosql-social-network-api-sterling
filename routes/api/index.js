// Require express router
const router = require("express").Router();

// Set user and thought routes
const userRoutes = require("./userRoutes");
const thoughtsRoutes = require("./thoughtsRoutes");

// Add '/users' to created routes
router.use("/users", userRoutes);

// Add '/thoughts' to created routes
router.use("/thoughts", thoughtsRoutes);

// Export module router
module.exports = router;
