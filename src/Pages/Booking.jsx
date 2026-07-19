import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getNearbyHomestays } from "../services/homestayService";

const LOCATION_API = "http://localhost:5000/api/location/search";
const BOOKING_API = "http://localhost:5000/api/bookings";

function Booking() {
  const navigate = useNavigate();

  // ==========================
  // States
  // ==========================

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [homestays, setHomestays] = useState([]);
  const [filteredHomestays, setFilteredHomestays] = useState([]);

  const [searchCity, setSearchCity] = useState("");
  const [budget, setBudget] = useState("all");

  const [selectedStay, setSelectedStay] = useState(null);

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [confirmedStay, setConfirmedStay] = useState(null);

  const [bookingData, setBookingData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

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

    getCurrentLocation();
  }, [navigate]);

  // ==========================
  // Current Location
  // ==========================

  const getCurrentLocation = () => {
    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await getNearbyHomestays(
            latitude,
            longitude
          );

          const stays = data.map((stay) => ({
            ...stay,
            estimatedPrice:
              Math.floor(Math.random() * 2500) + 1500,
            image:
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
          }));

          setHomestays(stays);
          setFilteredHomestays(stays);
        } catch (err) {
          console.error(err);
          setError("Unable to fetch nearby homestays.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError("Please allow location access.");
      }
    );
  };

  // ==========================
  // Search Location
  // ==========================

  const searchLocation = async () => {
    if (!searchCity.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${LOCATION_API}?city=${searchCity}`
      );

      const { lat, lon } = response.data;

      const data = await getNearbyHomestays(lat, lon);

      const stays = data.map((stay) => ({
        ...stay,
        estimatedPrice:
          Math.floor(Math.random() * 2500) + 1500,
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      }));

      setHomestays(stays);
      setFilteredHomestays(stays);
    } catch (err) {
      console.error(err);
      setError("Location not found.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Budget Filter
  // ==========================

  useEffect(() => {
    let result = [...homestays];

    if (budget === "2000") {
      result = result.filter(
        (stay) => stay.estimatedPrice <= 2000
      );
    } else if (budget === "3000") {
      result = result.filter(
        (stay) => stay.estimatedPrice <= 3000
      );
    } else if (budget === "4000") {
      result = result.filter(
        (stay) => stay.estimatedPrice > 3000
      );
    }

    setFilteredHomestays(result);
  }, [budget, homestays]);

  // ==========================
  // Google Maps
  // ==========================

  const openDirections = (lat, lon) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`,
      "_blank"
    );
  };

  // ==========================
  // Open Booking Modal
  // ==========================

  const handleBookNow = (stay) => {
    setSelectedStay(stay);

    const user =
      JSON.parse(localStorage.getItem("user")) || {};

    setBookingData({
      name: user.username || "",
      checkIn: "",
      checkOut: "",
      guests: 1,
    });
  };
    // ==========================
  // Confirm Booking
  // ==========================

  const handleBooking = async () => {
    if (
      !bookingData.name ||
      !bookingData.checkIn ||
      !bookingData.checkOut
    ) {
      alert("Please fill all booking details.");
      return;
    }

    if (
      new Date(bookingData.checkOut) <=
      new Date(bookingData.checkIn)
    ) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      const bookingPayload = {
        userId: Number(userId),

        homestayName:
          selectedStay?.properties?.name || "Unnamed Homestay",

        address:
          selectedStay?.properties?.formatted ||
          "Unknown Address",

        latitude: selectedStay?.properties?.lat,

        longitude: selectedStay?.properties?.lon,

        estimatedPrice:
          selectedStay?.estimatedPrice || 0,

        category:
          selectedStay?.properties?.categories?.[0]
            ?.replace("accommodation.", "")
            ?.replaceAll("_", " ") || "Homestay",

        image: selectedStay?.image,

        checkIn: bookingData.checkIn,

        checkOut: bookingData.checkOut,

        guests: Number(bookingData.guests),
      };

      const response = await axios.post(
        BOOKING_API,
        bookingPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setConfirmedStay(response.data.booking);

      setBookingSuccess(true);

      setSelectedStay(null);

      const user =
        JSON.parse(localStorage.getItem("user")) || {};

      setBookingData({
        name: user.username || "",
        checkIn: "",
        checkOut: "",
        guests: 1,
      });

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Booking failed."
      );
    }
  };

  // ==========================
  // Start JSX
  // ==========================

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-green-700 dark:text-green-400">
            Discover Nearby Homestays
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find beautiful homestays near your current location
            or search anywhere across India.
          </p>

        </div>

        {/* Search Section */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-10">

          <div className="grid lg:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Search city (Goa, Mussoorie...)"
              value={searchCity}
              onChange={(e) =>
                setSearchCity(e.target.value)
              }
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              onClick={searchLocation}
              className="bg-green-700 hover:bg-green-800 text-white rounded-lg py-3 font-semibold"
            >
              🔍 Search
            </button>

            <select
              value={budget}
              onChange={(e) =>
                setBudget(e.target.value)
              }
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 dark:bg-gray-700"
            >
              <option value="all">All Budgets</option>
              <option value="2000">Under ₹2000</option>
              <option value="3000">Under ₹3000</option>
              <option value="4000">Above ₹3000</option>
            </select>

            <button
              onClick={getCurrentLocation}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"
            >
              📍 Current Location
            </button>

          </div>

        </div>
                {/* ==========================
            Loading
        ========================== */}

        {loading && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-600 border-t-transparent"></div>

            <p className="mt-6 text-xl font-semibold">
              Finding nearby homestays...
            </p>
          </div>
        )}

        {/* ==========================
            Error
        ========================== */}

        {!loading && error && (
          <div className="bg-red-100 border border-red-400 text-red-700 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold">
              {error}
            </h2>
          </div>
        )}

        {/* ==========================
            No Results
        ========================== */}

        {!loading &&
          !error &&
          filteredHomestays.length === 0 && (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">
                No homestays found
              </h2>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Try searching another destination.
              </p>

            </div>
          )}

        {/* ==========================
            Homestay Cards
        ========================== */}

        {!loading &&
          !error &&
          filteredHomestays.length > 0 && (

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredHomestays.map((stay, index) => {

                const name =
                  stay.properties?.name ||
                  "Unnamed Homestay";

                const address =
                  stay.properties?.formatted ||
                  "Address unavailable";

                const category =
                  stay.properties?.categories?.[0]
                    ?.replace("accommodation.", "")
                    ?.replaceAll("_", " ") ||
                  "Homestay";

                return (

                  <div
                    key={stay.properties?.place_id || index}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >

                    <img
                      src={stay.image}
                      alt={name}
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-6">

                      <h2 className="text-2xl font-bold mb-2">
                        {name}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        📍 {address}
                      </p>

                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {category}
                      </span>

                      <div className="flex justify-between items-center mb-5">

                        <div>

                          <p className="text-sm text-gray-500">
                            Estimated Price
                          </p>

                          <h3 className="text-2xl font-bold text-green-700">
                            ₹{stay.estimatedPrice}
                          </h3>

                        </div>

                        <div className="text-right">

                          <p className="text-yellow-500 font-semibold">
                            ⭐ 4.5
                          </p>

                          <p className="text-sm text-gray-500">
                            Popular Stay
                          </p>

                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-3">

                        <button
                          onClick={() =>
                            openDirections(
                              stay.properties.lat,
                              stay.properties.lon
                            )
                          }
                          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                        >
                          📍 Directions
                        </button>

                        <button
                          onClick={() => handleBookNow(stay)}
                          className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
                        >
                          Book Now
                        </button>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          )}        {/* ==========================
            Booking Modal
        ========================== */}

        {selectedStay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-8">

              <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
                Book Your Stay
              </h2>

              <div className="space-y-4">

                <div>
                  <label className="block font-semibold mb-2">
                    Guest Name
                  </label>

                  <input
                    type="text"
                    value={bookingData.name}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        name: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <label className="block font-semibold mb-2">
                      Check In
                    </label>

                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          checkIn: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Check Out
                    </label>

                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          checkOut: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Guests
                  </label>

                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={bookingData.guests}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        guests: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
                  />

                </div>

                <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-5 mt-6">

                  <h3 className="font-bold text-xl mb-3">
                    Booking Summary
                  </h3>

                  <p>
                    <strong>Homestay:</strong>{" "}
                    {selectedStay.properties?.name}
                  </p>

                  <p>
                    <strong>Price:</strong> ₹
                    {selectedStay.estimatedPrice} / night
                  </p>

                  <p>
                    <strong>Category:</strong>{" "}
                    {selectedStay.properties?.categories?.[0]
                      ?.replace("accommodation.", "")
                      ?.replaceAll("_", " ")}
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <button
                    onClick={() => setSelectedStay(null)}
                    className="bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleBooking}
                    className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
                  >
                    Confirm Booking
                  </button>

                </div>

              </div>

            </div>

          </div>
        )}        {/* ==========================
            Booking Success Popup
        ========================== */}

        {bookingSuccess && confirmedStay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">

              <div className="text-6xl mb-4">🎉</div>

              <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
                Booking Confirmed!
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your booking has been successfully confirmed.
              </p>

              <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-5 text-left space-y-2">

                <p>
                  <strong>Homestay:</strong>{" "}
                  {confirmedStay.homestayName}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {confirmedStay.address}
                </p>

                <p>
                  <strong>Guests:</strong>{" "}
                  {confirmedStay.guests}
                </p>

                <p>
                  <strong>Check In:</strong>{" "}
                  {new Date(
                    confirmedStay.checkIn
                  ).toLocaleDateString()}
                </p>

                <p>
                  <strong>Check Out:</strong>{" "}
                  {new Date(
                    confirmedStay.checkOut
                  ).toLocaleDateString()}
                </p>

                <p>
                  <strong>Price:</strong> ₹
                  {confirmedStay.estimatedPrice}
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setConfirmedStay(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                >
                  Continue
                </button>

                <button
                  onClick={() => navigate("/mybookings")}
                  className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
                >
                  My Bookings
                </button>

              </div>

            </div>

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default Booking;
  