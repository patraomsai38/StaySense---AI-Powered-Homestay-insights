import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HomestayCard from "../components/booking/HomestayCard";
import BookingModal from "../components/booking/BookingModal";
import BookingSuccess from "../components/booking/BookingSuccess";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getNearbyHomestays } from "../services/homestayService";

const LOCATION_API = "http://localhost:5000/api/location/search";
const BOOKING_API = "http://localhost:5000/api/bookings";

function Booking() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">

        {/* Hero */}

        <div className="max-w-4xl mx-auto text-center mb-14">

          <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
            🌿 AI Powered Booking
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-green-700 dark:text-green-400 leading-tight">
            Discover Nearby Homestays
          </h1>

          <p className="mt-6 text-xl leading-9 text-gray-600 dark:text-gray-300">
            Find beautiful homestays near your current location or search
            anywhere across India.
          </p>

        </div>

        {/* Search Bar */}

        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 mb-14">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            <input
              type="text"
              placeholder="Search city (Goa, Mussoorie...)"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 dark:bg-gray-700 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <button
              onClick={searchLocation}
              className="bg-green-700 hover:bg-green-800 text-white rounded-xl py-4 font-semibold transition"
            >
              🔍 Search
            </button>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 dark:bg-gray-700"
            >
              <option value="all">All Budgets</option>
              <option value="2000">Under ₹2000</option>
              <option value="3000">Under ₹3000</option>
              <option value="4000">Above ₹3000</option>
            </select>

            <button
              onClick={getCurrentLocation}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold transition"
            >
              📍 Current Location
            </button>

          </div>

        </div>

                {/* ==========================
            Loading
        ========================== */}

        {loading && (
          <div className="flex flex-col items-center justify-center py-32">

            <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>

            <p className="mt-6 text-xl font-semibold">
              Finding nearby homestays...
            </p>

          </div>
        )}

        {/* ==========================
            Error
        ========================== */}

        {!loading && error && (

          <div className="max-w-3xl mx-auto rounded-2xl border border-red-300 bg-red-50 p-8 text-center">

            <h2 className="text-2xl font-bold text-red-600">
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

            <div className="py-24 text-center">

              <h2 className="text-3xl font-bold">
                No homestays found
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
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

            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {filteredHomestays.map((stay, index) => (

                <HomestayCard
                  key={stay.properties?.place_id || index}
                  stay={stay}
                  openDirections={openDirections}
                  handleBookNow={handleBookNow}
                />

              ))}

            </div>

          )}

        {/* ==========================
            Booking Modal
        ========================== */}

        <BookingModal
          selectedStay={selectedStay}
          bookingData={bookingData}
          setBookingData={setBookingData}
          handleBooking={handleBooking}
          setSelectedStay={setSelectedStay}
        />

        {/* ==========================
            Booking Success
        ========================== */}

        <BookingSuccess
          showSuccess={bookingSuccess}
          bookingDetails={{
            homestay: confirmedStay?.homestayName,
            name: bookingData.name,
            guests: confirmedStay?.guests,
            totalPrice: confirmedStay?.estimatedPrice,
          }}
          onClose={() => {
            setBookingSuccess(false);
            setConfirmedStay(null);
          }}
        />

      </main>

      <Footer />

    </div>
  );
}

export default Booking;