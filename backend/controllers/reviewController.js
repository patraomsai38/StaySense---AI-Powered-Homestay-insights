const prisma = require("../prismaClient");

// =========================
// Create Review
// =========================
const createReview = async (req, res) => {
  try {
    const {
      bookingId,
      rating,
      feedback,
      cleanliness,
      hospitality,
      foodQuality,
      locationRating,
      valueForMoney,
    } = req.body;

    const userId = req.user.id;

    if (!bookingId || !rating || !feedback) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // =========================
    // Check booking exists
    // =========================

    const booking = await prisma.booking.findUnique({
      where: {
        id: Number(bookingId),
      },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    // =========================
    // Check booking belongs to logged-in user
    // =========================

    if (booking.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    // =========================
    // Allow review only after checkout
    // =========================

    const today = new Date();

    if (today < new Date(booking.checkOut)) {
      return res.status(400).json({
        success: false,
        message: "You can review this stay only after checkout.",
      });
    }

    // =========================
    // Prevent duplicate review
    // =========================

    const existingReview = await prisma.review.findUnique({
      where: {
        bookingId: Number(bookingId),
      },
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this booking.",
      });
    }

    // =========================
    // Create Review
    // =========================

    const review = await prisma.review.create({
      data: {
        bookingId: Number(bookingId),
        userId,

        rating: Number(rating),
        feedback,

        cleanliness:
          cleanliness !== undefined
            ? Number(cleanliness)
            : null,

        hospitality:
          hospitality !== undefined
            ? Number(hospitality)
            : null,

        foodQuality:
          foodQuality !== undefined
            ? Number(foodQuality)
            : null,

        locationRating:
          locationRating !== undefined
            ? Number(locationRating)
            : null,

        valueForMoney:
          valueForMoney !== undefined
            ? Number(valueForMoney)
            : null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully.",
      review,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =========================
// Get All Reviews
// =========================

const getReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
        booking: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      reviews,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createReview,
  getReviews,
};