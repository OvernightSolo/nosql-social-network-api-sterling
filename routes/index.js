// Require express router
const router = require("express").Router();

// Import all API routes
const apiRoutes = require("./api");

// Add '/api' prefix to all api routes
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("Wrong route...");
});

module.exports = router;
