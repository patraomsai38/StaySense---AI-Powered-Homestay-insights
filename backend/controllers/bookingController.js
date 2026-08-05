const prisma = require("../prismaClient");

// ==============================
// Create Booking
// ==============================

const createBooking = async (req, res) => {
  try {
    const {
      userId,
      homestayName,
      address,
      latitude,
      longitude,
      estimatedPrice,
      category,
      image,
      checkIn,
      checkOut,
      guests,
    } = req.body;

    if (
      !userId ||
      !homestayName ||
      !address ||
      !latitude ||
      !longitude ||
      !checkIn ||
      !checkOut ||
      !guests
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: Number(userId),

        homestayName,
        address,

        latitude: Number(latitude),
        longitude: Number(longitude),

        estimatedPrice: Number(estimatedPrice || 0),

        category: category || null,

        image:
          image ||
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",

        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),

        guests: Number(guests),

        status: "Confirmed",
      },
    });

    return res.status(201).json({
      success: true,
      message: "Booking Successful",
      booking,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==============================
// Get User Bookings
// ==============================

const getBookings = async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const bookings = await prisma.booking.findMany({
      where: {
        userId,
      },
      include: {
        homestay: true,
        review: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(bookings);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==============================
// Cancel Booking
// ==============================

const cancelBooking = async (req, res) => {
  try {
    console.log("Cancel Booking API Hit");

    const bookingId = Number(req.params.id);

    const userId = req.user.id;

    console.log("Booking ID:", bookingId);

    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
    });

    console.log("Booking Found:", booking);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    // Ensure booking belongs to logged-in user
    if (booking.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    // Allow cancellation ONLY before check-in
    const today = new Date();

    if (today >= new Date(booking.checkIn)) {
      return res.status(400).json({
        success: false,
        message:
          "This booking can no longer be cancelled because the stay has already started or completed.",
      });
    }

    // Delete review first (if any)
    await prisma.review.deleteMany({
      where: {
        bookingId: bookingId,
      },
    });

    // Delete booking
    await prisma.booking.delete({
      where: {
        id: bookingId,
      },
    });

    console.log("Booking Deleted Successfully");

    return res.status(200).json({
      success: true,
      message: "Booking Cancelled Successfully.",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  cancelBooking,
};