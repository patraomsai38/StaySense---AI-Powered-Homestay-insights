const prisma = require("../prismaClient");

const createBooking = async (req, res) => {
  try {
    const {
      userId,
      homestayId,
      checkIn,
      checkOut,
      guests,
    } = req.body;

    const booking = await prisma.booking.create({
      data: {
        userId: Number(userId),
        homestayId: Number(homestayId),
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests: Number(guests),
      },
    });

    res.status(201).json({
      message: "Booking Successful",
      booking,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: Number(req.params.userId),
      },
      include: {
        homestay: true,
      },
    });

    res.json(bookings);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
};