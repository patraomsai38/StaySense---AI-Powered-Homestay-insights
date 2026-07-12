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

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          Loading bookings...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 dark:bg-gray-900 p-8">

        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-10">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-xl">
            You have no bookings yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >

                <img
                  src={booking.homestay.image}
                  alt={booking.homestay.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                <h2 className="text-2xl font-bold mt-4">
                  {booking.homestay.name}
                </h2>

                <p className="text-gray-600 dark:text-gray-300">
                  📍 {booking.homestay.location}
                </p>

                <p className="mt-3">
                  <strong>Check In:</strong>{" "}
                  {new Date(booking.checkIn).toLocaleDateString()}
                </p>

                <p>
                  <strong>Check Out:</strong>{" "}
                  {new Date(booking.checkOut).toLocaleDateString()}
                </p>

                <p>
                  <strong>Guests:</strong> {booking.guests}
                </p>

                <p className="font-bold text-green-700 mt-3">
                  ₹{booking.homestay.price}
                </p>

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