const express = require("express");

const router = express.Router();

const {
  nearbyHomestays,
} = require("../controllers/homestayController");

router.get("/nearby", nearbyHomestays);

module.exports = router;