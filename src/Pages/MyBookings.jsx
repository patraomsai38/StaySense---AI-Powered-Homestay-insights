import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:5000/api/bookings/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to load bookings"
      );
    } finally {
      setLoading(false);
    }
  };
const cancelBooking = async (bookingId) => {
  const confirmCancel = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (!confirmCancel) return;

  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/bookings/${bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );

    alert("Booking cancelled successfully.");
  } catch (error) {
    console.error("Delete Error:", error);

    alert(
      error.response?.data?.message ||
      error.message ||
      "Failed to cancel booking."
    );
  }
};

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-xl">
          Loading bookings...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-black p-8">

        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-10">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold mb-2">
              No Bookings Found
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Book your first homestay to see it here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
              >

                <img
                  src={
                    booking.image ||
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                  }
                  alt={booking.homestayName}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
                    {booking.homestayName}
                  </h2>

                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    📍 {booking.address}
                  </p>

                  {booking.category && (
                    <p className="mt-2">
                      🏡 <strong>Category:</strong> {booking.category}
                    </p>
                  )}

                  <p className="mt-3">
                    📅 <strong>Check In:</strong>{" "}
                    {new Date(
                      booking.checkIn
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    📅 <strong>Check Out:</strong>{" "}
                    {new Date(
                      booking.checkOut
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    👥 <strong>Guests:</strong>{" "}
                    {booking.guests}
                  </p>

                  <p className="mt-2">
                    📌 <strong>Status:</strong>{" "}
                    <span className="text-green-600 font-semibold">
                      {booking.status}
                    </span>
                  </p>

                  <p className="text-2xl font-bold text-green-700 mt-4">
                    ₹{booking.estimatedPrice}
                  </p>

                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Cancel Booking
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default MyBookings;