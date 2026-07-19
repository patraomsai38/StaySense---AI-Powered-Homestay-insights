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

    // Validation
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

    res.status(201).json({
      success: true,
      message: "Booking Successful",
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
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
    const bookings = await prisma.booking.findMany({
      where: {
        userId: Number(req.params.userId),
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);

    res.status(500).json({
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

    console.log("Booking ID:", bookingId);

    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
    });

    console.log("Booking Found:", booking);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    await prisma.booking.delete({
      where: {
        id: bookingId,
      },
    });

    console.log("Booking Deleted Successfully");

    return res.status(200).json({
      success: true,
      message: "Booking Cancelled Successfully",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  cancelBooking,
};