import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Booking() {
  const navigate = useNavigate();

  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [budget, setBudget] = useState("all");
  const [rating, setRating] = useState("all");
  const [search, setSearch] = useState("");

  const [selectedStay, setSelectedStay] = useState(null);

  const [bookingData, setBookingData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to fetch homestays");
        }
        return res.json();
      })
      .then((data) => {
        setHomestays(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to connect to backend.");
        setLoading(false);
      });
  }, []);

  const filteredHomestays = homestays.filter((stay) => {
    const budgetMatch =
      budget === "all"
        ? true
        : budget === "2000"
        ? stay.price <= 2000
        : budget === "2500"
        ? stay.price <= 2500
        : stay.price > 2500;

    const ratingMatch =
      rating === "all"
        ? true
        : stay.rating >= Number(rating);

    const searchMatch = stay.location
      .toLowerCase()
      .includes(search.toLowerCase());

    return budgetMatch && ratingMatch && searchMatch;
  });

  const handleBookNow = (stay) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please login before booking a homestay.");
      navigate("/login");
      return;
    }

    setSelectedStay(stay);

    setBookingData({
      name: sessionStorage.getItem("username") || "",
      checkIn: "",
      checkOut: "",
      guests: 1,
    });
  };

  const handleBooking = () => {
    if (
      bookingData.name === "" ||
      bookingData.checkIn === "" ||
      bookingData.checkOut === ""
    ) {
      alert("Please fill all booking details.");
      return;
    }

    setSelectedStay(null);
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400">
          Explore Homestays
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-3 mb-10">
          Find the perfect stay according to your budget, reviews and location.
        </p>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-10">

          <h2 className="text-2xl font-bold mb-5">
            Search & Filter
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search Location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg p-3 dark:bg-gray-700"
            />

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border rounded-lg p-3 dark:bg-gray-700"
            >
              <option value="all">All Budgets</option>
              <option value="2000">Under ₹2000</option>
              <option value="2500">Under ₹2500</option>
              <option value="3000">Above ₹2500</option>
            </select>

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border rounded-lg p-3 dark:bg-gray-700"
            >
              <option value="all">All Ratings</option>
              <option value="4.5">4.5+</option>
              <option value="4.7">4.7+</option>
              <option value="4.9">4.9</option>
            </select>

          </div>

        </div>

        {loading && (
          <h2 className="text-center text-xl font-semibold">
            Loading Homestays...
          </h2>
        )}

        {error && (
          <h2 className="text-center text-red-600 font-semibold">
            {error}
          </h2>
        )}

        <div className="grid md:grid-cols-3 gap-8">
                    {filteredHomestays.map((stay) => (
            <div
              key={stay.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:scale-105 transition"
            >
              <h2 className="text-2xl font-bold">
                🏡 {stay.name}
              </h2>

              <p className="mt-2">
                📍 {stay.location}
              </p>

              <p className="mt-2 text-green-700 font-bold">
                ⭐ {stay.rating}
              </p>

              <p className="text-xl font-bold mt-2">
                ₹{stay.price}/night
              </p>

              <button
                onClick={() => handleBookNow(stay)}
                className="w-full mt-5 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Booking Form */}

        {selectedStay && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">

              <h2 className="text-3xl font-bold text-green-700 mb-6">
                Book {selectedStay.name}
              </h2>

              <input
                type="text"
                value={bookingData.name}
                readOnly
                className="w-full border rounded-lg p-3 mb-4 bg-gray-100 dark:bg-gray-700"
              />

              <label className="font-semibold">
                Check In
              </label>

              <input
                type="date"
                className="w-full border rounded-lg p-3 mb-4 dark:bg-gray-700"
                value={bookingData.checkIn}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    checkIn: e.target.value,
                  })
                }
              />

              <label className="font-semibold">
                Check Out
              </label>

              <input
                type="date"
                className="w-full border rounded-lg p-3 mb-4 dark:bg-gray-700"
                value={bookingData.checkOut}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    checkOut: e.target.value,
                  })
                }
              />

              <label className="font-semibold">
                Number of Guests
              </label>

              <input
                type="number"
                min="1"
                value={bookingData.guests}
                className="w-full border rounded-lg p-3 mb-6 dark:bg-gray-700"
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    guests: e.target.value,
                  })
                }
              />

              <div className="flex gap-4">

                <button
                  onClick={handleBooking}
                  className="flex-1 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
                >
                  Confirm Booking
                </button>

                <button
                  onClick={() => setSelectedStay(null)}
                  className="flex-1 border border-gray-400 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        )}

        {/* Booking Success */}

        {bookingSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl text-center max-w-md">

              <h2 className="text-3xl font-bold text-green-700 mb-5">
                🎉 Booking Confirmed
              </h2>

              <p className="mb-4 text-lg">
                Thank you <b>{bookingData.name}</b>.
              </p>

              <p className="mb-6">
                Your booking at <b>{selectedStay?.name}</b> has been confirmed successfully.
              </p>

              <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4 mb-6 text-left">

                <p>
                  <strong>📍 Location:</strong> {selectedStay?.location}
                </p>

                <p>
                  <strong>📅 Check In:</strong> {bookingData.checkIn}
                </p>

                <p>
                  <strong>📅 Check Out:</strong> {bookingData.checkOut}
                </p>

                <p>
                  <strong>👥 Guests:</strong> {bookingData.guests}
                </p>

              </div>

              <button
                onClick={() => setBookingSuccess(false)}
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              >
                Close
              </button>

            </div>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default Booking;