const path = require("path");
const router = require("express").Router();
const apiRoutes = requrie("./api");

router.use("api", apiRoutes);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
