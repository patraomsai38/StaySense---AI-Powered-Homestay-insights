import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Booking() {
  const homestays = [
    {
      id: 1,
      name: "Mountain Retreat",
      location: "Rishikesh",
      price: 2499,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Riverside Cottage",
      location: "Rishikesh",
      price: 1999,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Forest View Stay",
      location: "Mussoorie",
      price: 1799,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Eco Valley Resort",
      location: "Nainital",
      price: 2999,
      rating: 4.9,
    },
    {
      id: 5,
      name: "Green Hills Homestay",
      location: "Manali",
      price: 2299,
      rating: 4.6,
    },
    {
      id: 6,
      name: "Lake View Cottage",
      location: "Nainital",
      price: 2699,
      rating: 4.8,
    },
  ];

  const [budget, setBudget] = useState("all");
  const [rating, setRating] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedStay, setSelectedStay] = useState("");
  const [guestName, setGuestName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

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

  const handleBooking = (name) => {
    setSelectedStay(name);
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-3">
          Explore Homestays
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Discover the perfect stay based on your budget, rating, and location.
        </p>

        {/* Booking Modal */}
{selectedStay && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full">

      {!bookingConfirmed ? (
        <>
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Book {selectedStay}
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter your full name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full border rounded-lg p-3 dark:bg-gray-700"
            />

            <div>
              <label className="block mb-1 font-medium">
                Check-in Date
              </label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border rounded-lg p-3 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Check-out Date
              </label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border rounded-lg p-3 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Number of Guests
              </label>

              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border rounded-lg p-3 dark:bg-gray-700"
              />
            </div>

            <div className="flex gap-3">

              <button
                onClick={() => setSelectedStay("")}
                className="flex-1 border border-gray-400 py-3 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (
                    guestName &&
                    checkIn &&
                    checkOut
                  ) {
                    setBookingConfirmed(true);
                  } else {
                    alert("Please fill all booking details.");
                  }
                }}
                className="flex-1 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
              >
                Confirm Booking
              </button>

            </div>

          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
            ✅ Booking Confirmed
          </h2>

          <div className="space-y-3 mb-6">

            <p>
              <strong>Name:</strong> {guestName}
            </p>

            <p>
              <strong>Homestay:</strong> {selectedStay}
            </p>

            <p>
              <strong>Guests:</strong> {guests}
            </p>

            <p>
              <strong>Check-in:</strong> {checkIn}
            </p>

            <p>
              <strong>Check-out:</strong> {checkOut}
            </p>

          </div>

          <button
            onClick={() => {
              setSelectedStay("");
              setBookingConfirmed(false);
              setGuestName("");
              setCheckIn("");
              setCheckOut("");
              setGuests(1);
            }}
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
          >
            Close
          </button>
        </>
      )}

    </div>
  </div>
)}



        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Filter Homestays
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search by location..."
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
              <option value="4.5">4.5+ Stars</option>
              <option value="4.7">4.7+ Stars</option>
              <option value="4.9">4.9 Stars</option>
            </select>

          </div>
        </div>

        {/* Homestay Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {filteredHomestays.map((stay) => (
            <div
              key={stay.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-2">
                🏡 {stay.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                📍 {stay.location}
              </p>

              <p className="mt-3 text-green-700 font-bold">
                ⭐ {stay.rating}
              </p>

              <p className="mt-2 text-xl font-bold">
                ₹{stay.price}/night
              </p>

              <button
                onClick={() => handleBooking(stay.name)}
                className="w-full mt-5 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
              >
                Book Now
              </button>
            </div>
          ))}

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Booking;