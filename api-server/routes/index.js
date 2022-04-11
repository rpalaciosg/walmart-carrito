"use strict";

const express = require("express");
const router = express.Router();
const healthcheck = require("./healthcheck");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/healthcheck", healthcheck);

module.exports = router;
