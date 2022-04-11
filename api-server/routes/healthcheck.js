"use strict";

const express = require("express");
const router = express.Router();
const logger = require("../services/logger");

/**
 * @method GET
 * @argument /healthcheck
 * @description Devuelve status del servidor
 *
 */
router.get("/", async (req, res, next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Ok",
    timestamp: Date.now(),
    date: new Date(),
  };
  try {
    res.status(200).send(healthcheck);
    logger.info(
      `Server Request: GET /healthcheck, {${req.protocol}://${req.get("host")}${
        req.url
      }}, result -> `,
      healthcheck
    );
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
    logger.error(
      `Server Request: GET /healthcheck, {${req.protocol}://${req.get("host")}${
        req.url
      }},  result -> `,
      healthcheck
    );
  }
});

module.exports = router;
