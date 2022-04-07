"use strict";

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Ok",
    timestamp: Date.now(),
    date: new Date(),
  };
  try {
    res.status(200).send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

module.exports = router;
