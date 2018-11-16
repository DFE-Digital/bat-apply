const express = require("express");
const router = express.Router();
// -------------------------------------------------------------- BAT Apply routes
const registerRouter = require("./routes/register.js");
const dashboardRouter = require("./routes/dashboard.js");
const personalDetailsRouter = require("./routes/personal-details.js");
// -------------------------------------------------------------- homepage router
router.get("/your-application", dashboardRouter);
router.get("/register/:step", registerRouter);
router.get("/personal-details/:step", personalDetailsRouter);
// -------------------------------------------------------------- export
module.exports = router;