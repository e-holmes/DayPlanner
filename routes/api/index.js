const router = require("express").Router();
const UserRoutes = require("./user");

// routes
router.use("/user", UserRoutes);


module.exports = router;
