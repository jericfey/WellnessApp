const router = require("express").Router();
const dashboardRoutes = require("./dashboard");

rotuer.use("/dashboard", dashboardRoutes);

module.export = router;
