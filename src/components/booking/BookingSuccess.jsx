import { CheckCircle2 } from "lucide-react";

function BookingSuccess({
  showSuccess,
  bookingDetails,
  onClose,
}) {
  if (!showSuccess) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-[fadeIn_.3s_ease]">

        <CheckCircle2
          size={80}
          className="mx-auto text-green-600 mb-5"
        />

        <h2 className="text-3xl font-bold text-green-700 mb-3">
          Booking Confirmed!
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mb-6">
          Your booking has been successfully completed.
        </p>

        {bookingDetails && (
          <div className="bg-green-50 dark:bg-gray-700 rounded-2xl p-5 text-left space-y-2">

            <p>
              <strong>Homestay:</strong>{" "}
              {bookingDetails.homestay}
            </p>

            <p>
              <strong>Guest:</strong>{" "}
              {bookingDetails.name}
            </p>

            <p>
              <strong>Guests:</strong>{" "}
              {bookingDetails.guests}
            </p>

            <p>
              <strong>Total:</strong> ₹
              {bookingDetails.totalPrice}
            </p>

          </div>
        )}

        <button
          onClick={onClose}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default BookingSuccess;