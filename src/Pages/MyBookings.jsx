import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
const [selectedBooking, setSelectedBooking] = useState(null);
const [rating, setRating] = useState(5);
const [feedback, setFeedback] = useState("");

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
  const openReviewModal = (booking) => {
  setSelectedBooking(booking);
  setRating(5);
  setFeedback("");
  setShowReviewModal(true);
};

const submitReview = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/reviews",
      {
        bookingId: selectedBooking.id,
        rating,
        feedback,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Review submitted successfully!");

    setShowReviewModal(false);
    setFeedback("");
    setRating(5);

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to submit review."
    );
  }
};

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

                  <div className="mt-5 flex gap-3">

  <button
    onClick={() => cancelBooking(booking.id)}
    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
  >
    Cancel
  </button>

  <button
    onClick={() => openReviewModal(booking)}
    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
  >
    ⭐ Review
  </button>

</div>
                </div>

              </div>

            ))}

          </div>
        )}

      </div>
      {showReviewModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-md">

      <h2 className="text-2xl font-bold text-green-700 mb-5">
        Rate Your Stay
      </h2>

      <label className="block mb-2 font-semibold">
        Rating
      </label>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full border rounded-lg p-3 mb-4 text-black"
      >
        <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
        <option value={4}>⭐⭐⭐⭐ (4)</option>
        <option value={3}>⭐⭐⭐ (3)</option>
        <option value={2}>⭐⭐ (2)</option>
        <option value={1}>⭐ (1)</option>
      </select>

      <label className="block mb-2 font-semibold">
        Feedback
      </label>

      <textarea
        rows="5"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full border rounded-lg p-3 text-black"
        placeholder="Share your experience..."
      />

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setShowReviewModal(false)}
          className="px-5 py-2 bg-gray-500 text-white rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={submitReview}
          className="px-5 py-2 bg-green-600 text-white rounded-lg"
        >
          Submit
        </button>

      </div>

    </div>

  </div>
)}

      <Footer />
    </>
  );
}

export default MyBookings;