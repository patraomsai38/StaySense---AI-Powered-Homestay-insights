import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyBookings() {
  const navigate = useNavigate();

  // ==========================
  // States
  // ==========================

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showReviewModal, setShowReviewModal] =
    useState(false);

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const [cleanliness, setCleanliness] =
    useState(5);

  const [hospitality, setHospitality] =
    useState(5);

  const [foodQuality, setFoodQuality] =
    useState(5);

  const [locationRating, setLocationRating] =
    useState(5);

  const [valueForMoney, setValueForMoney] =
    useState(5);

  // ==========================
  // Login Protection
  // ==========================

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    fetchBookings();
  }, []);

  // ==========================
  // Fetch Bookings
  // ==========================

  const fetchBookings = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings/${userId}`,
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
    // ==========================
  // Cancel Booking
  // ==========================

  const cancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/bookings/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings((prevBookings) =>
        prevBookings.filter(
          (booking) => booking.id !== bookingId
        )
      );

      alert("Booking cancelled successfully.");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to cancel booking."
      );

    }
  };

  // ==========================
  // Open Review Modal
  // ==========================

  const openReviewModal = (booking) => {
    setSelectedBooking(booking);

    setRating(5);
    setFeedback("");

    setCleanliness(5);
    setHospitality(5);
    setFoodQuality(5);
    setLocationRating(5);
    setValueForMoney(5);

    setShowReviewModal(true);
  };

  // ==========================
  // Submit Review
  // ==========================

  const submitReview = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/reviews`,
        {
          bookingId: selectedBooking.id,
          rating,
          feedback,
          cleanliness,
          hospitality,
          foodQuality,
          locationRating,
          valueForMoney,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Review submitted successfully!");

      await fetchBookings();

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

  // ==========================
  // Loading Screen
  // ==========================

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">

          <div className="text-center">

            <div className="w-16 h-16 rounded-full border-4 border-green-600 border-t-transparent animate-spin mx-auto"></div>

            <p className="mt-6 text-xl font-semibold">
              Loading your bookings...
            </p>

          </div>

        </div>

        <Footer />

      </>
    );
  }

  // ==========================
  // JSX
  // ==========================

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">

        <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">

          {/* Hero Section */}

          <div className="max-w-4xl mx-auto text-center mb-14">

            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
              🏡 Your Travel Dashboard
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-green-700 dark:text-green-400">
              My Bookings
            </h1>

            <p className="mt-6 text-xl leading-9 text-gray-600 dark:text-gray-300">
              View, manage and review all your homestay bookings in one place.
            </p>

          </div>
                  {/* ==========================
            Empty State / Booking List
        ========================== */}

        {bookings.length === 0 ? (

          <div className="max-w-xl mx-auto py-24 text-center">

            <div className="text-7xl mb-6">
              🏡
            </div>

            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              No Bookings Found
            </h2>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Book your first homestay and it will appear here.
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
            >
              Explore Homestays
            </button>

          </div>

        ) : (

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                <img
                  src={
                    booking.image ||
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                  }
                  alt={booking.homestayName}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
                    {booking.homestayName}
                  </h2>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    📍 {booking.address}
                  </p>

                  {booking.category && (

                    <p className="mt-3">
                      🏡 <strong>Category:</strong> {booking.category}
                    </p>

                  )}

                  <p className="mt-4">
                    📅 <strong>Check In:</strong>{" "}
                    {new Date(
                      booking.checkIn
                    ).toLocaleDateString()}
                  </p>

                  <p className="mt-2">
                    📅 <strong>Check Out:</strong>{" "}
                    {new Date(
                      booking.checkOut
                    ).toLocaleDateString()}
                  </p>

                  <p className="mt-2">
                    👥 <strong>Guests:</strong>{" "}
                    {booking.guests}
                  </p>

                  <p className="mt-2">
                    📌 <strong>Status:</strong>{" "}
                    <span className="font-semibold text-green-600">
                      {booking.status}
                    </span>
                  </p>

                  <p className="mt-5 text-3xl font-bold text-green-700">
                    ₹{booking.estimatedPrice}
                  </p>

                  <div className="mt-6 flex gap-3">

                    {(() => {

                      const today = new Date();

                      const checkIn = new Date(
                        booking.checkIn
                      );

                      const checkOut = new Date(
                        booking.checkOut
                      );

                      if (today < checkIn) {
                        return (
                          <button
                            onClick={() =>
                              cancelBooking(booking.id)
                            }
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                          >
                            Cancel Booking
                          </button>
                        );
                      }

                      if (
                        today >= checkIn &&
                        today <= checkOut
                      ) {
                        return (
                          <button
                            disabled
                            className="flex-1 bg-yellow-500 text-white py-3 rounded-xl cursor-not-allowed"
                          >
                            Stay in Progress
                          </button>
                        );
                      }

                      return (
                        <button
                          disabled
                          className="flex-1 bg-gray-500 text-white py-3 rounded-xl cursor-not-allowed"
                        >
                          Booking Completed
                        </button>
                      );

                    })()}
                                        {/* Review Button */}

                    {new Date() > new Date(booking.checkOut) ? (

                      booking.review ? (

                        <button
                          disabled
                          className="flex-1 bg-green-600 text-white py-3 rounded-xl cursor-not-allowed font-semibold"
                        >
                          ✅ Review Submitted
                        </button>

                      ) : (

                        <button
                          onClick={() => openReviewModal(booking)}
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition"
                        >
                          ⭐ Review
                        </button>

                      )

                    ) : (

                      <button
                        disabled
                        className="flex-1 bg-gray-400 text-white py-3 rounded-xl cursor-not-allowed"
                      >
                        Review Available After Stay
                      </button>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

      {/* ==========================
          Review Modal
      ========================== */}

      {showReviewModal && (

        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">

            <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6">
              Rate Your Stay
            </h2>

            <label className="block font-semibold mb-2">
              Overall Rating
            </label>

            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border rounded-xl p-3 mb-5 text-black"
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {"⭐".repeat(num)} ({num})
                </option>
              ))}
            </select>

            {[
              {
                label: "Cleanliness",
                value: cleanliness,
                setter: setCleanliness,
              },
              {
                label: "Hospitality",
                value: hospitality,
                setter: setHospitality,
              },
              {
                label: "Food Quality",
                value: foodQuality,
                setter: setFoodQuality,
              },
              {
                label: "Location",
                value: locationRating,
                setter: setLocationRating,
              },
              {
                label: "Value for Money",
                value: valueForMoney,
                setter: setValueForMoney,
              },
            ].map((item) => (

              <div key={item.label} className="mb-5">

                <label className="block font-semibold mb-2">
                  {item.label}
                </label>

                <select
                  value={item.value}
                  onChange={(e) =>
                    item.setter(Number(e.target.value))
                  }
                  className="w-full border rounded-xl p-3 text-black"
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {"⭐".repeat(num)} ({num})
                    </option>
                  ))}
                </select>

              </div>

            ))}

            <label className="block font-semibold mb-2">
              Feedback
            </label>

            <textarea
              rows="5"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience..."
              className="w-full border rounded-xl p-3 text-black"
            />

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowReviewModal(false)}
                className="px-6 py-3 rounded-xl bg-gray-500 hover:bg-gray-600 text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={submitReview}
                className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
              >
                Submit Review
              </button>

            </div>

          </div>

        </div>

      )}

      <Footer />

    </div>

  </>
);

}

export default MyBookings;