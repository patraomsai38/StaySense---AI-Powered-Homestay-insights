const express = require("express");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const {
  createBooking,
  getBookings,
  cancelBooking,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", requireAuth, createBooking);

// Get All Bookings of Logged-in User
router.get("/:userId", requireAuth, getBookings);

// Cancel Booking
router.delete("/:id", requireAuth, cancelBooking);

module.exports = router;