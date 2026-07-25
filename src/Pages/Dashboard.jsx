import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const bookingRes = await axios.get(
          `http://localhost:5000/api/bookings/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const reviewRes = await axios.get(
          "http://localhost:5000/api/reviews"
        );

        setBookings(bookingRes.data);
        setReviews(reviewRes.data.reviews);
      } catch (err) {
        console.error(err);
        setError("Unable to load dashboard.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // ===========================
  // Booking Statistics
  // ===========================

  const totalBookings = bookings.length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const upcomingBookings = bookings.filter(
    (booking) => new Date(booking.checkIn) > new Date()
  ).length;

  // ===========================
  // Average Rating
  // ===========================

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, review) => sum + review.rating,
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";

  // ===========================
  // Sentiment Chart
  // ===========================

  const positive = reviews.filter(
    (review) => review.rating >= 4
  ).length;

  const neutral = reviews.filter(
    (review) => review.rating === 3
  ).length;

  const negative = reviews.filter(
    (review) => review.rating <= 2
  ).length;

  const sentimentData = [
    {
      name: "Positive",
      value: positive,
    },
    {
      name: "Neutral",
      value: neutral,
    },
    {
      name: "Negative",
      value: negative,
    },
  ];

  // ===========================
  // Booking Trend
  // ===========================

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyBookings = {};

  bookings.forEach((booking) => {
    const month =
      monthNames[new Date(booking.createdAt).getMonth()];

    monthlyBookings[month] =
      (monthlyBookings[month] || 0) + 1;
  });

  const bookingData = Object.keys(monthlyBookings).map(
    (month) => ({
      month,
      bookings: monthlyBookings[month],
    })
  );

  // ===========================
  // Review Analytics
  // ===========================

  const avgCleanliness =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, r) => sum + (r.cleanliness || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  const avgHospitality =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, r) => sum + (r.hospitality || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  const avgFood =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, r) => sum + (r.foodQuality || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  const avgLocation =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, r) => sum + (r.locationRating || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  const avgValue =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, r) => sum + (r.valueForMoney || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  const COLORS = [
    "#16a34a",
    "#facc15",
    "#ef4444",
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900">
        <h1 className="text-xl font-semibold text-red-500">
          {error}
        </h1>
      </div>
    );
  }
  return (
  <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
    <Navbar />

    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-3">
        Host Dashboard
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Monitor bookings, guest reviews and overall homestay performance.
      </p>

      {/* ================= Stats ================= */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-gray-500">Total Bookings</h3>
          <p className="text-4xl font-bold text-green-700 mt-3">
            {totalBookings}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-gray-500">Confirmed</h3>
          <p className="text-4xl font-bold text-green-700 mt-3">
            {confirmedBookings}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-gray-500">Upcoming</h3>
          <p className="text-4xl font-bold text-green-700 mt-3">
            {upcomingBookings}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-gray-500">Average Rating</h3>
          <p className="text-4xl font-bold text-yellow-500 mt-3">
            ⭐ {averageRating}
          </p>
        </div>

      </div>

      {/* ================= Charts ================= */}

      <div className="grid lg:grid-cols-2 gap-8 mb-10">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-green-700 mb-5">
            Booking Trends
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-green-700 mb-5">
            Review Sentiment
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>

              <Pie
                data={sentimentData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {sentimentData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* ================= Review Analytics ================= */}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-10">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Guest Rating Analysis
        </h2>

        <div className="grid md:grid-cols-5 gap-4">

          <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold">Cleanliness</h3>
            <p className="text-3xl font-bold mt-2">
              ⭐ {avgCleanliness}
            </p>
          </div>

          <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold">Hospitality</h3>
            <p className="text-3xl font-bold mt-2">
              ⭐ {avgHospitality}
            </p>
          </div>

          <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold">Food</h3>
            <p className="text-3xl font-bold mt-2">
              ⭐ {avgFood}
            </p>
          </div>

          <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold">Location</h3>
            <p className="text-3xl font-bold mt-2">
              ⭐ {avgLocation}
            </p>
          </div>

          <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold">Value</h3>
            <p className="text-3xl font-bold mt-2">
              ⭐ {avgValue}
            </p>
          </div>

        </div>

      </div>

      {/* ================= Recent Reviews ================= */}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-10">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Recent Guest Reviews
        </h2>

        {reviews.length === 0 ? (

          <p>No reviews yet.</p>

        ) : (

          <div className="space-y-5">

            {reviews.slice(0, 5).map((review) => (

              <div
                key={review.id}
                className="border-b border-gray-200 dark:border-gray-700 pb-4"
              >

                <h3 className="font-semibold text-lg">
                  {review.user.username}
                </h3>

                <p className="text-yellow-500 font-semibold">
                  ⭐ {review.rating}/5
                </p>

                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {review.feedback}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* ================= AI Insights ================= */}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-10">

        <h2 className="text-2xl font-bold text-green-700 mb-5">
          AI Review Insights
        </h2>

        <ul className="space-y-3">

          <li>⭐ Average Guest Rating: {averageRating}</li>

          <li>
            ✅ Highest Rated Service: Hospitality ({avgHospitality})
          </li>

          <li>
            🍽 Food Quality Rating: {avgFood}
          </li>

          <li>
            📍 Location Rating: {avgLocation}
          </li>

          <li>
            💰 Value for Money: {avgValue}
          </li>

        </ul>

      </div>

      {/* ================= Booking List ================= */}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Recent Bookings
        </h2>

        {bookings.length === 0 ? (

          <p>No bookings found.</p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">Homestay</th>
                  <th className="text-left py-3">Check In</th>
                  <th className="text-left py-3">Check Out</th>
                  <th className="text-left py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                {bookings.slice(0, 5).map((booking) => (

                  <tr
                    key={booking.id}
                    className="border-b"
                  >

                    <td className="py-3">
                      {booking.homestayName}
                    </td>

                    <td>
                      {new Date(
                        booking.checkIn
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      {new Date(
                        booking.checkOut
                      ).toLocaleDateString()}
                    </td>

                    <td className="font-semibold text-green-700">
                      {booking.status}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </main>

    <Footer />

  </div>
);
}

export default Dashboard;