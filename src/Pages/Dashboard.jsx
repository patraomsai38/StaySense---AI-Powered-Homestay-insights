import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Host Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Monitor your homestay performance, guest satisfaction,
          booking trends, and AI-generated insights.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Bookings
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              128
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Occupancy Rate
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              82%
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Guest Satisfaction
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              4.8★
            </p>
          </div>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            AI Review Insights
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Guests highly appreciate cleanliness and hospitality.</li>
            <li>⚠️ Food quality received mixed feedback.</li>
            <li>📈 Positive reviews increased by 15% this month.</li>
            <li>🌿 Eco-tourism activities are highly rated.</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Performance Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-green-100 rounded-lg p-4">
              <h3 className="font-semibold">
                Most Appreciated Service
              </h3>

              <p className="mt-2 text-green-700 font-bold">
                Hospitality & Cleanliness
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4">
              <h3 className="font-semibold">
                Recommended Action
              </h3>

              <p className="mt-2 text-green-700 font-bold">
                Improve local food offerings
              </p>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;