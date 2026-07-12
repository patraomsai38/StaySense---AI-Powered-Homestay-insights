const express = require("express");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");

router.post("/", requireAuth, createBooking);

router.get("/:userId", requireAuth, getBookings);

module.exports = router;