const express = require("express");
const router = express.Router();
// -------------------------------------------------------------- BAT Apply routes
const homeRouter = require("./routes/home-routes.js");
// -------------------------------------------------------------- homepage router
router.get("/home/:route", homeRouter);
// -------------------------------------------------------------- export
module.exports = router;