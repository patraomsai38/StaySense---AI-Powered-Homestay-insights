function BookingModal({
  selectedStay,
  bookingData,
  setBookingData,
  handleBooking,
  setSelectedStay,
}) {
  if (!selectedStay) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-xl p-8">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Book Your Stay
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Guest Name"
            value={bookingData.name}
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                name: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              value={bookingData.checkIn}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  checkIn: e.target.value,
                })
              }
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="date"
              value={bookingData.checkOut}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  checkOut: e.target.value,
                })
              }
              className="border rounded-xl px-4 py-3"
            />

          </div>

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
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="bg-green-50 dark:bg-gray-700 rounded-2xl p-5">

            <h3 className="font-bold text-xl mb-3">
              Booking Summary
            </h3>

            <p>
              <strong>Homestay:</strong>{" "}
              {selectedStay.properties?.name}
            </p>

            <p>
              <strong>Price:</strong> ₹
              {selectedStay.estimatedPrice}/night
            </p>

            <p>
              <strong>Guests:</strong>{" "}
              {bookingData.guests}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">

            <button
              onClick={() => setSelectedStay(null)}
              className="bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              onClick={handleBooking}
              className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl"
            >
              Confirm Booking
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookingModal;