const express = require("express");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const {
  createReview,
  getReviews,
} = require("../controllers/reviewController");

// Submit Review
router.post("/", requireAuth, createReview);

// Get All Reviews
router.get("/", getReviews);

module.exports = router;