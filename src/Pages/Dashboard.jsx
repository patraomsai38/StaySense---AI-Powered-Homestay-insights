import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Dashboard() {
  const bookingData = [
    { month: "Jan", bookings: 40 },
    { month: "Feb", bookings: 55 },
    { month: "Mar", bookings: 70 },
    { month: "Apr", bookings: 85 },
    { month: "May", bookings: 95 },
    { month: "Jun", bookings: 128 },
  ];

  const sentimentData = [
    { name: "Positive", value: 78 },
    { name: "Neutral", value: 15 },
    { name: "Negative", value: 7 },
  ];

  const COLORS = ["#16a34a", "#facc15", "#ef4444"];

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
          Host Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Monitor your homestay performance, guest satisfaction,
          booking trends, and AI-generated insights.
        </p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Total Bookings
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              128
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Occupancy Rate
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              82%
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Guest Satisfaction
            </h2>

            <p className="text-4xl font-bold text-green-700 mt-2">
              4.8★
            </p>
          </div>

        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Booking Trend Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Booking Trends
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#16a34a"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Sentiment Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Review Sentiment
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {sentimentData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* AI Review Insights */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            AI Review Insights
          </h2>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>✅ Guests highly appreciate cleanliness and hospitality.</li>
            <li>⚠️ Food quality received mixed feedback.</li>
            <li>📈 Positive reviews increased by 15% this month.</li>
            <li>🌿 Eco-tourism activities are highly rated.</li>
            <li>⭐ Average guest rating improved by 8% this month.</li>
          </ul>
        </div>

        {/* Performance Summary */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Performance Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold">
                Most Appreciated Service
              </h3>

              <p className="mt-2 text-green-700 dark:text-green-400 font-bold">
                Hospitality & Cleanliness
              </p>
            </div>

            <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold">
                Recommended Action
              </h3>

              <p className="mt-2 text-green-700 dark:text-green-400 font-bold">
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