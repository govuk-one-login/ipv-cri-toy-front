const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.redirect("/oauth2/callback");
});
module.exports = router;
