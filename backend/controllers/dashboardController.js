const prisma = require("../prismaClient");

const getDashboardData = async (req, res) => {
  try {

    // KPI Cards
    const totalBookings = await prisma.booking.count();

    const confirmedBookings = await prisma.booking.count({
      where: {
        status: "Confirmed",
      },
    });

    const today = new Date();

    const upcomingBookings = await prisma.booking.count({
      where: {
        checkIn: {
          gt: today,
        },
      },
    });

    // Reviews
    const reviews = await prisma.review.findMany();

    const averageRating =
      reviews.length === 0
        ? 0
        : Number(
            (
              reviews.reduce((sum, r) => sum + r.rating, 0) /
              reviews.length
            ).toFixed(1)
          );

    // Recent Bookings
    const recentBookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    // Recent Reviews
    const recentReviews = await prisma.review.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    res.json({
      success: true,

      totalBookings,
      confirmedBookings,
      upcomingBookings,
      averageRating,

      recentBookings,
      recentReviews,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Dashboard Error",
    });

  }
};

module.exports = {
  getDashboardData,
};